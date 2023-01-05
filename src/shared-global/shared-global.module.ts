import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, MaterialsModule],
  providers: [],
  exports: [
    MaterialsModule,
    BrowserModule
  ],
  bootstrap: []
})
export class SharedGlobalModule { }