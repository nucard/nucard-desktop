import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[ncSearchBox]'
})
export class SearchBoxDirective {
    constructor(private element: ElementRef<HTMLInputElement>) { }

    blur() {
        this.element.nativeElement.blur();
    }
}
