import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MediumService {
  constructor(private httpService: HttpService) {}
  
  async findAllCats(): Promise<Observable<any>> {
    const url = 'https://medium.com/feed/@jay315';
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }
}