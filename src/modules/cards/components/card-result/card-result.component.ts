import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NcCard } from '@nucard/models/dist';
import { SearchResultViewModel } from '../../services/search-result-view-models.service';

@Component({
    selector: 'nc-card-result',
    templateUrl: './card-result.component.html',
    styleUrls: ['./card-result.component.scss']
})
export class CardResultComponent {
    @Input() searchResults: SearchResultViewModel[];
    @Output() selectedResultChange = new EventEmitter<SearchResultViewModel>();
    private _selectedResult: SearchResultViewModel;

    constructor(private domSanitizer: DomSanitizer) { }

    resultClick(result: SearchResultViewModel) {
        this._selectedResult = result;
        this.selectedResultChange.emit(result);
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
