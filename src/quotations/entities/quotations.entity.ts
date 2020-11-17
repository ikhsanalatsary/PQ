import { Customer } from 'src/customers/entities/customer.entity';
import { CommonEntity } from 'src/entities/common.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({name: 'quotations'})
export class Quotation extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // @Column({ nullable: true })
  // companyName: string;

  // @Column({ nullable: true })
  // companyInfo: string;

  // @Column({ nullable: true })
  // companyContact: string;

  // @Column({ nullable: true })
  // customerInfo: string;

  // @Column({ nullable: true })
  // customerRemarks: string;

  @ManyToOne(() => Customer, (cust) => cust.quotations, {eager: true})
  @JoinColumn({name: 'customerId'})
  customer: Customer;

  @Column({type: 'jsonb'})
  items: [{description: string, amount: string}];

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

  @Column({default: false})
  isIncludedTax: boolean;
}