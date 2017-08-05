import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/error/pagenotfound.component';
import { Logger } from './_services/logger.service';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        ReactiveFormsModule, 
        HttpModule, 
        AppRouting
    ],
    declarations: [
        AppComponent, 
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        Logger
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }