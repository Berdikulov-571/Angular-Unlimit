import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card/services/card.service';
import { CardData } from '../card/interfaces/card-data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  card!: CardData | undefined;

  constructor(private route: ActivatedRoute, private cardService: CardService) {
    const wordId: string = this.route.snapshot.params['id']
    this.card = this.cardService.getCardById(+wordId);
  }

}
