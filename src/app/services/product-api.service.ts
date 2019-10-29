import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  url:string = "http://localhost:8082/api/products";

  constructor(private _http:Http) { }

  public getProducts():any {
    return this._http.get(this.url).pipe(
      map(res=>{
        return res.json();
      })
    );
  }

  public create(product):any {
    return this._http.post(this.url, product).pipe(
      map(res=>{
        return res.json();
      })
    );
  }

  public getProduct(id:number):any {
    return this._http.get(this.url+id).pipe(
      map(res=>{
        return res.json();
      })
    );
  }

  public update(product):any {
    return this._http.put(this.url, product).pipe(
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