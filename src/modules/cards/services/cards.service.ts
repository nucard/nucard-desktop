import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NcCard, NcPrinting } from '@nucard/models';

@Injectable({ providedIn: 'root' })
export class CardsService {
    private _apiBaseUrl = "http://localhost:3000";

    constructor(private httpClient: HttpClient) { }

    search(query: string): Observable<NcCard> {
        return this
            .httpClient
            .get<NcCard[]>(`${this._apiBaseUrl}/query/${query}`);
    }
}
