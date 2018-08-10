import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AvatarListComponent } from './components/avatar-list/avatar-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DasheadComponent } from './components/dashead/dashead.component';
import { HrDividerComponent } from './components/hr-divider/hr-divider.component';
import { ListgroupComponent } from './components/listgroup/listgroup.component';
import { MedialistComponent } from './components/medialist/medialist.component';
import {StatcardsComponent } from './components/statcards/statcards.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvatarListComponent,
    SidebarComponent,
    NavbarComponent,
    CalendarComponent,
    DasheadComponent,
    HrDividerComponent,
    ListgroupComponent,
    MedialistComponent,
    StatcardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
