//DTO data transfer object

import {IsNumber, IsOptional, IsString} from 'class-validator';

export class CreateMovieDTO {
    constructor() {
        this.title = '';
        this.year = 0;
        this.genres = []
    }
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
}