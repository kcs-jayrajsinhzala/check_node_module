import { CreateDemo2Input } from './create-demo2.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateDemo2Input extends PartialType(CreateDemo2Input) {
  id: number;
}
