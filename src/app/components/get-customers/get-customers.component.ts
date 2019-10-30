import { Component, OnInit } from '@angular/core';
import { CustomerApiService } from '../../services/customer-api.service';

@Component({
  selector: 'app-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.css']
})
export class GetCustomersComponent implements OnInit {

  constructor(private _service:CustomerApiService) { }

  ngOnInit() {
  }

}
