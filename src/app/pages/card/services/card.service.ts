import { Injectable } from '@angular/core';
import { CardData } from '../interfaces/card-data';
import { CardComponent } from '../card.component';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // card: CardData[] = [
  //   { Id: 1, Photo: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'LOVE', Title: 'LOVE' },
  //   { Id: 2, Photo: '../../../assets/photo_2023-07-27_08-00-51.jpg', Message: 'O\'LIM', Title: 'QABR' },
  //   { Id: 3, Photo: '../../../assets/photo_2024-01-03_12-14-11.jpg', Message: 'Sahih Hadis', Title: 'HADIS' },
  //   { Id: 4, Photo: '../../../assets/photo_2023-12-05_16-37-42.jpg', Message: '.NET DEVELOPER', Title: 'Nurmuhammad' },
  //   { Id: 5, Photo: '../../../assets/screenshot 2023-12-15 084857.png', Message: 'Map Uzbekistan', Title: 'MAP' },
  //   { Id: 6, Photo: '../../../assets/screenshot 2023-12-15 084857.png', Message: 'Map Uzbekistan', Title: 'MAP' },
  //   { Id: 7, Photo: '../../../assets/photo_2024-01-03_12-14-11.jpg', Message: 'Sahih Hadis', Title: 'HADIS' },
  //   { Id: 8, Photo: '../../../assets/photo_2023-07-27_08-00-51.jpg', Message: 'O\'LIM', Title: 'QABR' },
  //   { Id: 9, Photo: '../../../assets/photo_2023-12-05_16-37-42.jpg', Message: '.NET DEVELOPER', Title: 'Nurmuhammad' },
  //   { Id: 10, Photo: '../../../assets/photo_2023-12-22_07-46-33.jpg', Message: 'LOVE', Title: 'LOVE' },
  // ];

  card: CardData[] = [];

  url = 'http://localhost:3000/cardData';

  getCardById(id: number): CardData | undefined {
    return this.card.find(x => x.id === id);
  }

  async getAllCardData(): Promise<CardData[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getById(id: number) {
    const word = await fetch(`${this.url}/${id}`);
    return (await word.json());
  }
}
