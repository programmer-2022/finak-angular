import { Component } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public faLaptopCode = faLaptopCode;
  public developerName = 'Mária Consuelo Hernández';
}
