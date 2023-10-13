import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialsModule } from './materials/materials.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, MaterialsModule],

  exports: [
    MaterialsModule,
    BrowserModule,
  ],
  bootstrap: [],
})
export class SharedGlobalModule { }