import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from '../schemas/login.schema'
import { User } from '../interface/user.interface';
@Injectable()
export class LoginService {
    constructor(@InjectModel('Login') private loginModel: Model<Login>) { }

    async create(user: User): Promise<Login> {
        const createdUser = await new this.loginModel(user);
        return createdUser.save();
    }

    async findOne(user: User): Promise<any> {
        const uname: any = await this.loginModel.findOne({ username: user.username }).select('+password');

        const isAuth = await uname && (uname.password === user.password);

        if (!isAuth) return undefined;

        return {
            _id: uname._id,
            username: uname.username,
            token: 'token-'+uname.username
        }

    }

    async findAll(): Promise<any> {
        return await this.loginModel.find().exec();
    }

    async deleteOne(id:string): Promise<any> {
        return await this.loginModel.deleteOne({_id :id});
    }

}
