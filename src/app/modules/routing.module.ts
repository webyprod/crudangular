import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { GetProductsComponent } from '../components/get-products/get-products.component';
import { GetProductComponent } from '../components/get-product/get-product.component';
import { CreateProductComponent } from '../components/create-product/create-product.component';
import { UpdateProductComponent } from '../components/update-product/update-product.component';
import { DeleteProductComponent } from '../components/delete-product/delete-product.component';

const routes:Routes = [
    {
        path:'getAll',
        component: GetProductsComponent
    },
    {
        path:'get',
        component: GetProductComponent
    },
    {
        path:'create',
        component: CreateProductComponent
    },
    {
        path:'update',
        component: UpdateProductComponent
    },
    {
        path:'delete',
        component: DeleteProductComponent
    }
]
    


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}