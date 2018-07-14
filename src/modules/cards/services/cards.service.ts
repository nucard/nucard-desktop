import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NcCard, NcPrinting, NcRulesSymbol } from '@nucard/models';

@Injectable({ providedIn: 'root' })
export class CardsService {
    private _apiBaseUrl = "https://nucard-api.herokuapp.com";

    constructor(private httpClient: HttpClient) { }

    getRandomCard(): Observable<NcCard> {
        return this
            .httpClient
            .get<NcCard>(`${this._apiBaseUrl}/cards/random`);
    }

    getRulesSymbols(): Observable<NcRulesSymbol[]> {
        return this
            .httpClient
            .get<NcRulesSymbol[]>(`${this._apiBaseUrl}/rules-symbols`);
    }

    search(query: string): Observable<NcCard[]> {
        return this
            .httpClient
            .get<NcCard[]>(`${this._apiBaseUrl}/cards/query/${query}`);
    }
}
