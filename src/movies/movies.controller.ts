import {
    Controller,
    Delete,
    Get,
    Patch,
    Post,
    Param, 
    Body,
    Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(): string {
        return 'This will return all movies';
    }

    @Get("search")
    search(@Query("year") searchingYear: string ){
        return `WE are searching for a movie with a title made after : ${searchingYear} `
    }

    @Get(":id")
    getOne(@Param("id") id: string): string{
        return `This will return one moive with the id : ${id}`
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return movieData;
    }

    @Delete(":id")
    remove(@Param('id') movieId:string){
        return `This will delete a moive with id : ${movieId}`
    }

    @Patch(":id") //일부분 업데이트
    patch(@Param('id') movieId: string, @Body() updateData){
        return {
            updateMovie: movieId,
            ...updateData
        }
    }


}
