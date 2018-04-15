import { DevExtremeModule } from 'devextreme-angular';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutsModule { }
