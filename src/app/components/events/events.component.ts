import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  constructor(
    public fb: FormBuilder,
    private readonly apiService: ApiService
  ) {}

  public isSubmitted: boolean = false;
  public eventTypeList = [
    {
      id: 1,
      value: 'API',
    },
    {
      id: 2,
      value: 'Forma Manual',
    },
  ];

  public miFormulario = this.fb.group({
    descripcion: ['', [Validators.required]],
    tipoEvento: ['', [Validators.required]],
  });

  changeEventType(event: any) {
    console.log(event.target.value);
    this.tipoEvento?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  get descripcionEvento() {
    return this.miFormulario.get('descripcion');
  }

  get tipoEvento() {
    return this.miFormulario.get('tipoEvento');
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (!this.miFormulario.valid) {
      false;
    } else {
      const { descripcion, tipoEvento } = this.miFormulario.value;

      this.apiService
        .guardarEvento(descripcion, Number(tipoEvento))
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
