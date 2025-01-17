import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos/index';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuidv4(),
    //   brand: 'Jeep',
    //   model: 'KK',
    // }
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.filter((car) => car.id === id)[0];
    if (!car) throw new NotFoundException('El carro no existe');
    return car;
  }

  create(createCarDto: CreateCarDto) {
    let car: Car = {
      id: uuidv4(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(updateCarDto.id);

    this.cars = this.cars.map((car) => {
      if (car.id===updateCarDto.id){
        carDB = {
          ...carDB,
          ...updateCarDto,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id:string){
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id != id);
    return `Registro ${car.model} eliminado.`;
  }

  fillCarsWithSeedData(cars:Car[]){
    this.cars = cars;
  }
}
