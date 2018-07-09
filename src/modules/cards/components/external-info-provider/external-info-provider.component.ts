import { Component, Input } from '@angular/core';
import { NcExternalInfoProvider } from '@nucard/models';
import { UrlOpenerService } from '../../../shared/services/url-opener.service';

@Component({
    selector: 'nc-external-info-provider',
    templateUrl: './external-info-provider.component.html',
    styleUrls: ['./external-info-provider.component.scss']
})
export class ExternalInfoProviderComponent {
    @Input() provider: NcExternalInfoProvider;

    constructor(private urlOpener: UrlOpenerService) { }

    buttonClick(url) {
        this.urlOpener.open(url);
    }
}
