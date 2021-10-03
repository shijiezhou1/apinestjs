import { Controller, Get, Param, createParamDecorator, Req } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import * as requestIp from 'request-ip';
export const IpAddress = createParamDecorator((data, req) => {
	if (req.clientIp)
		return req.clientIp;
	return requestIp.getClientIp(req); // In case we forgot to include requestIp.mw() in main.ts
});

@Controller('geolocation')
export class GeolocationController {
    constructor(private readonly geolocationService: GeolocationService) {}    

    @Get(':id')
    async findOne(@Param('id') id: any, @Req() req: any): Promise<string> {
        const clientIp = requestIp.getClientIp(req); 
        return this.geolocationService.findOne(id, clientIp);
    }
}