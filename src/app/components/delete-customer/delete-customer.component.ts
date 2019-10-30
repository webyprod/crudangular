import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  private deleteResponse:any;

  constructor(private _service:CustomerApiService) { }

  ngOnInit() {
  }

  public deleteCustomer(id:number){
    this._service.delete(id).subscribe(res=>{
        this.deleteResponse=res;
    });
  }

}
