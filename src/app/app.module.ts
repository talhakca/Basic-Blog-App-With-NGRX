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

registerLocaleData(en);

const routes: Routes = [
  {
    path: 'home',
    component: LandingPageComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'clinical-care',
    component: ClinicalCareComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'clinical-care-detail/:id',
    component: ClinicalCareDetailComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'hot-topics',
    component: HotTopicsComponent
  },
  {
    path: 'diabetes-teaching-toolkit',
    component: DiabetesTeachingToolkitComponent
  },
  {
    path: 'under-resourced-countries',
    component: UnderResourcedCountriesComponent
  },
  {
    path: 'useful-links',
    component: UsefulLinksComponent
  },
  {
    path: 'e-learning',
    component: ELearningComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
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
    FavoritesComponent
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
