import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getAllProductsAPI = "http://127.0.0.1:8080/produit"

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(this.getAllProductsAPI)
  }
}
