import { Injectable } from '@nestjs/common';
import { IGeoLocation } from '@src/interface/geolocation.interface';
import JSON_LOCATION_DATA from '@src/json/csvjson.json';

@Injectable()
export class GeolocationService {
    async findOne(ip: any): Promise<any> {
        const splittingIPAsArray = ip.split('.');
        const firstAndSecondIndex = splittingIPAsArray[0] + '.' + splittingIPAsArray[1];
        for (const loc of JSON_LOCATION_DATA as any) {
            if ((loc as IGeoLocation).network.indexOf(ip) > -1) { // MATCH FULL IPv4
                return loc;
            } else if (loc.network.indexOf(firstAndSecondIndex) > -1) { // MATCH PARTIAL IPv4
                return loc;
            } else {
                continue;
            }
        }

        return 'No result found';
    }
}
