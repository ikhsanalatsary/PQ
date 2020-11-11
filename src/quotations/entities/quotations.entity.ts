import { IsEmail } from 'class-validator';
import { CommonEntity } from 'src/entities/common.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'quotations'})
export class Quotation extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  companyName: string;

  @Column({ nullable: true })
  companyInfo: string;

  @Column({ nullable: true })
  companyContact: string;

  @Column({ nullable: true })
  customerInfo: string;

  @Column({ nullable: true })
  customerRemarks: string;

  @Column({type: 'json'})
  items: [{instruction: string, amount: string}];

  @Column()
  tnc: string;

  @Column({type: 'text'})
  bankInfo: string;

  @Column()
  subTotal: string;

  @Column()
  vat: string; // indicator 10% * subTotal 

  @Column()
  total: string; // vat + subTotal

  @Column()
  isIncludedTax: boolean;
}