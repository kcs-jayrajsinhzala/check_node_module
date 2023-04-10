import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './user.resolver';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { User } from 'src/schema/user.schema';
import { Role } from 'src/schema/role.schema';
import { Company } from 'src/schema/company.schema';

@Module({
  imports: [
    SequelizeModule.forFeature([User,Role,Company]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      include: [UserModule],
      path: 'user/graphql',
      context: ({ req }) => ({
        request: req,
      }),
    }),
    JwtModule.register({})
  ],
  providers: [UserService, UserResolver, JwtStrategy],
})
export class UserModule {}
