import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './menu/footer/footer.component';
import { DefaultPageComponent } from './content/main-page/main-page.component';
import { CarouselComponent } from './content/main-page/carousel/carousel.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTableModule,
   MatCardModule, MatGridListModule, MatBottomSheetModule, MatSortModule} from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { MaterialModule } from 'src/modules/material/material.module';
import { WarmehausComponent } from './content/warmehaus/warmehaus.component';
import { ToolbarComponent } from './menu/toolbar/toolbar.component';
import { PhonesSheetComponent } from './menu/phones-sheet/phones-sheet.component';
import { WarmingMat160WComponent } from './content/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DefaultPageComponent,
    CarouselComponent,
    WarmehausComponent,
    ToolbarComponent,
    PhonesSheetComponent,
    WarmingMat160WComponent,
    ContentComponent,
    
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
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CdkTableModule,
    OverlayModule,
    MatBottomSheetModule,
    MatSortModule,
    FlexLayoutModule
  ],
  entryComponents: [
    PhonesSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
