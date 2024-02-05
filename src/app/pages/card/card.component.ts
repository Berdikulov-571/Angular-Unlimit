import { Component, Input } from '@angular/core';
import { CardService } from './services/card.service';
import { Router } from '@angular/router';
import { CardData } from './interfaces/card-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  filteredData!: CardData[];

  constructor(private cardService: CardService, private router: Router) {
    this.cardService.getAllCardData().then(x => {
      this.filteredData = x;
    });
  }

  // filteredData = this.cardService.getAllCardData();

  search(text: string) {
    if (text.length === 0)
      this.filteredData = this.cardService.card;
    else {
      this.filteredData = this.cardService.card.filter(x => x.Title.toLocaleLowerCase() == text.toLowerCase());
    }
  }

  navigation() {
    this.router.navigate(['details']);
  }
}