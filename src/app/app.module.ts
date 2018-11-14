import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './menu/footer/footer.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { CarouselComponent } from './default-page/carousel/carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTableModule,
   MatCardModule, MatGridListModule} from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { MaterialModule } from 'src/modules/material/material.module';
import { WarmehausComponent } from './pages/warmehaus/warmehaus.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DefaultPageComponent,
    CarouselComponent,
    WarmehausComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    NguCarouselModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CdkTableModule,
    OverlayModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
