import { Component, inject } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { ProductService } from '../../../services/product/product.service';
@Component({
  selector: 'app-product-list',
  imports: [CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productService = inject(ProductService); 
  products: any = []

  constructor() {
    this.products = this.productService.getProducts()
  }
}
