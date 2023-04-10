import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Demo2Service } from './demo2.service';
import { CreateDemo2Input } from './dto/create-demo2.input';
import { UpdateDemo2Input } from './dto/update-demo2.input';

@Resolver('Demo2')
export class Demo2Resolver {
  constructor(private readonly demo2Service: Demo2Service) {}

  @Mutation('createDemo2')
  create(@Args('createDemo2Input') createDemo2Input: CreateDemo2Input) {
    return this.demo2Service.create(createDemo2Input);
  }

  @Query('demo2')
  findAll() {
    return this.demo2Service.findAll();
  }

  @Query('demo2')
  findOne(@Args('id') id: number) {
    return this.demo2Service.findOne(id);
  }

  @Mutation('updateDemo2')
  update(@Args('updateDemo2Input') updateDemo2Input: UpdateDemo2Input) {
    return this.demo2Service.update(updateDemo2Input.id, updateDemo2Input);
  }

  @Mutation('removeDemo2')
  remove(@Args('id') id: number) {
    return this.demo2Service.remove(id);
  }
}
