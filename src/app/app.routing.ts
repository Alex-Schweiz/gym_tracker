import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SwimmingComponent } from './admin/swimming/swimming.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { PushupsComponent } from './admin/pushups/pushups.component';
import { SitupsComponent } from './admin/situps/situps.component';
import { SquatsComponent } from './admin/squats/squats.component';
import { ExercisesLibraryComponent } from './admin/exercises-library/exercises-library.component';
import { ExercisesListComponent } from './admin/exercises-library/list/list.component';
import { ExerciseListItemComponent } from './admin/exercises-library/exercise-list-item/exercise-list-item.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'swimming', component: SwimmingComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'pushups', component: PushupsComponent},
  { path: 'situps', component: SitupsComponent},
  { path: 'squats', component: SquatsComponent},
  { path: 'exercises-library', component: ExercisesLibraryComponent},
  { path: 'exercises-library/:type', component: ExercisesListComponent},
  { path: 'exercises-library/:type/:id', component: ExerciseListItemComponent},
  { path: '**', redirectTo: 'dashboard' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


