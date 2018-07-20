import { Injectable } from '@angular/core';
import { ElectronService } from '../../shared/services/electron.service';
import * as AutoLaunch from 'auto-launch';

@Injectable({ providedIn: 'root' })
export class AutoLaunchService {
    private autoLaunch: typeof AutoLaunch;

    constructor(private electronService: ElectronService) {
        if (electronService.isElectron()) {
            this.autoLaunch = window.require('auto-launch');
        }
    }

    async getIsAutoLaunchEnabled(): Promise<boolean> {
        const autoLaunchClient = this.getAutoLaunchClient();
        if (autoLaunchClient) {
            return autoLaunchClient.isEnabled();
        }

        return false;
    }

    async setIsAutoLaunchEnabled(isEnabled: boolean): Promise<void> {
        const autoLaunchClient = this.getAutoLaunchClient();
        if (autoLaunchClient) {
            if (isEnabled) {
                return autoLaunchClient.enable();
            }
            return autoLaunchClient.disable();
        }

        throw new Error("Can't set auto launch enabled - we're probably not in Electron land?");
    }

    private getAutoLaunchClient() {
        if (this.autoLaunch) {
            return new AutoLaunch({ name: "NuCard" });
        }

        return null;
    }
}
