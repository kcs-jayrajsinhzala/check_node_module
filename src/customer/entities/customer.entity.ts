import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
@ObjectType({ isAbstract: true })
export class Customer extends Model {
  @Field({ nullable: true })
  id?: number;

  @Column
  @Field()
  firstName?: string;

  @Column
  @Field()
  lastName?: string;

  @Column({ defaultValue: true })
  @Field()
  isActive?: boolean;

  @Column({ unique: true })
  @Field()
  email?: string;
}
