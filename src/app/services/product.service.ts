import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private getAllProductsAPI = "http://127.0.0.1:8080/produit"
  private getOneProductAPI = "http://127.0.0.1:8080/produit"
  private deletelProductAPI = "http://127.0.0.1:8080/produit"
  private addProductAPI = "http://127.0.0.1:8080/produit/categorie"
  private updateProductAPI = "http://127.0.0.1:8080/produit"

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(this.getAllProductsAPI)
  }

  deleteProduct(id) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.delete<any>(`${this.deletelProductAPI}/${id}`, { headers: headers })
  }

  getOneProduct(id) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<any>(`${this.getOneProductAPI}/${id}`, { headers: headers })
  }

  addProduct(product, idCat) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.post<any>(`${this.addProductAPI}/${idCat}`, product, { headers: headers })
  }

  updateProduct(Product, idCat) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.post<any>(`${this.addProductAPI}/${idCat}`, Product, { headers: headers })
  }
}
