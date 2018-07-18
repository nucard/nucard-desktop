import { Injectable } from '@angular/core';
import { NcCard, NcExtension, NcSearchResult } from '@nucard/models';
import * as _ from 'lodash';

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
            viewModels = viewModels.concat(_.map(result.cards, c => {
                return { extension: result.extension, card: c };
            }));
        }

        return viewModels;
    }
}
