import { IsEmail } from 'class-validator';
import { CommonEntity } from 'src/entities/common.entity';
import { Quotation } from 'src/quotations/entities/quotations.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'customers'})
export class Customer extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  companyName:string;

  @Column({ nullable: true })
  companyPhone: string;

  @Column({ nullable: true })
  companyFax: string;

  @Column({ nullable: true })
  remarks: string;

  @OneToMany(() => Quotation, quotation => quotation.customer)
  quotations: Quotation[];
}