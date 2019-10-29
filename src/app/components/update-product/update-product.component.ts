import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  private updateResponse:any;

  constructor(private _service:ProductApiService) { }

  ngOnInit() {
  }

  public updateProduct(product:any){
    this._service.update(product).subscribe(res=>{
        this.updateResponse=res;
    });
  }

}
