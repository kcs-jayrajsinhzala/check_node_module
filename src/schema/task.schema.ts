import { FloatDataType } from 'sequelize';
import {
  Column,
  Model,
  ForeignKey,
  Table,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Project } from './project.schema';
import { Task_Priority } from './task-priority.schema';
import { Task_Status } from './task-status.schema';
import { User } from './user.schema';

@Table({ timestamps: false })
export class Task extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @ForeignKey(() => Project)
  @Column
  project_id: number;

  @BelongsTo(() => Project, {
    foreignKey: 'project_id',
    targetKey: 'id',
    as:'project',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  project: Project;

  @ForeignKey(() => User)
  @Column
  assigned_by: number;

  @BelongsTo(() => User, {
    foreignKey: 'assigned_by',
    targetKey: 'id',
    as:'assigned_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  assigned_by_user: User;

  @ForeignKey(() => User)
  @Column
  assigned_to: number;

  @BelongsTo(() => User, {
    foreignKey: 'assigned_to',
    targetKey: 'id',
    as:'assigned_to_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  assigned_to_user: User;

  @ForeignKey(() => Task_Status)
  @Column
  task_status_id: number;

  @BelongsTo(() => Task_Status, {
    foreignKey: 'task_status_id',
    targetKey: 'id',
    as:'task_status',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  task_status: Task_Status;

  @ForeignKey(() => Task_Priority)
  @Column
  task_priority_id: number;

  @BelongsTo(() => Task_Priority, {
    foreignKey: 'task_priority_id',
    targetKey: 'id',
    as:'task_priority',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  task_priority: Task_Priority;

  @Column({ type: DataType.FLOAT })
  estimated_hours: number;

  @Column({ type: DataType.FLOAT })
  reamining_hours: number;

  @Column({ allowNull: true, type: DataType.FLOAT })
  completed_hours: number;

  @Column
  start_date: Date;

  @Column
  end_date: Date;

  @Column
  close_date: Date;

  @Column({ defaultValue: false })
  is_deleted: boolean;

  @ForeignKey(() => User)
  @Column({ allowNull: false })
  created_by: number;

  @BelongsTo(() => User, {
    foreignKey: 'created_by',
    targetKey: 'id',
    as:'task_created_by_user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  task_created_by_user: User;
  
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
