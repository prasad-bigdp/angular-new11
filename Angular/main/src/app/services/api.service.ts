import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../environments';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private hc: HttpClient) {
    
  }
  getProducts()
  {
    return this.hc.get(API_URL)
  }
  getProduct(id:number)
  {
  return this.hc.get(`${API_URL}/${id}`)
  }
  getProductsBySearch(str: string)
  {
    return this.hc.get(`${API_URL}?q=${str}`);
  }
  getProductsByCategory(cat: string)
  {
    return this.hc.get(`${API_URL}/category/${cat}`);
  }
}
