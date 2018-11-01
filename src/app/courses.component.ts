
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <div class='courses'> ".courses"
    template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent {
    title = "List of courses";

    getTitle() {
        return this.title;
    }
}

