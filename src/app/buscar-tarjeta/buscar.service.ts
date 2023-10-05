import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  apiUrl = 'https://app.gosummus.com/testing/api/tarjeta';

  constructor(private http: HttpClient) { }

  buscarPorTitular(titular: string): Observable<any[]> {
    const params = { titular };
    return this.http.get<any[]>(this.apiUrl, { params });
  }
}
