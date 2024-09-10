import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignupComponent } from './signup/signup.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { MonsterComponent } from './pages/monster/monster.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  // {path: 'monster', component:MonsterComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'signup', component:SignupComponent},
  // {path: '**', component:NotFoundComponent}
];
