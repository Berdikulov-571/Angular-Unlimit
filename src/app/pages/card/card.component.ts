import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card: CardData[] = [
    { image: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'Card-1', Title: 'Image-1' },
    { image: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'Card-2', Title: 'Image-2' },
    { image: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'Card-3', Title: 'Image-3' },
    { image: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'Card-4', Title: 'Image-4' },
    { image: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'Card-5', Title: 'Image-5' },
    { image: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'Card-6', Title: 'Image-6' },
  ];
}

export interface CardData {
  image: string;
  Title: string;
  Message: string;
}