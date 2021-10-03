import { Injectable } from '@nestjs/common';
import { IGeoLocation } from '@src/interface/geolocation.interface';
import JSON_LOCATION_DATA from '@src/json/csvjson.json';

@Injectable()
export class GeolocationService {
    async findOne(id: string, ip: any): Promise<any> {
        const results = 'No result found';

        for (const loc of JSON_LOCATION_DATA as any) {
            if (loc.network.indexOf(ip) > -1) {
                return loc;
            } else {
                continue;
            }
        }

        return `results in ${ip}`;
    }
}
