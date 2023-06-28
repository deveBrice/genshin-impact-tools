import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialsModule } from './materials/materials.module';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [],
  imports: [BrowserModule, MaterialsModule, SocialLoginModule, GoogleSigninButtonModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1050265850814-4dr1cml0ism1s8v1vrmka1pjnbdslt1g.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  exports: [
    MaterialsModule,
    BrowserModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  bootstrap: [],
})
export class SharedGlobalModule { }