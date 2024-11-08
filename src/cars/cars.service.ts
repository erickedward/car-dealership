import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Jeep',
      model: 'KK',
    },
    {
      id: 2,
      brand: 'Toyota',
      model: 'Yaris',
    },
    {
      id: 3,
      brand: 'Chevrolet',
      model: 'Grand Vitara XL5',
    },
  ];

  findAll(){
    return this.cars;
  }

  findOneById(id:number){
    const car = this.cars.filter(car => car.id==id)[0];
    if (!car)
      throw new NotFoundException('El carro no existe');
    return car;
  }
}
