import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ElectronService } from '../services/electron.service';

@Directive({ selector: '[ncIfElectron]' })
export class IfElectronDirective implements OnInit {
    constructor(
        private electronService: ElectronService,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }

    ngOnInit() {
        if (this.electronService.isElectron()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else if (!this.electronService.isElectron()) {
            this.viewContainer.clear();
        }
    }
}
