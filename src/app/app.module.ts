import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './reusables/static/navbar/navbar.component';
import { FooterComponent } from './reusables/static/footer/footer.component';
import { InsightsComponent } from './insights/insights.component';
import { HairBusinessComponent } from './insights/hair-business/hair-business.component';
import { LogisticsComponent } from './insights/logistics/logistics.component';
import { BeautyProductsComponent } from './insights/beauty-products/beauty-products.component';
import { CtaComponent } from './reusables/cta/cta.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InsightsComponent,
    HairBusinessComponent,
    LogisticsComponent,
    BeautyProductsComponent,
    CtaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule,
    AboutModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
