import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
 
  constructor(
    private readonly carsService:CarsService,
    private readonly brandsService:BrandsService,
  ){}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED);
    return 'Seed exitoso';
  }

}
