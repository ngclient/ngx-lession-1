import { AuthModule } from './auth/auth.module';
import { ComponentsModule } from './shared/components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeadersComponent } from './shared/components/headers/headers.component';
import { FootersComponent } from './shared/components/footers/footers.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule.forRoot(),
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
