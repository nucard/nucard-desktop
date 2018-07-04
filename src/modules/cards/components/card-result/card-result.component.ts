import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../services/cards.service';

@Component({
  selector: 'nucard-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent implements OnInit {
  @Input() cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
