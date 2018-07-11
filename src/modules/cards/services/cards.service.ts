import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NcCard, NcPrinting } from '@nucard/models';

@Injectable({ providedIn: 'root' })
export class CardsService {
    // private _apiBaseUrl = "http://localhost:3000";
    private _apiBaseUrl = "https://nucard-api.herokuapp.com";

    constructor(private httpClient: HttpClient) { }

    getRandomCard(): Observable<NcCard> {
        return this
            .httpClient
            .get<NcCard>(`${this._apiBaseUrl}/cards/random`);
    }

    search(query: string): Observable<NcCard> {
        return this
            .httpClient
            .get<NcCard[]>(`${this._apiBaseUrl}/cards/query/${query}`);
    }
}
