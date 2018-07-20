import { Injectable } from '@angular/core';
import { NcCard, NcExtension, NcSearchResult } from '@nucard/models/dist';

export class SearchResultViewModel {
    card: NcCard;
    extension: NcExtension;
}

@Injectable({ providedIn: 'root' })
export class SearchResultViewModelsService {
    transformNcSearchResults(results: NcSearchResult[]): SearchResultViewModel[] {
        if (!results || results.length === 0) {
            return [];
        }

        let viewModels: SearchResultViewModel[] = [];

        for (const result of results) {
            viewModels = viewModels.concat(result.cards.map(c => {
                return { extension: result.extension, card: c };
            }));
        }

        return viewModels;
    }
}
