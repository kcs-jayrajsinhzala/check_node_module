import {
  Column,
  Model,
  ForeignKey,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Project } from './project.schema';
import { User } from './user.schema';

@Table({ timestamps: false })
export class Project_Team extends Model {
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

  @ForeignKey(() => Project)
  @Column
  project_id: number;

  @BelongsTo(() => Project, {
    foreignKey: 'project_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  Project_id: Project;

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
