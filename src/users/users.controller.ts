import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {ApiBody, ApiCreatedResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateUSerDto} from "./user.dto";

@ApiTags('-- Users Module --')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiOperation({ summary: 'Add new User' })
    // @ApiCreatedResponse({ description: 'User Registration' })
    // @ApiBody({ type: CreateUSerDto })
    async create(@Body('name') name: string,
                 @Body('email') email: string,
                 @Body('password') password: string) {
        const generatedId = await this.usersService.create(name, email, password);
        return { id: generatedId };
    }

    @Get()
    @ApiOperation({ summary: 'get All Users' })
    async findAll(): Promise<any> {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get User by ID' })
    async findOne(@Param('id') userId: string): Promise<any> {
        console.log('User', userId)
        return this.usersService.findOne(userId);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete User by ID' })
    async deleteProduct(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}
