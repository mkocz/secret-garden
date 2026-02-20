import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Order } from '@prisma/client';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll(): Promise<Order[]> {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Order> {
    const order = await this.ordersService.getById(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  @Post('/')
  create(@Body() orderData: CreateOrderDTO): Promise<Order> {
    return this.ordersService.create(orderData);
  }
}
