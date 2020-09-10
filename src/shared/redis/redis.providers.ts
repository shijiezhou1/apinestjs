import { Provider } from '@nestjs/common';
import Redis = require('ioredis');

import { REDIS_PUBLISHER_CLIENT, REDIS_SUBSCRIBER_CLIENT, REDIS_PURE_CLIENT } from './redis.constants';

const hostName: string = process.env.REDIS_HOST ? process.env.REDIS_HOST: '127.0.0.1'
const port: any = process.env.REDIS_PORT ? process.env.REDIS_PORT : 6379
const pass: string = process.env.REDIS_PASS ? process.env.REDIS_PASS : ''

export type RedisClient = Redis.Redis;

export const redisProviders: Provider[] = [
  {
    useFactory: (): RedisClient => {
      return new Redis({
        host: hostName, // host will change if you restart container
        port: port,
        password: pass
      });
    },
    provide: REDIS_SUBSCRIBER_CLIENT,
  },
  {
    useFactory: (): RedisClient => {
      return new Redis({
        host: hostName, // host will change if you restart container
        port: port,
        password: pass
      });
    },
    provide: REDIS_PUBLISHER_CLIENT,
  },
  {
    useFactory: (): RedisClient => {
      return new Redis({
        host: hostName, // host will change if you restart container
        port: port,
        password: pass
      });
    },
    provide: REDIS_PURE_CLIENT,
  },

];
