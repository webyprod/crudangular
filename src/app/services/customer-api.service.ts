import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CustomerApiService {

  url:string = "http://localhost:8082/api/customers";

  constructor(private _http:Http) { }

  public getCustomers():any {
    return this._http.get(this.url).pipe(
      map(res=>{
        return res.json();
      })
    );
  }

  public getCustomer(id:number):any {
    return this._http.get(this.url+id).pipe(
      map(res=>{
        return res.json();
      })
    );
  }

  public create(customer):any {
    return this._http.post(this.url, customer).pipe(
      map(res=>{
        return res.json();
      })
    );
  }

  public update(customer):any {
    return this._http.put(this.url, customer).pipe(
      map(res=>{
        return res.json();
      })
    );
  }

  public delete(id:number):any {
    return this._http.delete(this.url+id).pipe(
      map(res=>{
        return res.json();
      })
    );
  }
}