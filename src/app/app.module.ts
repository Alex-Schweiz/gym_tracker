import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { routing } from './app.routing';
import { SwimmingComponent } from './admin/swimming/swimming.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { PushupsComponent } from './admin/pushups/pushups.component';
import { SitupsComponent } from './admin/situps/situps.component';
import { SquatsComponent } from './admin/squats/squats.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SwimmingComponent,
    StatisticsComponent,
    PushupsComponent,
    SitupsComponent,
    SquatsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
