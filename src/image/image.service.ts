import { HttpService } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
    constructor(private httpService: HttpService) {}

    async findImage(): Promise<string> {
        const randomImagesLists = [
            'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80',
        
            'https://images.unsplash.com/photo-1574957747984-82c7fa4eef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',

            'https://images.unsplash.com/photo-1444653389962-8149286c578a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80',

            'https://images.unsplash.com/photo-1611287158945-58d7fa81bb88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',

            'https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
        ];

        const MIN = 0;
        const MAX = 4;

        const randomIndex = Math.floor(Math.random() * MAX) - MIN;

        return randomImagesLists[randomIndex]
    }
}
