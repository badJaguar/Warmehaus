import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu-components/menu.component';
import { FooterComponent } from './menu-components/footer/footer.component';
import { MainPageComponent } from './content/main-page/main-page.component';
import { CarouselComponent } from './content/main-page/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatTableModule,
  MatCardModule, MatGridListModule, MatBottomSheetModule, MatSortModule,
  MatRippleModule, MatChipsModule, MatTabsModule,
  MatListModule, MatIconModule, MatDividerModule,
  MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatDialogModule, MatTooltipModule, MatInputModule,
  MatFormFieldModule, MatOptionModule, MatAutocompleteModule,
  MatPaginatorModule, MatSelectModule, MatExpansionModule,
  MatStepperModule, MatBadgeModule, MatButtonToggleModule,
  MatDatepickerModule, MatNativeDateModule, MatProgressBarModule,
  MatRadioModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatTreeModule
} from '@angular/material';
import { NguCarouselModule } from '@ngu/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { WarmehausComponent } from './content/warmehaus/warmehaus.component';
import { ToolbarComponent } from './menu-components/toolbar/toolbar.component';
import { PhonesSheetComponent } from './menu-components/phones-sheet/phones-sheet.component';
import { WarmingMat160WComponent } from './content/warmehaus/warming-mat160-w/warming-mat160-w.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WarmingMat200WComponent } from './content/warmehaus/warming-mat200-w/warming-mat200-w.component';
import { BreadcrumbsComponent } from './menu-components/breadcrumbs/breadcrumbs.component';
import { Cab11WThinComponent } from './content/warmehaus/cab11-w-thin/cab11-w-thin.component';
import { ContentComponent } from './content/content/content.component';
import { Cab14WThinComponent } from './content/warmehaus/cab14-w-thin/cab14-w-thin.component';
import { Cab20WUvComponent } from './content/warmehaus/cab20-w-uv/cab20-w-uv.component';
import { TermostatComponent } from './content/warmehaus/termostat/termostat.component';
import { SafeHtmlPipe } from './safe-html';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FilmsComponent } from './content/warmehaus/films/films.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { AnitIcingComponent } from './content/warmehaus/anit-icing/anit-icing.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainPageComponent,
    CarouselComponent,
    WarmehausComponent,
    ToolbarComponent,
    PhonesSheetComponent,
    WarmingMat160WComponent,
    WarmingMat200WComponent,
    BreadcrumbsComponent,
    Cab11WThinComponent,
    ContentComponent,
    Cab14WThinComponent,
    Cab20WUvComponent,
    TermostatComponent,
    SafeHtmlPipe,
    FilmsComponent,
    ContactsComponent,
    AnitIcingComponent
  ],
  imports: [
    MatCardModule, MatListModule, MatIconModule, MatDividerModule,
    MatMenuModule, MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatChipsModule,
    MatSnackBarModule, MatDialogModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatOptionModule,
    MatAutocompleteModule, MatTableModule, MatPaginatorModule, MatToolbarModule, MatSelectModule, MatExpansionModule, MatStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSortModule,
    MatTabsModule,
    MatTreeModule,
    ScrollingModule,
    MatBottomSheetModule,
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
    CdkTableModule,
    OverlayModule,
    MatBottomSheetModule,
    MatSortModule,
    FlexLayoutModule,
    MatRippleModule,
    MatChipsModule,
    MatTabsModule,
    ImageViewerModule,
    ScrollToModule.forRoot()
  ],
  entryComponents: [
    PhonesSheetComponent,
  ],
  providers: [SafeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
