import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuidv4 } from 'uuid';
export const BRAND_SEED: Brand[] = [
    {
        id: uuidv4(),
        name: 'Toyota',
        createAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'Jeep',
        createAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        name: 'Fiat',
        createAt: new Date().getTime()
    }
]