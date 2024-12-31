import { BaseEntity } from 'src/common/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    address: string;

    @Column({ nullable: true })
    email: string;
}
