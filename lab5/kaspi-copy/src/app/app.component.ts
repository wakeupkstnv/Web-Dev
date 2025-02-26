import { Component, signal } from '@angular/core';
import { ProductService } from './services/product/product.service';
import { Category } from './interfaces/category/category.interface';
import { ProductListComponent } from './components/base/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/ui/header/header.component';
import { ButtonComponent } from './components/ui/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    CommonModule,
    HeaderComponent,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategory = signal<string>('');

  constructor(private productService: ProductService) {
    this.categories = this.getUniqueCategories();
  }

  getUniqueCategories(): Category[] {
    const products = this.productService.getProducts();
    const uniqueCategories = new Set(products.map((p) => p.category.name));
    return Array.from(uniqueCategories).map((name) => ({ name }));
  }

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }
}