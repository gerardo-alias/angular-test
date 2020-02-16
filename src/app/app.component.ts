import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp-test-project';
  movies = [
    {
      hasTrailer: false,
      id: 1,
      // tslint:disable-next-line: max-line-length
      posterPath: 'https://images-na.ssl-images-amazon.com/images/I/71Tfcbik0sL._AC_SY679_.jpg',
      // tslint:disable-next-line: max-line-length
      overview: 'There’s three ways to do things. The right way, the wrong way, and the Max Power way! Isn’t that the wrong way? Yeah, but faster.',
      title: 'Max Power',
    },
    {
      hasTrailer: false,
      id: 1,
      // tslint:disable-next-line: max-line-length
      posterPath: 'https://images-na.ssl-images-amazon.com/images/I/71Tfcbik0sL._AC_SY679_.jpg',
      // tslint:disable-next-line: max-line-length
      overview: 'There’s three ways to do things. The right way, the wrong way, and the Max Power way! Isn’t that the wrong way? Yeah, but faster.',
      title: 'Max Power',
    },
    {
      hasTrailer: false,
      id: 1,
      // tslint:disable-next-line: max-line-length
      posterPath: 'https://images-na.ssl-images-amazon.com/images/I/71Tfcbik0sL._AC_SY679_.jpg',
      // tslint:disable-next-line: max-line-length
      overview: 'There’s three ways to do things. The right way, the wrong way, and the Max Power way! Isn’t that the wrong way? Yeah, but faster.',
      title: 'Max Power',
    },
    {
      hasTrailer: false,
      id: 1,
      // tslint:disable-next-line: max-line-length
      posterPath: 'https://images-na.ssl-images-amazon.com/images/I/71Tfcbik0sL._AC_SY679_.jpg',
      // tslint:disable-next-line: max-line-length
      overview: 'There’s three ways to do things. The right way, the wrong way, and the Max Power way! Isn’t that the wrong way? Yeah, but faster.',
      title: 'Max Power',
    }
  ];
}
