import {
  Column,
  Model,
  ForeignKey,
  Table,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Modules } from './modules.schema';
import { User } from './user.schema';

@Table({ timestamps: false })
export class Error_Log extends Model {
  @ForeignKey(() => Modules)
  @Column
  module_id: number;

  @BelongsTo(() => Modules, {
    foreignKey: 'module_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  Module_id: Modules;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  User_id: User;

  @Column({ allowNull: true, type: DataType.TEXT })
  browser_info: string;

  @Column({ allowNull: true })
  ip_config: string;

  @Column
  file_name: string;

  @Column
  function_name: string;

  @Column
  error_stack: string;

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
