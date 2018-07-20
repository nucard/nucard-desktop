import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../../shared/services/electron.service';

@Component({
    selector: 'nc-app-menu',
    templateUrl: './app-menu.component.html',
    styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {
    constructor(private electronService: ElectronService) { }

    ngOnInit() {
    }

    appQuit() {
        if (this.electronService.isElectron()) {
            this.electronService.remote.app.quit();
        }
    }
}
