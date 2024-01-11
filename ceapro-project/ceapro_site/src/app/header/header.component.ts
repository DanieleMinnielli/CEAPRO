import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent],
  styleUrl: './header.component.css',
  templateUrl: './header.html'
})
export class HeaderComponent {

}
