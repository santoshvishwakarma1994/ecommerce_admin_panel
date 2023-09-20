import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attribute } from 'src/app/Model/attribute.model';
import { mockAttributes } from 'src/assets/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  private apiUrl = '/api/attributes'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAll(): Observable<Attribute[]> {
    return of(mockAttributes);
  }


  getById(id: number): Observable<Attribute> {
    return this.http.get<Attribute>(`${this.apiUrl}/${id}`);
  }

  create(attribute: Attribute): Observable<Attribute> {
    return this.http.post<Attribute>(this.apiUrl, attribute);
  }

  update(attribute: Attribute): Observable<Attribute> {
    return this.http.put<Attribute>(`${this.apiUrl}/${attribute.id}`, attribute);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
