import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Category } from '../../../interfaces/category/category.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image: string = 'https://via.placeholder.com/150';
  @Input() title: string = 'Товар';
  @Input() price: number = 9999;
  @Input() rating: number = 4.5;
  @Input() link: string = "https://kaspi.kz";
  @Input() likes: number = 0;
  @Input() category!: Category;
  
  @Output() liked = new EventEmitter<void>();
  @Output() removed = new EventEmitter<void>();

  likeProduct() {
    this.liked.emit();
  }

  removeProduct() {
    this.removed.emit();
  }
}
