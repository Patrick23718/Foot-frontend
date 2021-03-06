import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NavbarComponent } from './shared/components/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/components/footer/footer.component';
import { SidebarComponent } from './shared/components/admin-components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/admin-components/topbar/topbar.component';
import { HomeComponent } from './admin/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { EquipeComponent } from './admin/equipe/equipe.component';
import { JoueurComponent } from './admin/joueur/joueur.component';
import { ParametreComponent } from './admin/parametre/parametre.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    EquipeComponent,
    JoueurComponent,
    ParametreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: AccueilComponent },
      { path: 'admin/dashboard', component: HomeComponent },
      { path: 'admin/equipes', component: EquipeComponent },
      { path: 'admin/joueurs', component: JoueurComponent },
      { path: 'admin/parametres', component: ParametreComponent },
      { path: 'admin/equipes', component: EquipeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '404', component: NotfoundComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: '404', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
