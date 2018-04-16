import { DevExtremeModule } from 'devextreme-angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
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
