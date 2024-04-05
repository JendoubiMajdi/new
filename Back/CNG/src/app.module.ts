import { Module } from '@nestjs/common';
import { CongeModule } from './conge/conge.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CongeSchema } from './conge/conge.model';
import { AppController } from './conge/conge.controller';
import { AppService } from './conge/conge.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/CyberDev'),
    MongooseModule.forFeature([
      { name: 'conge', schema: CongeSchema },
    ]),
    CongeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
