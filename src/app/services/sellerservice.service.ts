import { Injectable } from '@angular/core';
import { Seller } from '../models/seller.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerserviceService {
  sellerData :Seller= new Seller();
  constructor(private http:HttpClient) { }
  baseUrl:string="https://localhost:44339/api/Seller";

  addSeller()
  {
    return this.http.post(this.baseUrl, this.sellerData)
  }
}
