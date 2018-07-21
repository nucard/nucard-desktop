import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    NcCard,
    NcExtension,
    NcFaction,
    NcRulesSymbol
} from '@nucard/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NcApiService {
    private _apiBaseUrl = "https://nucard-api.herokuapp.com";
    private _cachedRulesSymbols: NcRulesSymbol[];

    private DEBUG_USERID = '7b7a3a12-1904-43b2-ad45-d0f74825e322';

    constructor(private httpClient: HttpClient) { }

    getExtensions(): Observable<NcExtension[]> {
        return this
            .httpClient
            .get<NcExtension[]>(`${this._apiBaseUrl}/user/${this.DEBUG_USERID}/extensions`);
    }

    getFactions(extensionId: string): Observable<NcFaction[]> {
        return this
            .httpClient
            .get<NcExtension[]>(`${this._apiBaseUrl}/factions/${extensionId}`);
    }
}
