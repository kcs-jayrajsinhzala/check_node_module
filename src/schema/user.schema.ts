import { Field, ObjectType } from '@nestjs/graphql';
import sequelize from 'sequelize';
import {
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  Table,
} from 'sequelize-typescript';
import { registerEnumType } from '@nestjs/graphql';
import { Company } from './company.schema';
import { Role } from './role.schema';

@Table({ timestamps: false })
@ObjectType({ isAbstract: true })
export class User extends Model {
  @Field()
  id?: number;

  @Column({ allowNull: false })
  @Field()
  first_name?: string;

  @Column({ allowNull: false })
  @Field()
  last_name?: string;

  @Column({ allowNull: false })
  @Field()
  email?: string;

  @Column({ allowNull: false })
  @Field()
  password?: string;

  @Column({ allowNull: false })
  @Field()
  mobile_number?: number;

  @Column({ allowNull: false })
  @Field()
  profile_photo?: string;

  @ForeignKey(() => Role)
  @Column({ allowNull: true })
  @Field()
  role_id?: number;

  @BelongsTo(() => Role, {
    foreignKey: 'role_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => Role, { nullable: true })
  Role?: Role | null;

  @ForeignKey(() => Company)
  @Column({ allowNull: true })
  @Field()
  company_id?: number;

  @BelongsTo(() => Company, {
    foreignKey: 'company_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => Company, { nullable: true })
  Company?: Company | null;

  @Column({
    type: sequelize.ENUM('approved', 'pending', 'denied'),
    defaultValue: 'pending',
  })
  @Field()
  status?: EnumStatus;

  @Column({ allowNull: false, type: sequelize.ENUM('male', 'female', 'other') })
  @Field()
  gender?: EnumGender;

  @Column({ allowNull: true })
  @Field({ nullable: true })
  otp?: number;

  @Column({ defaultValue: true })
  @Field()
  is_active?: boolean;

  @Column({ defaultValue: false })
  @Field()
  is_deleted?: boolean;

  @ForeignKey(() => User)
  @Column({ allowNull: true })
  @Field()
  created_by?: number;

  @BelongsTo(() => User, {
    foreignKey: 'created_by',
    targetKey: 'id',
    as: 'user_created_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => User, { nullable: true })
  user_created_by_user?: User | null;

  @Column({ allowNull: false, defaultValue: new Date() })
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

  @Column({ allowNull: true })
  @Field()
  deleted_at?: Date;

  @ForeignKey(() => User)
  @Column({ allowNull: true })
  @Field()
  deleted_by?: number;

  @BelongsTo(() => User, {
    foreignKey: 'deleted_by',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @Field(() => User, { nullable: true })
  Deleted_By?: User | null;
}

export enum EnumStatus {
  approved = 'approved',
  pending = 'pending',
  rejected = 'rejected',
}

export enum EnumGender {
  male = 'male',
  female = 'female',
  other = 'other',
}

registerEnumType(EnumStatus, {
  name: 'EnumStatus',
  description: 'Status',
});

registerEnumType(EnumGender, {
  name: 'EnumGender',
  description: 'Gender',
});
