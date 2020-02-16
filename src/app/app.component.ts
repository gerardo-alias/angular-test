import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp-test-project';
  movie = {
    name: 'Max Power',
    // tslint:disable-next-line: max-line-length
    description: 'There’s three ways to do things. The right way, the wrong way, and the Max Power way! Isn’t that the wrong way? Yeah, but faster.',
    // tslint:disable-next-line: max-line-length
    posterPath: 'https://images-na.ssl-images-amazon.com/images/I/71Tfcbik0sL._AC_SY679_.jpg'
  };
}
