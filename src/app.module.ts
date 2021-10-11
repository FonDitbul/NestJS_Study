import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], //URL을 가져오고 함수를 실행
  providers: [],
})
export class AppModule {}
