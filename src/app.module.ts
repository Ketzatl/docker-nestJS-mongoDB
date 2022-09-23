import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
        //Replace this line with the one Cluster > Connect > Connect your Application
        `mongodb+srv://tukho:wds5séGjc895zs@docker-nestjs-mondoatla.iqdxb45.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
