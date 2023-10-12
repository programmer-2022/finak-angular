import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services';
import { EventResponseApi } from '../../interfaces';

@Component({
  selector: 'app-table-event',
  templateUrl: './table-render.component.html',
})
export class TableRenderComponent implements OnInit {
  private listaEventos: EventResponseApi[] = [];

  constructor(private readonly apiService: ApiService) {}

  ngOnInit(): void {
    this.obtenerListaEventos();
  }

  obtenerListaEventos(): void {
    this.apiService
      .obtenerListaEventos()
      .subscribe((data: EventResponseApi[]) => {
        this.listaEventos = data;
      });
  }

  getListaEventos(): EventResponseApi[] {
    return this.listaEventos;
  }
}
