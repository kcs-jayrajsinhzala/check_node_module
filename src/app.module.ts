import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { DatabaseConfig } from './database/config';
import { DemoModule } from './demo/demo.module';
import { Demo2Module } from './demo2/demo2.module';
import { Demo2Module } from './demo2/demo2.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot(DatabaseConfig()),
    UserModule,
    CustomerModule,
    DemoModule,
    Demo2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
