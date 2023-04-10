import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}
  async create(createCustomerInput: CreateCustomerInput) {
    const data = createCustomerInput;
    const res = await this.customerModel.create({
      firstName: createCustomerInput.firstName,
      lastName: createCustomerInput.lastName,
      isActive: createCustomerInput.isActive,
      email: createCustomerInput.email,
    });
    return res;
  }

  findAll() {
    return this.customerModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
