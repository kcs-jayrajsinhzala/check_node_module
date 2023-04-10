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
export class Login_Tracker extends Model {
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

  @Column
  ip_config: string;

  @Column
  geo_location: string;

  @Column({ type: DataType.TEXT })
  browser_info: string;

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
