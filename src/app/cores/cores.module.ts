import { DevExtremeModule } from 'devextreme-angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DevExtremeModule
  ],
  declarations: []
})
export class CoresModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoresModule
    };
  }
}
