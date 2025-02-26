import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-button',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() color: string = '#4F46E5'; 
  @Input() text: string = 'Купить';
}