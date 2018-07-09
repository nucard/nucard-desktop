import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgxKeyCode } from 'ngx-keyboard-events';

@Directive({
    selector: '[ncClickOnEnter]'
})
export class ClickOnEnterDirective implements OnInit {
    constructor(private elementRef: ElementRef<HTMLElement>) { }

    ngOnInit() {
        this.elementRef.nativeElement.addEventListener('keyup', (event) => {
            if (event.keyCode === NgxKeyCode.NumPadEnter || event.keyCode === NgxKeyCode.Return || event.keyCode === NgxKeyCode.Space) {
                this.elementRef.nativeElement.click();
            }
        });
    }
}
