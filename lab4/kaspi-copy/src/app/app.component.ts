import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/ui/card/card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/ui/header/header.component';
import { ProductService } from './services/product/product.service';
import { ProductListComponent } from './components/base/product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule, 
    CardComponent,
    RouterOutlet,
    HeaderComponent,
    ProductListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'kaspi-copy';
}
