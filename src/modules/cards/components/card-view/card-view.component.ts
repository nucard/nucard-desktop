import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card, CardPrinting } from '../../services/cards.service';

@Component({
    selector: 'nc-card-view',
    templateUrl: './card-view.component.html',
    styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
    @Input() card: Card;
    _selectedPrinting: CardPrinting;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this._selectedPrinting = this.card.printings[0];
    }
}
