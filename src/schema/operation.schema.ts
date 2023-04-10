import {
  Column,
  Model,
  ForeignKey,
  Table,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Permission } from './permission.schema';
import { User } from './user.schema';

@Table({ timestamps: false })
export class Operation extends Model {
  @Column
  name: string;

  @Column({ defaultValue: true })
  is_active: boolean;

  @HasMany(() => Permission)
  permission: Permission[];

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  created_by: number;

  @BelongsTo(() => User, {
    foreignKey: 'created_by',
    targetKey: 'id',
    as:'opt_created_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  opt_created_by_user: User;

  @Column({ allowNull: false })
  created_at: Date;

  @Column({ allowNull: true })
  updated_at: Date;

  @ForeignKey(() => User)
  @Column({ allowNull: true })
  updated_by: number;

  @BelongsTo(() => User, {
    foreignKey: 'updated_by',
    targetKey: 'id',
    as:'updated_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  updated_by_user: User;
}
