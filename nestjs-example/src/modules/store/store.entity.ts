import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tdar_store')
export class StoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    priority: number;

    @Column({ type: 'timestamp' })
    ctime: Date;

    @Column({ type: 'timestamp' })
    mtime: Date;

    @Column({
      name: 'is_active',
      default: 1
    })
    isActive: number;

    @Column({
      name: 'is_del',
      default: 0,
      select: false
    })
    isDel: number;
}