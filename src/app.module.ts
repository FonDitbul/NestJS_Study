import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], //URL을 가져오고 함수를 실행
  providers: [MoviesService],
})
export class AppModule {}
