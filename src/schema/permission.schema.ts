import {
  Column,
  Model,
  ForeignKey,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Modules } from './modules.schema';
import { Role } from './role.schema';
import { User } from './user.schema';

@Table({ timestamps: false })
export class Permission extends Model {
  @ForeignKey(() => Modules)
  @Column
  module_id: number;
  
  @BelongsTo(() => Modules, {
    foreignKey: 'module_id',
    targetKey: 'id',
    as:'module',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  module: Modules;

  @ForeignKey(() => Role)
  @Column
  role_id: number;

  @BelongsTo(() => Role, {
    foreignKey: 'role_id',
    targetKey: 'id',
    as:'role',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  role: Role;

  @Column({ allowNull: false })
  operation_ids: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  created_by: number;

  @BelongsTo(() => User, {
    foreignKey: 'created_by',
    targetKey: 'id',
    as:'permission_created_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  permission_created_by_user: User;

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
