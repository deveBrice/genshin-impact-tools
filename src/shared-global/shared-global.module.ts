import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialsModule } from './materials/materials.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [BrowserModule, MaterialsModule],
  providers: [],
  exports: [
    NavigationComponent,
    MaterialsModule
  ],
  bootstrap: []
})
export class SharedGlobalModule { }