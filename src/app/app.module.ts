import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {CustomersModule} from './customers/customers.module';
import {OrdersModule} from './orders/orders.module';
import {BicicletasModule} from './bicicletas/bicicletas.module';
import {ComidasModule} from './comidas/comidas.module';
import {RegistroModule} from './registro/registro.module';

import { MenuComponent } from './menu/menu.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

import { IndexComponent } from './customers/index/index.component';
import {AddComponent as OrderAddComponent } from './orders/add/add.component';
import {AddComponent as BicicletasAddComponent } from './bicicletas/add/add.component';
import {AddComponent as ComidasAddComponent } from './comidas/add/add.component';
import {AddComponent as RegistroAddComponent } from './registro/add/add.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  } from
  '@angular/material';

const appRoutes: Routes = [
  { path: 'customers/index', component:IndexComponent },
  { path: 'orders/add',      component: OrderAddComponent},
  { path: 'bicicletas/add', component: BicicletasModule},
  { path: 'comidas/add', component: ComidasModule},
  { path: 'registro/add', component: RegistroModule} 
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BicicletasModule,
    ComidasModule,
    RegistroModule,
    BrowserModule,
    CustomersModule,
    OrdersModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,   
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
