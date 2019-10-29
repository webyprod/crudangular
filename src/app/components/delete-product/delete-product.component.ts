import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  private deleteResponse:any;

  constructor(private _service:ProductApiService) { }

  ngOnInit() {
  }

  public deleteProduct(id:number){
    this._service.delete(id).subscribe(res=>{
        this.deleteResponse=res;
    });
  }

}
