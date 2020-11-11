import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from '@admin-bro/nestjs';
import { Database, Resource } from '@admin-bro/typeorm'
import { TypeOrmModule } from '@nestjs/typeorm';
import AdminBro from 'admin-bro';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { QuotationsModule } from './quotations/quotations.module';
import { Quotation } from './quotations/entities/quotations.entity';

AdminBro.registerAdapter({ Database, Resource });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [User, Customer, Quotation],
      synchronize: true,
    }),
    AdminModule.createAdmin({
      adminBroOptions: {
        rootPath: '/admin',
        resources: [
          {
            resource: User,
            options: {
              navigation: {
                name: 'User Management'
              }
            },
          },
          {
            resource: Customer,
            options: {
              navigation: {
                name: 'User Management'
              }
            }
          },
          {
            resource: Quotation,
            options: {
              navigation: {
                name: 'Quotation Management'
              }
            }
          },
        ],
      }
    }),
    CustomersModule,
    UsersModule,
    QuotationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
