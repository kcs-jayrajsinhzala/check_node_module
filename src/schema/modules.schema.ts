import {
  Column,
  Model,
  ForeignKey,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user.schema';

@Table({ timestamps: false })
export class Modules extends Model {
  @Column
  name: string;

  @Column({ defaultValue: true })
  is_active: boolean;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  created_by: number;

  @BelongsTo(() => User, {
    foreignKey: 'created_by',
    targetKey: 'id',
    as:'modules_created_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  modules_created_by_user: User;

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
    as:'created_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  updated_by_user: User;
}
