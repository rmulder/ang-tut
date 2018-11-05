import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button (click)="onSave($event)">Save</button>
    `
})
export class CoursesComponent {
    onSave($event) {
        console.log("Button Save Clicked", $event);
    }
}


