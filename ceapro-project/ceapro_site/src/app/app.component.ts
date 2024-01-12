import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NMisionComponent } from './nmision/nmision.component';
import { VisionComponent } from './vision/vision.component';
import { ValoresComponent } from './valores/valores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NMisionComponent, VisionComponent, ValoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ceapro_site';
}
