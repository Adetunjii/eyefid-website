import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from './pricing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [PricingComponent],
  imports: [CommonModule, PricingRoutingModule, CarouselModule],
})
export class PricingModule {}
