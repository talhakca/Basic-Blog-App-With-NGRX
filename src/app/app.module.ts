import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ClinicalCareComponent } from './clinical-care/clinical-care.component';
import { Router, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ClinicalCareDetailComponent } from './clinical-care-detail/clinical-care-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { HotTopicsComponent } from './hot-topics/hot-topics.component';
import { DiabetesTeachingToolkitComponent } from './diabetes-teaching-toolkit/diabetes-teaching-toolkit.component';
import { UnderResourcedCountriesComponent } from './under-resourced-countries/under-resourced-countries.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SplashComponent } from './splash/splash.component';
import { SplashGuard } from './splash.guard';

registerLocaleData(en);

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'clinical-care',
    component: ClinicalCareComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'clinical-care-detail/:id',
    component: ClinicalCareDetailComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [SplashGuard]
  },
  {
    path: 'hot-topics',
    component: HotTopicsComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'diabetes-teaching-toolkit',
    component: DiabetesTeachingToolkitComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'under-resourced-countries',
    component: UnderResourcedCountriesComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'useful-links',
    component: UsefulLinksComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'e-learning',
    component: ELearningComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthenticatedGuard, SplashGuard]
  },
  {
    path: 'splash',
    component: SplashComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ClinicalCareComponent,
    ClinicalCareDetailComponent,
    LandingPageComponent,
    LoginPageComponent,
    HotTopicsComponent,
    DiabetesTeachingToolkitComponent,
    UnderResourcedCountriesComponent,
    UsefulLinksComponent,
    ELearningComponent,
    FavoritesComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
