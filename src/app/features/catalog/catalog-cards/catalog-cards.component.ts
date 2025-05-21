import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-cards',
  imports: [],
  templateUrl: './catalog-cards.component.html',
  styleUrl: './catalog-cards.component.css',
})
export class CatalogCardsComponent {
  @Input() productData!: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
  };
    getButtonText(quantity: number): string {
    if (quantity === 0) return 'Sold Out';
    return 'Buy Now';
  }

}
