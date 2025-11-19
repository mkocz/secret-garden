import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CreateOrderDTO } from './dtos/create-order';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}
  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({ include: { items: true } });
  }

  public async getById(id: Order['id']): Promise<Order | null> {
    const order = await this.prismaService.order.findUnique({
      where: { id },
      include: { items: true },
    });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  public async create(orderData: CreateOrderDTO): Promise<Order> {
    try {
      const createdOrder = await this.prismaService.order.create({
        data: {
          firstName: orderData.firstName,
          lastName: orderData.lastName,
          email: orderData.email,
          address: orderData.address,
          totalPrice: orderData.totalPrice,
          status: orderData.status || 'pending',
          items: {
            create: orderData.items.map((item) => ({
              product: { connect: { id: item.productId } },
              quantity: item.quantity,
              price: item.price,
              specialRequest: item.specialRequest,
            })),
          },
        },
        include: { items: true },
      });

      return createdOrder;
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException("Product doesn't exist");
      throw error;
    }
  }
}
