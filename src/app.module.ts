import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExhibitionsService } from './exhibitions/exhibitions.service';
import { ExhibitionsModule } from './exhibitions/exhibitions.module';

@Module({
  imports: [ExhibitionsModule],
  controllers: [AppController],
  providers: [AppService, ExhibitionsService],
})
export class AppModule {}
