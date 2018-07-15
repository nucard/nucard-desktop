import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NcCard } from '@nucard/models/dist';

@Component({
    selector: 'nc-card-result',
    templateUrl: './card-result.component.html',
    styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent {
    @Input() cards: NcCard[];
    @Output() selectedCardChange = new EventEmitter<NcCard>();
    private _selectedCard: NcCard;

    cardClick(card: NcCard) {
        this._selectedCard = card;
        this.selectedCardChange.emit(card);
    }

    getCardThumbnail(card: NcCard) {
        return card.thumbnail ? `url(${card.thumbnail})` : `url(${card.printings[0].image})`;
    }
}
