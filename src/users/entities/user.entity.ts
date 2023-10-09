import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';

import { productos } from 'src/productos/entities/producto.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  userName: string;

  @Column({ nullable: false })
  password: string;

  @Column({ default: 'user' })
  rol: string;

  @ManyToMany(() => productos, (productos)=> productos.users )
  @JoinTable({
    name: 'user_productos', // Nombre de la tabla intermedia
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'producto_id',
      referencedColumnName: 'id_producto',
    },
  })
  productos:productos[];
  
  @DeleteDateColumn()
  deletedAt: Date;

}
