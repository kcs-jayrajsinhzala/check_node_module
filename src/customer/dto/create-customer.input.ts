import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  isActive: boolean;
  @Field()
  email: string;
}
