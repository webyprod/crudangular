import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private _service:CustomerApiService) { }

  ngOnInit() {
  }

}
