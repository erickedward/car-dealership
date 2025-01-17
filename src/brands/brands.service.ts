import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuidv4 } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
      // {
      //   id: uuidv4(),
      //   name: 'Toyota',
      //   createAt: new Date().getTime()
      // }
    ]
    
  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand:Brand = {
      id: uuidv4(),
      name: name.toLocaleLowerCase(),
      createAt: new Date().getTime()
    }

    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) throw new NotFoundException(`No se encontro el brand con el id ${id}`)
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne(id);
    updateBrandDto.name = updateBrandDto.name.toLocaleLowerCase();
    this.brands = this.brands.map((brand) => {
      if (brand.id===id){
        brandDB.updatedAt = new Date().getTime();
        brandDB = {
          ...brandDB,
          ...updateBrandDto,
        };
        return brandDB;
      }
      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    this.brands = this.brands.filter( brand => brand.id!==id);
    return `This action removes a #${id} brand`;
  }


  fillBrandsWithSeedData(brand:Brand[]){
      this.brands = brand;
  }
}
