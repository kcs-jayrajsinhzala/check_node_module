import { CreateCustomerInput } from './create-customer.input';
import { PartialType } from '@nestjs/mapped-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field()
  id: number;
  @Field()
  firstName?: string;
  @Field()
  lastName?: string;
  @Field()
  isActive: boolean;
  @Field()
  email?: string;
}
