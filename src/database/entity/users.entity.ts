import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    user_name: string;

    @Column()
    user_id: string;
    
    @Column()
    is_deleted: boolean;
    
    @Column()
    created_at: boolean;

    @Column()
    updated_at: boolean;
}