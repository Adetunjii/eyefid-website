import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BeautyProductsComponent } from './insights/beauty-products/beauty-products.component';
import { HairBusinessComponent } from './insights/hair-business/hair-business.component';
import { InsightsComponent } from './insights/insights.component';
import { LogisticsComponent } from './insights/logistics/logistics.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'insights',
    children: [
      { path: '', component: InsightsComponent },
      { path: 'logistics-business', component: LogisticsComponent },
      { path: 'beauty-product-business', component: BeautyProductsComponent },
      { path: 'hair-business', component: HairBusinessComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
