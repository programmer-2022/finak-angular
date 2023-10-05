import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent {
  public isSubmitted: boolean = false;
  public eventList: string[] = ['Forma Manual', 'API'];

  public miFormulario = this.fb.group({
    descripcionEvento: ['', [Validators.required]],
    tipoEvento: ['', [Validators.required]],
  });

  constructor(public fb: FormBuilder) {}

  changeEventType(event: any) {
    this.tipoEvento?.setValue(event.target.value, {
      onlySelf: true,
    });
  }

  get descripcionEvento() {
    return this.miFormulario.get('descripcionEvento');
  }

  get tipoEvento() {
    return this.miFormulario.get('tipoEvento');
  }

  onSubmit(): void {
    console.log(this.miFormulario);
    this.isSubmitted = true;
    if (!this.miFormulario.valid) {
      false;
    } else {
      console.log(JSON.stringify(this.miFormulario.value));
    }
  }
}
