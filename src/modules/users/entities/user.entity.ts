import { BaseEntity } from 'src/common/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;
}
