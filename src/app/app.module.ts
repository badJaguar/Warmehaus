import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './menu/footer/footer.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { CarouselComponent } from './default-page/carousel/carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DefaultPageComponent,
    CarouselComponent,
    
    // NguCarouselModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
