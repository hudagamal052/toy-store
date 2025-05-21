import { Component } from '@angular/core';
import { CatalogComponent } from './features/catalog/catalog.component';
@Component({
  selector: 'app-root',
  imports: [CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'toy-store';
}
