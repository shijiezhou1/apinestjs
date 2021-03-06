import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Cat } from 'src/interface/cats.interface';

@Injectable()
export class CatsService {
  constructor(private httpService: HttpService) {}
  
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAllCats(): Promise<Observable<any>> {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    const response = await this.httpService.get(url).toPromise();
    return response.data;
  }
}