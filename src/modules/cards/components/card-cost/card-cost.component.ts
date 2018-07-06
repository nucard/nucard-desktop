import { Component, Input } from '@angular/core';
import { Card } from '../../services/cards.service';

@Component({
    selector: 'nc-card-cost',
    templateUrl: './card-cost.component.html',
    styleUrls: ['./card-cost.component.scss']
})
export class CardCostComponent {
    @Input() card: Card;
}
