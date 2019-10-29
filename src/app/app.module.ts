import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductApiService } from './services/product-api.service';
import { HttpModule } from '@angular/http';
import { GetProductsComponent } from './components/get-products/get-products.component';
import { GetProductComponent } from './components/get-product/get-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRouterModule } from './modules/routing.module';
import { GetCustomersComponent } from './components/get-customers/get-customers.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    GetProductsComponent,
    GetProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    GetCustomersComponent,
    GetCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule,
    AppRouterModule
  ],
  providers: [ProductApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
