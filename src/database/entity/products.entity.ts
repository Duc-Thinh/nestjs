import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    product_name: string;

    @Column()
    product_id: string;
    
    @Column()
    is_deleted: boolean;
    
    @Column()
    created_at: boolean;

    @Column()
    updated_at: boolean;
}