import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() artist!: string;
  @Input() genre!: string;
  @Input() image!: string;
}
