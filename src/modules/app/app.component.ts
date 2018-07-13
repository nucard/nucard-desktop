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
            console.log('Mode electron');
            console.log('Electron ipcRenderer', electronService.ipcRenderer);
            console.log('NodeJS childProcess', electronService.childProcess);

            electronService.ipcRenderer.on('navToOptions', (event, message) => {
                console.log('event', event);
                console.log('router', this.router);
                this.router.navigateByUrl('/options');
            });
        } else {
            console.log('Mode web');
        }
    }
}
