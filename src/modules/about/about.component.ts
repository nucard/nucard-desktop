import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../shared/services/electron.service';

@Component({
    selector: 'nc-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public version: string;

    constructor(private electronService: ElectronService) { }

    ngOnInit() {
        this.version = this.electronService.appVersion;
    }
}
