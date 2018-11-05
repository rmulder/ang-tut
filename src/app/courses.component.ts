import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    // when wanting to use two way binding, use the banana in a box method '[()]', and bind to the ngModel property
    template: `
        <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {
    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
}


