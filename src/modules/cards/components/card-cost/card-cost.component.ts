import { Component, Input } from '@angular/core';
import { NcCard } from '@nucard/models';

@Component({
    selector: 'nc-card-cost',
    templateUrl: './card-cost.component.html',
    styleUrls: ['./card-cost.component.scss']
})
export class CardCostComponent {
    @Input() card: NcCard;
}
