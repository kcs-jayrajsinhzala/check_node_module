import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Customer]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: [CustomerModule],
      path: 'customer/graphql',
      context: ({ req }) => ({
        request: req,
      }),
    }),
  ],
  providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
