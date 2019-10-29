import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  private createResponse:any;

  constructor(private _service:ProductApiService) { }

  ngOnInit() {
  }

  public createProduct(product:any){
    this._service.create(product).subscribe(res=>{
        this.createResponse=res;
    });
  }

}
