import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CustomerService {
  
  @Output() aClickedEvent = new EventEmitter<string>();
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }
  CustomerData(data:any) {
    this.aClickedEvent.emit(data);
  }
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCustomer(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
  
    
    return this.http.get<any>(url);
  }

  addCustomer(customer: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, customer);
  }

  deleteCustomer(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
