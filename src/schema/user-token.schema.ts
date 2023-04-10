import {
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  Table,
  DataType,
} from 'sequelize-typescript';
import { User } from './user.schema';

@Table({ timestamps: false })
export class User_Token extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  User_id: User;

  @Column({ allowNull: false })
  refresh_token: string;

  @Column({ allowNull: false })
  access_token: string;
  @Column({ allowNull: false })
  created_at: Date;

  @Column({ allowNull: true })
  updated_at: Date;
}
