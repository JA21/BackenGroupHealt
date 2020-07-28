import { Module } from '@nestjs/common';


import {CommonModule} from './common/comom.module';
import { UsersModule } from './modules/users/user.module';
import {ProductsModule} from './modules/productos/products.module';
import { CalenderModule } from './modules/calender/calender.module';
@Module({
  imports: [
    CommonModule,
    UsersModule,
    CalenderModule,
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
