import { Field, ObjectType } from '@nestjs/graphql';
import { ENUM } from 'sequelize';
import {
  Column,
  Model,
  ForeignKey,
  Table,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.schema';

@Table({ timestamps: false })
@ObjectType({ isAbstract: true })
export class Project extends Model {
  @Field()
  id?: number;

  @Column
  @Field()
  name?: string;

  @Column({
    type: ENUM('FC', 'ODC', 'PRODUCT', 'MAINTENANCE', 'SAP', 'PROJECTS'),
  })
  @Field()
  project_type?: string;

  @Column({ type: DataType.FLOAT })
  @Field()
  estimated_hours?: number;

  @Column({ allowNull: true, type: DataType.FLOAT })
  @Field()
  completed_hours?: number;

  @Column
  @Field()
  start_date?: Date;

  @Column
  @Field()
  plan_delivery_date?: Date;

  @Column({ allowNull: true })
  @Field()
  actual_delivery_date?: Date;

  @Column({ allowNull: true })
  @Field()
  close_date?: Date;

  @Column({ allowNull: true })
  @Field()
  project_description?: string;

  @Column({ allowNull: true })
  @Field()
  url?: string;

  @Column({
    type: ENUM('approved', 'pending', 'denied'),
    defaultValue: 'pending',
  })
  @Field()
  status?: string;

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
    as:'created_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field()
  created_by_user?: User;

  @Column
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
    as:'updated_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field()
  updated_by_user?: User;
}

export enum EnumProjectType {
  FC,
  ODC,
  PRODUCT,
  MAINTENANCE,
  SAP,
  PROJECTS,
}

export enum EnumStatus {
  approved,
  pending,
  rejected,
}
