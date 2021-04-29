import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './reusables/static/navbar/navbar.component';
import { FooterComponent } from './reusables/static/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { InsightsComponent } from './insights/insights.component';
import { HairBusinessComponent } from './insights/hair-business/hair-business.component';
import { LogisticsComponent } from './insights/logistics/logistics.component';
import { BeautyProductsComponent } from './insights/beauty-products/beauty-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    InsightsComponent,
    HairBusinessComponent,
    LogisticsComponent,
    BeautyProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
