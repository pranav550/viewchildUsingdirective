import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpcolorDirective } from './cpcolor.directive';
import { CpThemeComponent } from './cp-theme/cp-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    CpcolorDirective,
    CpThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
