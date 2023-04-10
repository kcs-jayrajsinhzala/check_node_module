import { ENUM } from 'sequelize';
import {
  Column,
  Model,
  ForeignKey,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Error_Log } from './error-log.schema';
import { User } from './user.schema';

@Table({ timestamps: false })
export class Error_Log_Detail extends Model {
  @ForeignKey(() => Error_Log)
  @Column
  error_id: number;

  @BelongsTo(() => Error_Log, {
    foreignKey: 'error_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  Error_id: Error_Log;

  @Column({
    type: ENUM('normal', 'medium', 'critical'),
    allowNull: false,
  })
  error_priority: EnumErrorPriority;

  @Column({ allowNull: true })
  dev_notes: string;

  @Column({ allowNull: true })
  admin_notes: string;

  @Column({ defaultValue: false })
  is_resloved: boolean;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  created_by: number;

  @BelongsTo(() => User, {
    foreignKey: 'created_by',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  Created_By: User;

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
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  Updated_By: User;
}

export enum EnumErrorPriority {
  normal,
  medium,
  critical,
}
