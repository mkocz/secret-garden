import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsInt,
  IsEmail,
  IsOptional,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class OrderItem {
  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsString()
  specialRequest?: string;
}

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsOptional()
  @IsString()
  status?: string;

  @ValidateNested({ each: true })
  @Type(() => OrderItem)
  items: OrderItem[];
}
