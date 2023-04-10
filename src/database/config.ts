import 'dotenv/config';
import { Company } from '../schema/company.schema';
import { Error_Log } from '../schema/error-log.schema';
import { Error_Log_Detail } from '../schema/error-log-details.schema';
import { Login_Tracker } from '../schema/login-tracker.schema';
import { Modules } from '../schema/modules.schema';
import { Operation } from '../schema/operation.schema';
import { Permission } from '../schema/permission.schema';
import { Project } from '../schema/project.schema';
import { Project_Document } from '../schema/project-document.schema';
import { Project_Team } from '../schema/project-team.schema';
import { Role } from '../schema/role.schema';
import { Task } from '../schema/task.schema';
import { Task_Priority } from '../schema/task-priority.schema';
import { Task_Status } from '../schema/task-status.schema';
import { User } from '../schema/user.schema';
import { User_Token } from '../schema/user-token.schema';

const database = {
  development: {
    dialect: 'mysql',
    host: process.env.DB_HOST_NAME,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  test: {
    dialect: 'mysql',
    host: process.env.DB_HOST_NAME,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOST_NAME,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};

export const DatabaseConfig = () => ({
  ...database[process.env.NODE_ENV],
  models: [
    User,
    Role,
    Company,
    Error_Log,
    Error_Log_Detail,
    Login_Tracker,
    Modules,
    Operation,
    Permission,
    Project_Document,
    Project,
    Project_Team,
    Task,
    Task_Priority,
    Task_Status,
    User_Token,
  ],
});
