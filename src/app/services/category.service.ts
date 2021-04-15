import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private getAllCategoriesAPI = "http://127.0.0.1:8080/categorie"
  private getOneCategoriesAPI = "http://127.0.0.1:8080/categorie"
  private deletelCategoryAPI = "http://127.0.0.1:8080/categorie"
  private addCategoryAPI = "http://127.0.0.1:8080/categorie"
  private updateCategoryAPI = "http://127.0.0.1:8080/categorie"

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(this.getAllCategoriesAPI)
  }

  deleteCategory(id) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.delete<any>(`${this.deletelCategoryAPI}/${id}`, { headers: headers })
  }

  getOneCategory(id) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<any>(`${this.getOneCategoriesAPI}/${id}`, { headers: headers })
  }

  addCategory(category) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.post<any>(this.addCategoryAPI, category, { headers: headers })
  }

  updateCategory(category) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.put<any>(this.updateCategoryAPI, category, { headers: headers })
  }

}
