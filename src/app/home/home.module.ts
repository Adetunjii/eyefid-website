import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, DeferLoadModule],
})
export class HomeModule {}
