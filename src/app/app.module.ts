import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptorsService } from 'src/shared-global/services/interceptors/auth.interceptor.service';


@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule], providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorsService, multi: true }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
