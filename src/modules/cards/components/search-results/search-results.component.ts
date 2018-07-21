import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { NcCard, NcSearchResult, NcExtension } from '@nucard/models';
import { SearchResultViewModel } from '../../services/search-result-view-models.service';

@Component({
    selector: 'nc-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
    @Input() searchResults: NcSearchResult[];
    @Output() selectedResultChange = new EventEmitter<SearchResultViewModel>();

    constructor(private domSanitizer: DomSanitizer) { }

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

    getTabLabel(searchResult: NcSearchResult) {
        return `${searchResult.extension.gameName} (${searchResult.cards.length})`;
    }

    resultClick(card: NcCard, extension: NcExtension) {
        this.selectedResultChange.emit({ card, extension });
    }
}
