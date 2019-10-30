import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  private getCustomerResponse:any;

  constructor(private _service:CustomerApiService) { }

  ngOnInit() {
  }

  public getProduct(id:number){
    this._service.getProduct(id).subscribe(res=>{
        this.getCustomerResponse=res;
    });
  }

}
