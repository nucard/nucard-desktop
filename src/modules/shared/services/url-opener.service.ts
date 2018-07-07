import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { shell } from 'electron';

@Injectable({
    providedIn: 'root'
})
export class UrlOpenerService {

    constructor(private electronService: ElectronService) { }

    open(url: string) {
        if (this.electronService.isElectron()) {
            shell.openExternal(url);
        } else {
            throw new Error('Need to solve the whole "open external link dynamically with angular router" thing');
        }
    }
}
