import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    });
  }
  async validate(payload:any) {
    // const user: any = await this.userModel
    //   .findOne({ email: payload.email, _id: payload.id })
    //   .populate('role_id', 'roleName');

    // const operations: any = await this.roleOptModel
    //   .find({ role_id: user.role_id._id })
    //   .populate('module_id', 'moduleName -_id')
    //   .populate('opt_id', 'operationName -_id');

    // const module_accsess = {};
    // operations.forEach((e: any) => {
    //   const access: string[] = [];
    //   e.opt_id.forEach((i: any) => {
    //     access.push(i.operationName);
    //   });
    //   module_accsess[e.module_id.moduleName] = access;
    // });

    // const data = {
    //   id: user._id,
    //   username: user.username,
    //   email: user.email,
    //   role: user.role_id.roleName,
    //   module_accsess: module_accsess,
    // };
    console.log(payload);
    
    return "payload";
  }
}
