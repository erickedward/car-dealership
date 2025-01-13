import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
//@UsePipes( ValidationPipe )
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get('/:id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    console.log({ id });
    //throw new Error('Auxilio');
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch()
  updateCar(
    @Body() updateCarDto: UpdateCarDto) {
      return this.carsService.update(updateCarDto);;
  }

  @Delete('/:id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.delete(id);
  }
}

