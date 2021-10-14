import { Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }

  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  creatCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'partial update cat';
  }
}
