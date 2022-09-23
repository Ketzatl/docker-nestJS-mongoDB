import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';
import {UsersService} from './users.service';
import {ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUSerDto} from "./user.dto";

@ApiTags('-- Users Module --')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    @ApiOperation({summary: 'Add new User'})
    // @ApiCreatedResponse({ description: 'User Registration' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    example: 'John Doe',
                    description: 'User Name',
                },
                email: {
                    type: 'string',
                    example: 'example@example.com',
                    description: 'User Email',
                },
                password: {
                    type: 'string',
                    example: '123456',
                    description: 'User Password',
                }
            }
        }
    })
    @ApiResponse({
        status: 201,
        description: 'New User saved...'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    async create(@Body('name') name: string,
                 @Body('email') email: string,
                 @Body('password') password: string) {
        const generatedId = await this.usersService.create(name, email, password);
        return {id: generatedId};
    }

    @Get()
    @ApiOperation({summary: 'get All Users'})
    @ApiResponse({
        status: 200,
        description: 'Get All Users <User[]>', schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        example: '5f9f1b9b9c9c1c1c8c8c8c8c',
                        description: 'User ID',
                    },
                    name: {
                        type: 'string',
                        example: 'John Doe',
                        description: 'User Name',
                    },
                    email: {
                        type: 'string',
                        example: 'example@example.com',
                        description: 'User Email',
                    },
                    password: {
                        type: 'string',
                        example: '123456',
                        description: 'User Password',
                    }
                }
            }
        }
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    async findAll(): Promise<any> {
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Get User by ID'})
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Enter MongoDB User ID',
        required: true,
    })
    @ApiResponse({
        status: 200,
        description: 'get User by ID <User>'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    async findOne(@Param('id') userId: string): Promise<any> {
        console.log('User', userId)
        return this.usersService.findOne(userId);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete User by ID'})
    @ApiParam({
        name: 'id',
        type: String,
        description: 'Enter MongoDB User ID',
        required: true,
    })
    @ApiResponse({
        status: 200,
        description: 'User Deleted....'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    async deleteProduct(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}
