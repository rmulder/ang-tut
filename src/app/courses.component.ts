import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    // when wanting to use two way binding, use the banana in a box method '[()]', and bind to the ngModel property
    template: `
        {{ text | summary:10 }}
    `
})
export class CoursesComponent {
    text = `me ogmd krfkk l ksldk s ld;sd iefieeefie nfe efmefme f.`
}


