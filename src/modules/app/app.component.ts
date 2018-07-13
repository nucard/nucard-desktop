import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../shared/services/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../../environments/environment';

@Component({
    selector: 'nc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        public electronService: ElectronService,
        private router: Router,
        private translate: TranslateService) {
        translate.setDefaultLang('en');

        if (electronService.isElectron()) {
            electronService.ipcRenderer.on('navToAbout', (event, message) => {
                this.router.navigateByUrl('/about');
            });

            electronService.ipcRenderer.on('navToPreferences', (event, message) => {
                this.router.navigateByUrl('/preferences');
            });
        }
    }
}
