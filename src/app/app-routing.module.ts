// vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// constants
import { ROOT, TRAILERS } from '@constants/routes';

// views
import { TrailerViewComponent } from '@views/trailer-view/trailer-view.component';
import { TrendingViewComponent } from '@views/trending-view/trending-view.component';

const routes: Routes = [
  { path: ROOT, component: TrendingViewComponent },
  { path: TRAILERS, component: TrailerViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
