import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdsComponent } from './components/ads/ads.component';
import { AdsHandleComponent } from './components/ads-handle/ads-handle.component';

export const routes: Routes = [
    {path: 'login' , component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'ads', component: AdsComponent},
    {path: 'adsHandle', component: AdsHandleComponent},
];
