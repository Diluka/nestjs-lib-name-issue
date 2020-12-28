import { Module } from '@nestjs/common';
import { Demo2Service } from './demo2.service';

@Module({
  providers: [Demo2Service],
  exports: [Demo2Service],
})
export class Demo2Module {}
