// import { WsAdapter } from '@nestjs/platform-ws';
// import { INestApplication } from '@nestjs/common';

import { RedisPropagatorService } from '@src/shared/redis-propagator/redis-propagator.service';
import { SocketStateAdapter } from '@src/shared/socket-state/socket-state.adapter';
import { SocketStateService } from '@src/shared/socket-state/socket-state.service';
import { join } from 'path';

export const initContainer = (app) => {
    const socketStateService = app.get(SocketStateService);
    const redisPropagatorService = app.get(RedisPropagatorService);

    app.useWebSocketAdapter(new SocketStateAdapter(app, socketStateService, redisPropagatorService));
    app.enableCors();
    //app.enableShutdownHooks();
    app.setGlobalPrefix('api');
    app.useStaticAssets(join(__dirname, '../../client/dist/'));
    return app;
};
