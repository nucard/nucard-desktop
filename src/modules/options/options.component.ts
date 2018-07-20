import { Component, OnInit } from '@angular/core';
import { AutoLaunchService } from './services/auto-launch.service';

@Component({
    selector: 'nc-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
    public isAutoLaunchEnabled = false;

    constructor(private autoLaunchService: AutoLaunchService) { }

    async ngOnInit() {
        this.isAutoLaunchEnabled = await this.autoLaunchService.getIsAutoLaunchEnabled();
    }

    async isAutoLaunchEnabledChange(event) {
        await this.autoLaunchService.setIsAutoLaunchEnabled(event.checked);
        console.log('done', await this.autoLaunchService.getIsAutoLaunchEnabled());
    }
}
