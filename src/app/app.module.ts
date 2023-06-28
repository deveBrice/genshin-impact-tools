import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorsService } from 'src/shared-global/services/interceptors/auth.interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
   /* FormsModule,
    ReactiveFormsModule,*/
    AppRoutingModule,
    
   
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorsService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
