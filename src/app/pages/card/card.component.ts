import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  card: CardData[] = [
    { Photo: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'LOVE', Title: 'LOVE' },
    { Photo: '../../../assets/photo_2023-07-27_08-00-51.jpg', Message: 'O\'LIM', Title: 'QABR' },
    { Photo: '../../../assets/photo_2024-01-03_12-14-11.jpg', Message: 'Sahih Hadis', Title: 'HADIS' },
    { Photo: '../../../assets/photo_2023-12-05_16-37-42.jpg', Message: '.NET DEVELOPER', Title: 'Nurmuhammad Davletov' },
    { Photo: '../../../assets/screenshot 2023-12-15 084857.png', Message: 'Map Uzbekistan', Title: 'MAP' },
  ];

  search(text: string) {
    this.card = this.card.filter(x => x.Title == text);
  }
}

export interface CardData {
  Photo: string;
  Title: string;
  Message: string;
}
