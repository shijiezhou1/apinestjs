import {INestApplicationContext, WebSocketAdapter} from '@nestjs/common';
import {IoAdapter} from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';

import {RedisPropagatorService} from '@src/shared/redis-propagator/redis-propagator.service';

import {SocketStateService} from './socket-state.service';

interface TokenPayload {
  readonly userId: string;
}

export interface AuthenticatedSocket extends socketio.Socket {
  auth: TokenPayload;
}

export class SocketStateAdapter extends IoAdapter implements WebSocketAdapter {
  public constructor(
      private readonly app: INestApplicationContext,
      private readonly socketStateService: SocketStateService,
      private readonly redisPropagatorService: RedisPropagatorService,
  ) {
    super(app);
  }

  public create(port: number, options: socketio.ServerOptions = {}): socketio.Server {
    const server = super.createIOServer(port, options);
    this.redisPropagatorService.injectSocketServer(server);

    server.use(async (socket: AuthenticatedSocket, next) => {
      const token = socket.handshake.query?.token || socket.handshake.headers?.authorization;

      if (!token) {
        socket.auth = null;

        // not authenticated connection is still valid
        // thus no error
        return next();
      }

      try {
        // fake auth
        socket.auth = {
          userId: '1234',
        };

        return next();
      } catch (e) {
        return next(e);
      }
    });

    return server;
  }

  public bindClientConnect(server: socketio.Server, callback: Function): void {
    server.on('connection', (socket: AuthenticatedSocket) => {

      // CONNECTION MSG
      setInterval(() => {
        socket.emit('success', {message: 'Server Accepting Connections!📞'});
      }, 500);

      // WATCH
      process.on('SIGINT', () => {
        socket.emit('oops', {message: 'Server Shut Down'});
        process.exit();
      });

      socket.on('authenticate', function (payload) {
        console.log('authenticate')
        const data = JSON.parse(payload.data);
        if (data.password == 'passwd' && data.username == 'admin') {
          socket.emit('auth', { jwt: 'Generated JWT Token'} );
          socket.emit('success', { message: 'You are logged in' });
          socket.emit('info', { message: 'JWT Token Attached', jwt: 'GeneRAtEdJwTOken' });
        } else {
          socket.emit('oops', { message: 'Invalid Credentials Supplied' })
        }
      });


      if (socket.auth) {
        this.socketStateService.add(socket.auth.userId, socket);

        socket.on('disconnect', () => {
          this.socketStateService.remove(socket.auth.userId, socket);

          socket.removeAllListeners('disconnect');
        });
      }

      callback(socket);
    });
  }
}
