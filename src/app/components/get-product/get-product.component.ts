import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {

  private getProductResponse:any;

  constructor(private _service:ProductApiService) { }

  ngOnInit() {
  }

  public getProduct(id:number){
    this._service.getProduct(id).subscribe(res=>{
        this.getProductResponse=res;
    });
  }

}
