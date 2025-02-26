import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../interfaces/product/product.interface';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnChanges {
  productService = inject(ProductService);
  products: Product[] = [];
  filteredProducts: Product[] = [];

  @Input() category: string = '';

  constructor() {
    this.products = this.productService.getProducts();
    this.updateFilteredProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['category']) {
      this.updateFilteredProducts();
    }
  }

  updateFilteredProducts() {
    this.filteredProducts = this.category
      ? this.products.filter((product) => product.category.name === this.category)
      : this.products;
  }

  likeProduct(product: Product) {
    product.likes += 1;
  }

  removeProduct(productId: number) {
    this.filteredProducts = this.filteredProducts.filter((p) => p.id !== productId);
    this.products = this.products.filter((p) => p.id !== productId);
  }
  
  trackByProduct(index: number, product: Product): number {
    return product.id;
  }
}