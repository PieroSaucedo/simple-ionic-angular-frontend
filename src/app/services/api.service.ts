import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/products`);
  }

  getProductById(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/products/${id}`);
  }

  createProduct(name: string, description: string, price: number, stock: number, image: string) {
    const body  = { name, description, price, stock, image }
    this.httpClient.post(`${this.apiUrl}/products`, body);
  }

  updateProduct(id: string, name: string, description: string, price: number, stock: number, image: string) {
    const body  = { name, description, price, stock, image }
    this.httpClient.put(`${this.apiUrl}/products/${id}`, body);
  }

  deleteProduct(id: string) {
    this.httpClient.delete(`${this.apiUrl}/products/${id}`);
  }
}
