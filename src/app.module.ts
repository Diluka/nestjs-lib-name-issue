import { DemoModule } from '@app/demo';
import { Demo2Module } from '@app/demo2';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log(DemoModule, Demo2Module);

@Module({
  imports: [DemoModule, Demo2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
