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

    @Column({ default: "Indore" })
    address: string;

    @Column({ default: "test@gmail.com" })
    email: string;

    @Column({ default: "test" })
    username: string;

    @Column({ default: "test" })
    password: string;
}
