// vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// views
import { TrendingViewComponent } from '@views/trending-view/trending-view.component';

const routes: Routes = [
  { path: '', component: TrendingViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
