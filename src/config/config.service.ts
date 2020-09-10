import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly envConfig: Record<string, string>

    constructor(path:string){
        this.envConfig = dotenv.parse(fs.readFileSync(path))
    }

    private get(key:string):string {
        return this.envConfig[key];
    }
}
