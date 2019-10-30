import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  private createResponse:any;

  constructor(private _service:CustomerApiService) { }

  ngOnInit() {
  }

  public createCustomer(customer:any){
    this._service.create(customer).subscribe(res=>{
        this.createResponse=res;
    });
  }

}
