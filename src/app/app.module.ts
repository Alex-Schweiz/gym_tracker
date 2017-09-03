import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ModalModule } from 'ngx-bootstrap/modal';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { routing } from './app.routing';
import { SwimmingComponent } from './admin/swimming/swimming.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { PushupsComponent } from './admin/pushups/pushups.component';
import { SitupsComponent } from './admin/situps/situps.component';
import { SquatsComponent } from './admin/squats/squats.component';

import { SwimmingService } from './admin/swimming/swimming.service';
import { firebaseConfig } from './firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SwimmingComponent,
    StatisticsComponent,
    PushupsComponent,
    SitupsComponent,
    SquatsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MyDatePickerModule,
    routing,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    SwimmingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
