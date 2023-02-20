import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SobrenosotrosComponent } from './sobre_nosotros/sobrenosotros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaludMentalComponent } from './salud-mental/salud-mental.component';
import { SaludEspiritualComponent } from './salud-espiritual/salud-espiritual.component';
import { ProfileComponent } from './profile/profile.component';
import { ComunidadComponent } from './comunidad/comunidad.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sobrenosotros', component: SobrenosotrosComponent },
  { path: 'saludmental', component: SaludMentalComponent },
  { path: 'saludespiritual', component: SaludEspiritualComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'comunidad', component: ComunidadComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
