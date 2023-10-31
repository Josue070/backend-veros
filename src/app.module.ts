/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductosModule } from './productos/productos.module';
import { AppService } from './app.service';
import { AlmacenesModule } from './almacenes/almacenes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { FamiliasModule } from './familias/familias.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CatalogosModule } from './catalogos/catalogos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bote1w1g6p3k3vbbuhva-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'uu84uwa4nw6umz2l',
      password: 'gB5B1yEkqfWymykRh7Vr',
      database: 'bote1w1g6p3k3vbbuhva',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProductosModule,
    AlmacenesModule,
    ProveedoresModule,
    FamiliasModule,
    CategoriaModule,
    CatalogosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
