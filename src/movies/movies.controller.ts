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
import { Movie } from './entities/movie.entity'

import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") movieId: string): Movie{
        return this.moviesService.getOne(movieId)
    }

    @Post()
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(":id") //일부분 업데이트
    patch(@Param('id') movieId: string, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }
}
