import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { NcCard, NcPrinting, NcRulesSymbol } from '@nucard/models/dist';

@Injectable({ providedIn: 'root' })
export class CardsService {
    private _apiBaseUrl = "https://nucard-api.herokuapp.com";
    private _cachedRulesSymbols: NcRulesSymbol[];

    constructor(private httpClient: HttpClient) { }

    getRandomCard(): Observable<NcCard> {
        return this
            .httpClient
            .get<NcCard>(`${this._apiBaseUrl}/cards/random`);
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
        return this
            .httpClient
            .get<NcCard[]>(`${this._apiBaseUrl}/cards/query/${query}`);
    }
}
