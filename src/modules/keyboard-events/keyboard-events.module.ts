import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardEventsService } from './keyboard-events.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [KeyboardEventsService]
})
export class KeyboardEventsModule { }
