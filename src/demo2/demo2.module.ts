import { Module } from '@nestjs/common';
import { Demo2Service } from './demo2.service';
import { Demo2Resolver } from './demo2.resolver';

@Module({
  providers: [Demo2Resolver, Demo2Service]
})
export class Demo2Module {}
