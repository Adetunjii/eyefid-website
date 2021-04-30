import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, DeferLoadModule],
})
export class AboutModule {}
