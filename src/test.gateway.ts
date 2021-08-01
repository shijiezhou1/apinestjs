import { UseInterceptors } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RedisPropagatorInterceptor } from '@src/shared/redis-propagator/redis-propagator.interceptor';

@UseInterceptors(RedisPropagatorInterceptor)
@WebSocketGateway()
export class EventsGateway {
    @SubscribeMessage('events')
    public findAll(): Observable<any> {
        return from([1, 2, 3, 4, 5, 6]).pipe(
            map((item) => {
                return { event: 'events', data: item };
            }),
        );
    }
    @SubscribeMessage('前端')
    public findAll2(): any {
        return { event: 'events', data: '前端'};
    }
}