import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuidv4 } from 'uuid';
export const CARS_SEED: Car[] = [
    {
        id: uuidv4(),
        brand: 'Jeep',
        model: 'KK',
    },
    {
        id: uuidv4(),
        brand: 'Toyota',
        model: 'Yaris',
    },
    {
        id: uuidv4(),
        brand: 'Chevrolet',
        model: 'Grand Vitara XL5',
    }
]