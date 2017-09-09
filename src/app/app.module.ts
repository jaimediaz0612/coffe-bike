import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {CustomersModule} from './customers/customers.module';
import {OrdersModule} from './orders/orders.module';

import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

import { IndexComponent } from './customers/index/index.component';
import {AddComponent as OrderAddComponent } from './orders/add/add.component';

const appRoutes: Routes = [
  { path: 'customers/index', component:IndexComponent },
  { path: 'orders/add',      component: OrderAddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
