import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatRequestDto } from '../dto/cats.request.dto';
import * as bcrypt from 'bcrypt';
import { CatsRepository } from '../cats.repository';
import { Cat } from '../cats.schema';

@Injectable()
export class CatsService {
  constructor(private readonly CatsRepository: CatsRepository) {}

  async getAllCat() {
    const allCat = await this.CatsRepository.findAll();
    const readOnlyCats = allCat.map((cat) => cat.readOnlyData);
    return readOnlyCats;
  }

  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.CatsRepository.existByEmail(email);

    if (isCatExist) {
      throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.');
      // throw new HttpException('해당하는 고양이는 이미 존재합니다.', 403);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const cat = await this.CatsRepository.create({
      email,
      name,
      password: hashedPassword,
    });
    return cat.readOnlyData;
  }

  async uploadImg(cat: Cat, files: Express.Multer.File[]) {
    const fileName = `cats/${files[0].filename}`;

    const newCat = await this.CatsRepository.findByIdAndUpdateImg(
      cat.id,
      fileName,
    );
    return newCat;
  }
}
