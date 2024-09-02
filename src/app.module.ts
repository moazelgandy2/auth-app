import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb://localhost/nest'), NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
