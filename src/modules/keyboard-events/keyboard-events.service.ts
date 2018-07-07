import { Injectable, EventEmitter } from '@angular/core';

export enum KeyCode {
    LeftArrow = 37,
    UpArrow = 38,
    RightArrow = 39,
    DownArrow = 40
}

@Injectable({ providedIn: 'root' })
export class KeyboardEventsService {
    public onKeyPressed: EventEmitter<KeyCode> = new EventEmitter<KeyCode>();

    constructor() {
        // can't use HostListener in a service :/
        window.addEventListener('keyup', (event) => {
            this.onKeyPressed.emit(<KeyCode>event.keyCode);
        });
    }
}
