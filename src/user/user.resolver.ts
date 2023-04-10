import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { JwtService } from '@nestjs/jwt';
import { UseGuards,Req } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport'
import {Request} from "express"
import { GqlAuthGuard } from 'src/strategy/graphql.strategy';
import { CurrentUser } from 'src/strategy/request-user';
import { User } from 'src/schema/user.schema';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService,private jwt:JwtService) {}

  @Mutation(() => User)
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => String)
  findAll(@CurrentUser() user: any) {
    console.log(user);
    
    return "this.userService.findAll()";
  }

  @Query(() => User)
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  update(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }

  @Query(()=>String)
  login(){
    const payload = {
      id:1,
      email:'demo@gmail.com'
    }
    return this.jwt.signAsync(payload,{
      expiresIn:'60min',
      secret:process.env.SECRET
    })
  }

}
