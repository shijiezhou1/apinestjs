import { Inject, Injectable } from '@nestjs/common';
import { Observable, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { RedisSocketEventSendDTO } from '@src/shared/redis-propagator/dto/socket-event-send.dto';

import { REDIS_PUBLISHER_CLIENT, REDIS_SUBSCRIBER_CLIENT, REDIS_PURE_CLIENT, REDIS_EMAIL_HASH, } from './redis.constants';
import { RedisClient } from './redis.providers';

export interface RedisSubscribeMessage {
  readonly message: string;
  readonly channel: string;
}

@Injectable()
export class RedisService {
  public constructor(
    @Inject(REDIS_SUBSCRIBER_CLIENT)
    private readonly redisSubscriberClient: RedisClient,
    @Inject(REDIS_PUBLISHER_CLIENT)
    private readonly redisPublisherClient: RedisClient,
    @Inject(REDIS_PURE_CLIENT)
    private redisPureClient: RedisClient,
  ) {
  }

  public fromEvent<T extends RedisSocketEventSendDTO>(eventName: string): Observable<T> {
    this.redisSubscriberClient.subscribe(eventName);

    return Observable.create((observer: Observer<RedisSubscribeMessage>) =>
      this.redisSubscriberClient.on('message', (channel, message) => observer.next({ channel, message })),
    ).pipe(
      filter(({ channel }) => channel === eventName),
      map(({ message }) => JSON.parse(message)),
    );
  }

  public async publish(channel: string, value: unknown): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      return this.redisPublisherClient.publish(channel, JSON.stringify(value), (error, reply) => {
        if (error) {
          return reject(error);
        }

        return resolve(reply);
      });
    });
  }

  public async save(data: any): Promise<any> {
    console.log(data.email)
    return new Promise((resolve, reject) => {
      this.redisPureClient.hset(REDIS_EMAIL_HASH, new Date().toUTCString(), data.email, (err, reply) => {
        if (err) return reject(err);
        return resolve(reply)
      });
    })
  }

  public async getAllEmails(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.redisPureClient.hgetall(REDIS_EMAIL_HASH, (err, reply) => {
        if (err) return reject(err);
        return resolve(reply)
      });
    })
  }
}
