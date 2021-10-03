import { Module } from '@nestjs/common';
import { AppService } from '@src/app/app.service';
// import { join } from 'path'; // Server Static Client
// import { ServeStaticModule} from '@nestjs/serve-static'; // Server Static Client

import { AppController } from '@src/app/app.controller';
// import { EventsModule } from '../events/events.module';

import { EventsGateway } from '../test.gateway';

import { ArticlesModule } from '@src/articles/articles.module';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from '@src/login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from "@src/books/books.module";
import { PodcastsModule } from "@src/podcasts/podcasts.module";
import { MediumModule } from "@src/medium/medium.module";
import { CatsModule } from "@src/cats/cats.module";
import { SubscribeModule } from "@src/subscribe/subscribe.module";
import { ConsociationModule } from '@src/consociation/consociation.module';
import { ImageModule } from '@src/image/image.module';
import { GeolocationModule } from '@src/geolocation/geolocation.module';

@Module({
    // imports: [EventsModule],
    imports: [
        SharedModule,
        ArticlesModule,
        LoginModule,
        BooksModule,
        PodcastsModule,
        MediumModule,
        CatsModule,
        SubscribeModule,
        ConsociationModule,
        ImageModule,
        GeolocationModule,
        // ServeStaticModule.forRoot({ // Server Static Client
        //   rootPath: join(__dirname, '..', 'client/dist'), // Server Static Client
        // }), // Server Static Client
        // TODO: Disable mongodb for now
        MongooseModule.forRoot(process.env.MONGODB_MLAB),
    ],
    controllers: [AppController],
    providers: [AppService, EventsGateway],
})
export class AppModule {
}
