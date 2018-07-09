import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[ncSearchBox]'
})
export class SearchBoxDirective {
    constructor(private element: ElementRef) { }

    blur() {
        this.element.nativeElement.blur();
    }
}
