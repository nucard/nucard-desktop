import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NcCard } from '@nucard/models';

@Component({
    selector: 'nc-card-result',
    templateUrl: './card-result.component.html',
    styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent {
    @Input() cards: NcCard[];
    @Output() selectedCardChange = new EventEmitter<NcCard>();
    private _selectedCard: NcCard;

    constructor(private domSanitizer: DomSanitizer) { }

    cardClick(card: NcCard) {
        this._selectedCard = card;
        this.selectedCardChange.emit(card);
    }

    getCardThumbnail(card: NcCard): SafeStyle {
        let thumbnailUrl: string;

        if (card.thumbnail) {
            thumbnailUrl = card.thumbnail;
        } else {
            const firstPrintingWithImage = card.printings.find(p => p.image ? true : false);
            thumbnailUrl = firstPrintingWithImage ? firstPrintingWithImage.image : '';
        }

        return this.domSanitizer.bypassSecurityTrustStyle(`url(${thumbnailUrl})`);
    }
}
