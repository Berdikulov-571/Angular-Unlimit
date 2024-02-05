import { Component, Input } from '@angular/core';
import { CardService } from './services/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(private cardService: CardService, private router: Router) {
  }

  filteredData = this.cardService.card;

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