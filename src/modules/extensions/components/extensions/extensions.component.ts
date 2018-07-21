import { Component, OnInit } from '@angular/core';
import { NcExtension } from '@nucard/models';
import { Observable } from 'rxjs';
import { NcApiService } from '../../../shared/services/nc-api.service';

@Component({
    selector: 'nc-extensions',
    templateUrl: './extensions.component.html',
    styleUrls: ['./extensions.component.scss']
})
export class ExtensionsComponent implements OnInit {
    public userExtensions: Observable<NcExtension[]> = null;

    constructor(private apiService: NcApiService) { }

    ngOnInit() {
        this.userExtensions = this.apiService.getExtensions();
    }
}
