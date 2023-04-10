import { Injectable } from '@nestjs/common';
import { CreateDemo2Input } from './dto/create-demo2.input';
import { UpdateDemo2Input } from './dto/update-demo2.input';

@Injectable()
export class Demo2Service {
  create(createDemo2Input: CreateDemo2Input) {
    return 'This action adds a new demo2';
  }

  findAll() {
    return `This action returns all demo2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demo2`;
  }

  update(id: number, updateDemo2Input: UpdateDemo2Input) {
    return `This action updates a #${id} demo2`;
  }

  remove(id: number) {
    return `This action removes a #${id} demo2`;
  }
}
