import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';


@Component({
  selector: 'app-get-products',
  templateUrl: './get-products.component.html',
  styleUrls: ['./get-products.component.css']
})
export class GetProductsComponent implements OnInit {

  private products:any;

  constructor(private _service:ProductApiService) { }

  ngOnInit() {
    this._service.getProducts().subscribe(res=>{
      this.products = res;
    });
  }

}
