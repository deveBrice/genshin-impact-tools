import { NgModule } from '@angular/core';
import { MaterialsModule } from './materials/materials.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [MaterialsModule],
  providers: [],
  exports: [
    NavigationComponent,
    MaterialsModule
  ],
  bootstrap: []
})
export class SharedGlobalModule { }