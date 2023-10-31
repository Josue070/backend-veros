import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

enum ProductoActivo
{
   Activo='Esta activo',
   Inactivo='Esta inactivo'
}
@Entity()
export class productos {

  @PrimaryGeneratedColumn()
  id_producto: number;
  
  @Column() 
  Nombre_Producto: string;

  @Column()
  Descripcion: string;

  @Column()
  Estado: ProductoActivo;

  @Column({ type: 'int' })
  Stock: number;

  @Column({ type: 'double' })
  Precio_Compra: number;

  @Column({ type: 'double' })
  Precio_venta: number;

  @Column({ type: 'double' })
  Precio_Unitario: number;

  @Column()
  Fecha_vencimiento:Date;

  @ManyToMany(() => User, (User) => User.productos)
  users: User[];

}
