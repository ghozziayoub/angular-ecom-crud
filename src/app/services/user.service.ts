import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private getAllutilisateursAPI = "http://127.0.0.1:8080/utilisateur"
  private getOneutilisateursAPI = "http://127.0.0.1:8080/utilisateur"
  private deletelUtilisateurAPI = "http://127.0.0.1:8080/utilisateur"
  private updateUtilisateurAPI = "http://127.0.0.1:8080/utilisateur"

  constructor(private http: HttpClient) { }

  getAllUtilisateurs() {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<any>(this.getAllutilisateursAPI, { headers: headers })
  }

  deleteUtilisateur(id) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.delete<any>(`${this.deletelUtilisateurAPI}/${id}`, { headers: headers })
  }

  getOneUtilisateur(id) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.get<any>(`${this.getOneutilisateursAPI}/${id}`, { headers: headers })
  }

  updateUtilisateur(utilisateur) {
    let token = localStorage.getItem('mytoken')

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    return this.http.put<any>(this.updateUtilisateurAPI, utilisateur, { headers: headers })
  }
}
