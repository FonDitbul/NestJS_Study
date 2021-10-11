import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(): string {
        return 'This will return all movies';
    }

    @Get("/:id")
    getOne(@Param("id") id: string): string{
        return `This will return one moive with the id : ${id}`
    }

    @Post()
    create() {
        return "this will create a moive;"
    }

    @Delete("/:id")
    remove(@Param('id') movieId:string){
        return `This will delete a moive with id : ${movieId}`
    }

    @Patch("/:id") //일부분 업데이트
    patch(@Param('id') movieId: string){
        return `This will patch a moive with id : ${movieId}`
    }
}
