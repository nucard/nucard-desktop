import { Component, Input } from '@angular/core';
import { ExternalInfoProvider } from '../../services/cards.service';
import { UrlOpenerService } from '../../../shared/services/url-opener.service';

@Component({
    selector: 'nc-external-info-provider',
    templateUrl: './external-info-provider.component.html',
    styleUrls: ['./external-info-provider.component.scss']
})
export class ExternalInfoProviderComponent {
    @Input() provider: ExternalInfoProvider;

    constructor(private urlOpener: UrlOpenerService) { }

    buttonClick(url) {
        this.urlOpener.open(url);
    }
}
