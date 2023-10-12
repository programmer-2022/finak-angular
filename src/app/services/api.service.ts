import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventResponseApi } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private readonly http: HttpClient) {}

  /**
   *
   * @param descripcion
   * @param tipoEventoId
   * @returns Observable<EventResponseApi>
   */
  guardarEvento(
    descripcion: string | null | undefined,
    tipoEventoId: number | null
  ): Observable<EventResponseApi> {
    const body = JSON.stringify({ descripcion, tipoEventoId });
    return this.http.post<EventResponseApi>(`${this.apiUrl}/eventos`, body, {
      headers: this.headers,
    });
  }

  /**
   *
   * @returns Observable<EventResponseApi[]>
   */
  obtenerListaEventos(): Observable<EventResponseApi[]> {
    return this.http.get<EventResponseApi[]>(`${this.apiUrl}/eventos`, {
      headers: this.headers,
    });
  }
}
