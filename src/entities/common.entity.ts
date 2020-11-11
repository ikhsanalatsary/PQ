import { CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

export abstract class CommonEntity extends BaseEntity {
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
};