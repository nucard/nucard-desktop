import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import {
    NcCard,
    NcExternalInfoProvider,
    NcFaction,
    NcPrinting,
    NcRulesSymbol,
} from '@nucard/models/dist';

@Injectable({ providedIn: 'root' })
export class CardsService {
    private _apiBaseUrl = "https://nucard-api.herokuapp.com";
    private _cachedRulesSymbols: NcRulesSymbol[];

    private DEBUG_USERID = '7b7a3a12-1904-43b2-ad45-d0f74825e322';
    private DEBUG_EXTENSIONID_NETRUNNER = 'c059d135-d4b6-493a-b98e-0eba0583d86e';

    constructor(private httpClient: HttpClient) { }

    getExternalInfoProviders(cardId): Observable<NcExternalInfoProvider[]> {
        return this
            .httpClient
            .get<NcExternalInfoProvider[]>(`${this._apiBaseUrl}/external-info-providers/${this.DEBUG_EXTENSIONID_NETRUNNER}/${cardId}`);
    }

    getFactions(): Observable<Array<{ extensionId: string, factions: NcFaction[] }>> {
        return this
            .httpClient
            .get<Array<{ extensionId: string, factions: NcFaction[] }>>(`${this._apiBaseUrl}/factions/${this.DEBUG_EXTENSIONID_NETRUNNER}`);
    }

    getRandomCard(): Observable<NcCard> {
        return this
            .httpClient
            // fake userId
            .get<NcCard>(`${this._apiBaseUrl}/cards/random/${this.DEBUG_USERID}`);
    }

    getRulesSymbols(): Observable<NcRulesSymbol[]> {
        if (this._cachedRulesSymbols) {
            return of(this._cachedRulesSymbols);
        }

        // just a trick to both return the observable and listen to it so we can cache
        const subject = new Subject<NcRulesSymbol[]>();
        const retVal = this
            .httpClient
            .get<NcRulesSymbol[]>(`${this._apiBaseUrl}/rules-symbols`)
            .subscribe(symbols => {
                this._cachedRulesSymbols = symbols;
                subject.next(symbols);
                subject.complete();
            });

        return subject;
    }

    search(query: string): Observable<NcCard[]> {
        console.log('searching', query);
        return this
            .httpClient
            .get<NcCard[]>(`${this._apiBaseUrl}/cards/search/${query}`);
    }
}
