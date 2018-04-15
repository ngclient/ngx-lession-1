import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FootersComponent } from './footers/footers.component';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS = [
  HeadersComponent,
  SidebarsComponent,
  PageContentComponent,
  FootersComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
    };
  }
}
