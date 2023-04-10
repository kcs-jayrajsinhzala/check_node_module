import {
  Column,
  Model,
  ForeignKey,
  HasMany,
  BelongsTo,
  Table,
} from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.schema';

@Table({ timestamps: false })
@ObjectType({ isAbstract: true })
export class Role extends Model {
  @Field()
  id?: number;

  @Column
  @Field()
  role_name?: string;

  @Column({ defaultValue: false })
  @Field()
  is_admin?: boolean;

  @Column({ defaultValue: true })
  @Field()
  is_active?: boolean;

  @Column({ defaultValue: false })
  @Field()
  is_deleted?: boolean;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  @Field()
  created_by?: number;

  @BelongsTo(() => User, {
    foreignKey: 'created_by',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => User, { nullable: true })
  Created_By?: User | null;

  @Column({ allowNull: false })
  @Field()
  created_at?: Date;

  @Column({ allowNull: true })
  @Field()
  updated_at?: Date;

  @ForeignKey(() => User)
  @Column({ allowNull: true })
  @Field()
  updated_by?: number;

  @BelongsTo(() => User, {
    foreignKey: 'updated_by',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => User, { nullable: true })
  Updated_By?: User | null;
}
