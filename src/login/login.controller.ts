import { Controller, Post, Body, Get, Delete, Param, Res, BadRequestException } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }

    @Post('/create')
    async loginCreate(@Body() user: any): Promise<any> {
        const createAccount = await this.loginService.create(user);
        // const createAccount = await this.loginService.findOne(user);
        return createAccount;
    }

    @Post('/update')
    async loginUpdate(@Body() user: any): Promise<any> {

    }

    @Post()
    async loginById(@Body() user: any, @Res() res: Response): Promise<any> {
        const data = await this.loginService.findOne(user);
        if (!data) {
            throw new BadRequestException('The username or password is invalid!');
        }
        return res.status(200).json(data)
    }

    @Get('/read')
    async loginRead(): Promise<any> {
        const data = await this.loginService.findAll();
        return data;
    }

    @Delete(":id")
    async loginDelete(@Param('id') id): Promise<any> {
        const data = await this.loginService.deleteOne(id);
    }

}
