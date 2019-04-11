(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/main-page/main-page.component */ "./src/app/content/main-page/main-page.component.ts");
/* harmony import */ var _content_warmehaus_warmehaus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/warmehaus/warmehaus.component */ "./src/app/content/warmehaus/warmehaus.component.ts");
/* harmony import */ var _content_warmehaus_warming_mat160_w_warming_mat160_w_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/warmehaus/warming-mat160-w/warming-mat160-w.component */ "./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.ts");
/* harmony import */ var _content_warmehaus_warming_mat200_w_warming_mat200_w_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/warmehaus/warming-mat200-w/warming-mat200-w.component */ "./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.ts");
/* harmony import */ var _content_warmehaus_cab11_w_thin_cab11_w_thin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/warmehaus/cab11-w-thin/cab11-w-thin.component */ "./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.ts");
/* harmony import */ var _content_warmehaus_cab14_w_thin_cab14_w_thin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/warmehaus/cab14-w-thin/cab14-w-thin.component */ "./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.ts");
/* harmony import */ var _content_warmehaus_cab20_w_uv_cab20_w_uv_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/warmehaus/cab20-w-uv/cab20-w-uv.component */ "./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.ts");
/* harmony import */ var _content_warmehaus_termostat_termostat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/warmehaus/termostat/termostat.component */ "./src/app/content/warmehaus/termostat/termostat.component.ts");
/* harmony import */ var _content_warmehaus_films_films_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/warmehaus/films/films.component */ "./src/app/content/warmehaus/films/films.component.ts");
/* harmony import */ var _content_warmehaus_anit_icing_anit_icing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/warmehaus/anit-icing/anit-icing.component */ "./src/app/content/warmehaus/anit-icing/anit-icing.component.ts");













var routes = [
    { path: 'home', component: _content_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'warmehaus',
        component: _content_warmehaus_warmehaus_component__WEBPACK_IMPORTED_MODULE_4__["WarmehausComponent"],
        children: [
            { path: 'mat-160W', component: _content_warmehaus_warming_mat160_w_warming_mat160_w_component__WEBPACK_IMPORTED_MODULE_5__["WarmingMat160WComponent"] },
            { path: 'mat-200W', component: _content_warmehaus_warming_mat200_w_warming_mat200_w_component__WEBPACK_IMPORTED_MODULE_6__["WarmingMat200WComponent"] },
            { path: 'cab-11W-thin', component: _content_warmehaus_cab11_w_thin_cab11_w_thin_component__WEBPACK_IMPORTED_MODULE_7__["Cab11WThinComponent"] },
            { path: 'cab-14W-thin', component: _content_warmehaus_cab14_w_thin_cab14_w_thin_component__WEBPACK_IMPORTED_MODULE_8__["Cab14WThinComponent"] },
            { path: 'cab-20W-uv-protection', component: _content_warmehaus_cab20_w_uv_cab20_w_uv_component__WEBPACK_IMPORTED_MODULE_9__["Cab20WUvComponent"] },
            { path: 'termostats', component: _content_warmehaus_termostat_termostat_component__WEBPACK_IMPORTED_MODULE_10__["TermostatComponent"] },
            { path: 'films', component: _content_warmehaus_films_films_component__WEBPACK_IMPORTED_MODULE_11__["FilmsComponent"] },
            { path: 'anti-icing', component: _content_warmehaus_anit_icing_anit_icing_component__WEBPACK_IMPORTED_MODULE_12__["AnitIcingComponent"] },
        ] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height:100%;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto\r\n}\r\n.content{\r\n    flex: 1 0 auto;\r\n    width: 95%;\r\n    margin-left: auto;\r\n    margin-right: auto\r\n}\r\n.foot{\r\n    flex: 0 1 auto;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxufVxyXG4uY29udGVudHtcclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbn1cclxuLmZvb3R7XHJcbiAgICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar\">\r\n    <app-toolbar></app-toolbar>\r\n  </div>\r\n<div class=\"wrapper\">\r\n    <div class=\"content\">\r\n        <app-menu></app-menu>\r\n\r\n        <!-- Content section -->\r\n        <div class=\"outlet .md-body-2\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        \r\n    <!-- Footer section -->\r\n    </div>\r\n    <div class=\"foot\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Warmehaus';
    }
    // tslint:disable-next-line:use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_components_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-components/menu.component */ "./src/app/menu-components/menu.component.ts");
/* harmony import */ var _menu_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-components/footer/footer.component */ "./src/app/menu-components/footer/footer.component.ts");
/* harmony import */ var _content_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/main-page/main-page.component */ "./src/app/content/main-page/main-page.component.ts");
/* harmony import */ var _content_main_page_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/main-page/carousel/carousel.component */ "./src/app/content/main-page/carousel/carousel.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/fesm5/ngu-carousel.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _content_warmehaus_warmehaus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./content/warmehaus/warmehaus.component */ "./src/app/content/warmehaus/warmehaus.component.ts");
/* harmony import */ var _menu_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./menu-components/toolbar/toolbar.component */ "./src/app/menu-components/toolbar/toolbar.component.ts");
/* harmony import */ var _menu_components_phones_sheet_phones_sheet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu-components/phones-sheet/phones-sheet.component */ "./src/app/menu-components/phones-sheet/phones-sheet.component.ts");
/* harmony import */ var _content_warmehaus_warming_mat160_w_warming_mat160_w_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./content/warmehaus/warming-mat160-w/warming-mat160-w.component */ "./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _content_warmehaus_warming_mat200_w_warming_mat200_w_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./content/warmehaus/warming-mat200-w/warming-mat200-w.component */ "./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.ts");
/* harmony import */ var _menu_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./menu-components/breadcrumbs/breadcrumbs.component */ "./src/app/menu-components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _content_warmehaus_cab11_w_thin_cab11_w_thin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./content/warmehaus/cab11-w-thin/cab11-w-thin.component */ "./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.ts");
/* harmony import */ var _content_content_content_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./content/content/content.component */ "./src/app/content/content/content.component.ts");
/* harmony import */ var _content_warmehaus_cab14_w_thin_cab14_w_thin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./content/warmehaus/cab14-w-thin/cab14-w-thin.component */ "./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.ts");
/* harmony import */ var _content_warmehaus_cab20_w_uv_cab20_w_uv_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./content/warmehaus/cab20-w-uv/cab20-w-uv.component */ "./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.ts");
/* harmony import */ var _content_warmehaus_termostat_termostat_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./content/warmehaus/termostat/termostat.component */ "./src/app/content/warmehaus/termostat/termostat.component.ts");
/* harmony import */ var _safe_html__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./safe-html */ "./src/app/safe-html.ts");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "./node_modules/@hallysonh/ngx-imageviewer/fesm5/hallysonh-ngx-imageviewer.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _content_warmehaus_films_films_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./content/warmehaus/films/films.component */ "./src/app/content/warmehaus/films/films.component.ts");
/* harmony import */ var _content_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./content/contacts/contacts.component */ "./src/app/content/contacts/contacts.component.ts");
/* harmony import */ var _content_warmehaus_anit_icing_anit_icing_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./content/warmehaus/anit-icing/anit-icing.component */ "./src/app/content/warmehaus/anit-icing/anit-icing.component.ts");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_components_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _menu_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _content_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_7__["MainPageComponent"],
                _content_main_page_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
                _content_warmehaus_warmehaus_component__WEBPACK_IMPORTED_MODULE_16__["WarmehausComponent"],
                _menu_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["ToolbarComponent"],
                _menu_components_phones_sheet_phones_sheet_component__WEBPACK_IMPORTED_MODULE_18__["PhonesSheetComponent"],
                _content_warmehaus_warming_mat160_w_warming_mat160_w_component__WEBPACK_IMPORTED_MODULE_19__["WarmingMat160WComponent"],
                _content_warmehaus_warming_mat200_w_warming_mat200_w_component__WEBPACK_IMPORTED_MODULE_21__["WarmingMat200WComponent"],
                _menu_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_22__["BreadcrumbsComponent"],
                _content_warmehaus_cab11_w_thin_cab11_w_thin_component__WEBPACK_IMPORTED_MODULE_23__["Cab11WThinComponent"],
                _content_content_content_component__WEBPACK_IMPORTED_MODULE_24__["ContentComponent"],
                _content_warmehaus_cab14_w_thin_cab14_w_thin_component__WEBPACK_IMPORTED_MODULE_25__["Cab14WThinComponent"],
                _content_warmehaus_cab20_w_uv_cab20_w_uv_component__WEBPACK_IMPORTED_MODULE_26__["Cab20WUvComponent"],
                _content_warmehaus_termostat_termostat_component__WEBPACK_IMPORTED_MODULE_27__["TermostatComponent"],
                _safe_html__WEBPACK_IMPORTED_MODULE_28__["SafeHtmlPipe"],
                _content_warmehaus_films_films_component__WEBPACK_IMPORTED_MODULE_31__["FilmsComponent"],
                _content_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_32__["ContactsComponent"],
                _content_warmehaus_anit_icing_anit_icing_component__WEBPACK_IMPORTED_MODULE_33__["AnitIcingComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_34__["CdkTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_35__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_11__["NguCarouselModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_29__["ImageViewerModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_30__["ScrollToModule"].forRoot()
            ],
            entryComponents: [
                _menu_components_phones_sheet_phones_sheet_component__WEBPACK_IMPORTED_MODULE_18__["PhonesSheetComponent"],
            ],
            providers: [_safe_html__WEBPACK_IMPORTED_MODULE_28__["SafeHtmlPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/image-view-styles.ts":
/*!************************************************!*\
  !*** ./src/app/constants/image-view-styles.ts ***!
  \************************************************/
/*! exports provided: MY_IMAGEVIEWER_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_IMAGEVIEWER_CONFIG", function() { return MY_IMAGEVIEWER_CONFIG; });
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "./node_modules/@hallysonh/ngx-imageviewer/fesm5/hallysonh-ngx-imageviewer.js");

// https://www.npmjs.com/package/@hallysonh/ngx-imageviewer
var MY_IMAGEVIEWER_CONFIG = {
    width: 320,
    height: 320,
    bgStyle: '#FFFFFF',
    scaleStep: 0.1,
    rotateStepper: true,
    loadingMessage: 'Loading...',
    buttonStyle: {
        iconFontFamily: 'Material Icons',
        alpha: 0.8,
        hoverAlpha: 0.7,
        bgStyle: '#000000',
        iconStyle: '#fff64f',
        borderStyle: '#000000',
        borderWidth: 0 // buttons' border width (0 == disabled)
    },
    tooltips: {
        enabled: true,
        bgStyle: '#000000',
        bgAlpha: 1,
        textStyle: '#ffffff',
        textAlpha: 0.9,
        padding: 20,
        radius: 20,
    },
    zoomOutButton: {
        icon: 'zoom_out',
        tooltip: 'Zoom out',
        sortId: 0,
        show: true // used to show/hide the button
    },
    // shorter button configuration style
    nextPageButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_0__["createButtonConfig"])('navigate_next', 'Next page', 0),
    beforePageButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_0__["createButtonConfig"])('navigate_before', 'Previous page', 1),
    zoomInButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_0__["createButtonConfig"])('zoom_in', 'Zoom in', 1),
    rotateLeftButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_0__["createButtonConfig"])('rotate_left', 'Rotate left', 2, false),
    rotateRightButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_0__["createButtonConfig"])('rotate_right', 'Rotate right', 3, false),
    resetButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_0__["createButtonConfig"])('autorenew', 'Reset', 4)
};


/***/ }),

/***/ "./src/app/content/contacts/contacts.component.css":
/*!*********************************************************!*\
  !*** ./src/app/content/contacts/contacts.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content/contacts/contacts.component.html":
/*!**********************************************************!*\
  !*** ./src/app/content/contacts/contacts.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Some bug fixed -->\r\n<p>\r\n  contacts works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/content/contacts/contacts.component.ts":
/*!********************************************************!*\
  !*** ./src/app/content/contacts/contacts.component.ts ***!
  \********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/content/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/content/contacts/contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/content/content/content.component.css":
/*!*******************************************************!*\
  !*** ./src/app/content/content/content.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/content/content/content.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/content/content.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <a routerLink=\"./warmehaus\">Warmehaus</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/content/content/content.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/content/content.component.ts ***!
  \******************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/content/main-page/carousel/carousel.animation.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/main-page/carousel/carousel.animation.ts ***!
  \******************************************************************/
/*! exports provided: EXPANSION_PANEL_ANIMATION_TIMING, slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_PANEL_ANIMATION_TIMING", function() { return EXPANSION_PANEL_ANIMATION_TIMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

/** Time and timing curve for expansion panel animations. */
var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/** Animations used by the Material expansion panel. */
var slider = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slider', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{distance}}px,0,0)' }), {
        params: { distance: '0' }
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate3d({{distance}}px,0,0)' }), {
        params: { distance: '0' }
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease'))
]);


/***/ }),

/***/ "./src/app/content/main-page/carousel/carousel.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/content/main-page/carousel/carousel.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bannerStyle div {\r\n    background-color: #ccc;\r\n    background-size: cover !important;\r\n    height: 100%;\r\n  }\r\n  \r\n  .bannerStyle img {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .bannerStyle h1 {\r\n    text-align: center;\r\n    background: rgba(0, 0, 0, 0.32);\r\n    color: white;\r\n    margin: 0;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .tile {\r\n    min-height: 400px;\r\n    background-color: #ccc;\r\n    background-size: cover !important;\r\n  }\r\n  \r\n  .wBg {\r\n    background: white;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  nav {\r\n    border-bottom: 1px solid #ccc;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    background: white;\r\n    z-index: 12;\r\n  }\r\n  \r\n  nav h1 {\r\n    margin: 0;\r\n    padding: 10px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .carBtn {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\r\n    border-radius: 999px;\r\n  }\r\n  \r\n  .leftRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color:#ff0000;\r\n    box-shadow: 1px 2px 10px -1px #ff0000;\r\n    border-radius: 999px;\r\n    left: 0;\r\n  }\r\n  \r\n  .rightRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color:#ff0000;\r\n    box-shadow: 1px 2px 10px -1px #ff0000;\r\n    border-radius: 999px;\r\n    right: 0;\r\n  }\r\n  \r\n  .myPoint {\r\n    list-style-type: none;\r\n    text-align: center;\r\n    padding: 12px;\r\n    margin: 0;\r\n    white-space: nowrap;\r\n    overflow: auto;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .myPoint  li {\r\n      display: inline-block;\r\n      border-radius: 50%;\r\n      border: 2px solid rgba(0, 0, 0, 0.55);\r\n      padding: 4px;\r\n      margin: 0 3px;\r\n      transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\r\n      transition: 0.4s;\r\n  }\r\n  \r\n  .myPoint  li.active {\r\n        background: #ff0000;\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2);\r\n      }\r\n  \r\n  .carouselHoved {\r\n    opacity: 0.4;\r\n  }\r\n  \r\n  .myBannerPoint {\r\n    position: absolute;\r\n    display: flex;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    padding: 0;\r\n    color: beige;\r\n    justify-content: center;\r\n    list-style-type: none;\r\n    background: rgba(0, 0, 0, 0.34);\r\n    margin: 0;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .myBannerPoint li {\r\n      background: #6b6b6b;\r\n      width: 50px;\r\n      height: 50px;\r\n      margin-right: 10px;\r\n  }\r\n  \r\n  .myBannerPoint li.active {\r\n        -webkit-transform: translateY(-10px);\r\n                transform: translateY(-10px);\r\n        transition: .3s ease all;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9tYWluLXBhZ2UvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlDQUFpQztFQUNuQzs7RUFLQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixXQUFXO0lBQ1gsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdEQUFnRDtJQUNoRCxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixRQUFRO0VBQ1Y7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxzQkFBc0I7RUFDeEI7O0VBQ0E7TUFDSSxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHFDQUFxQztNQUNyQyxZQUFZO01BQ1osYUFBYTtNQUNiLGdFQUFnRTtNQUNoRSxnQkFBZ0I7RUFDcEI7O0VBQ0E7UUFDTSxtQkFBbUI7UUFDbkIsNkJBQXFCO2dCQUFyQixxQkFBcUI7TUFDdkI7O0VBRUo7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFHbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBQ0E7TUFDSSxtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7RUFDdEI7O0VBQ0E7UUFDTSxvQ0FBNEI7Z0JBQTVCLDRCQUE0QjtRQUM1Qix3QkFBd0I7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L21haW4tcGFnZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lclN0eWxlIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYmFubmVyU3R5bGUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYmFubmVyU3R5bGUgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50aWxlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLndCZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBuYXYge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTI7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2FyQnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sZWZ0UnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZjAwMDA7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggLTFweCAjZmYwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICAucmlnaHRScyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmMDAwMDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAtMXB4ICNmZjAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAubXlQb2ludCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLm15UG9pbnQgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NSk7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3LCAwLjY3LCAwLjgzLCAwLjY3KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICB9XHJcbiAgLm15UG9pbnQgIGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgIH1cclxuICBcclxuICAuY2Fyb3VzZWxIb3ZlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5teUJhbm5lclBvaW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiBiZWlnZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM0KTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAubXlCYW5uZXJQb2ludCBsaSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2YjZiNmI7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLm15QmFubmVyUG9pbnQgbGkuYWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/content/main-page/carousel/carousel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/content/main-page/carousel/carousel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n<ngu-carousel #myCarousel [inputs]=\"carouselTileConfig\" [dataSource]=\"carouselTileItems$ | async\">\r\n        <ngu-tile *nguCarouselDef=\"let item; let i = index; let ani = animate\"> \r\n            <!-- [@slider]=\"ani\" PLease this animation to this tile to see animation. \r\n                stackblitz have error with animations -->\r\n          <div class=\"tile\" [style.background]=\"'url('+item+')'\">\r\n          </div>\r\n        </ngu-tile>\r\n      \r\n        <button NguCarouselPrev class=\"leftRs\" [style.opacity]=\"myCarousel.isFirst ? 0.5:1\">&lt;</button>\r\n        <button NguCarouselNext class=\"rightRs\" [style.opacity]=\"myCarousel.isLast ? 0.5:1\">&gt;</button>\r\n      \r\n        <ul class=\"myPoint\" NguCarouselPoint>\r\n          <li *ngFor=\"let i of myCarousel.pointNumbers; let i = index\" \r\n          [class.active]=\"i==myCarousel.activePoint\" (click)=\"myCarousel.moveTo(i)\"></li>\r\n        </ul>\r\n      </ngu-carousel></mat-card>\r\n"

/***/ }),

/***/ "./src/app/content/main-page/carousel/carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/main-page/carousel/carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _carousel_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel.animation */ "./src/app/content/main-page/carousel/carousel.animation.ts");





var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(cdr) {
        this.cdr = cdr;
        this.imgags = [
            'assets/bg.jpg',
            'assets/car.png',
            'assets/canberra.jpg',
            'assets/holi.jpg'
        ];
        this.carouselTileConfig = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            speed: 250,
            point: {
                visible: true
            },
            touch: true,
            loop: true,
            interval: { timing: 3000 },
            animation: 'lazy'
        };
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tempData = [];
        this.carouselTileItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(-1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(4), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) {
            var data = (_this.tempData = _this.tempData.concat([
                _this.imgags[Math.floor(Math.random() * _this.imgags.length)]
            ]));
            return data;
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CarouselComponent.prototype, "name", void 0);
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/content/main-page/carousel/carousel.component.html"),
            animations: [_carousel_animation__WEBPACK_IMPORTED_MODULE_4__["slider"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/content/main-page/carousel/carousel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/content/main-page/main-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content/main-page/main-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n    }\r\n    .text{\r\n        max-width: 1400px;\r\n        margin-left: auto;\r\n        margin-right: auto\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakI7SUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/content/main-page/main-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/content/main-page/main-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n    <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"2:2\" (window:resize)=\"onResize($event)\" gutterSize=\"10\">\r\n        <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" matRipple>\r\n            <a href=\"#\" routerLink={{tile.route}} routerLinkActive=\"active\">\r\n                <img src={{tile.picUrl}} alt={{tile.alt}} height=\"600\" width=\"1910\"></a>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n</mat-card>\r\n<mat-card>\r\n    <router-outlet></router-outlet>\r\n    <div class=\"text\">\r\n        <h1>ТЕПЛЫЙ ПОЛ ПОД ПЛИТКУ И ЛАМИНАТ ПО ДОСТУПНОЙ ЦЕНЕ</h1>\r\n\r\n        <div class=\"content clearfix\">\r\n            <p>Если вы не знаете, где приобрести <strong>теплый пол в Минске</strong>,\r\n                то наш\r\n                магазин поможет вам в этом. Уже более шести лет мы занимается продажей электрических теплых полов\r\n                для любых\r\n                помещений.</p>\r\n            <p>Ассортиментный ряд товаров постоянно меняется и пополняется. Мы стараемся учесть все\r\n                пожелания и\r\n                предпочтения покупателей, предоставив им высококачественную продукцию, которая ответит всем\r\n                требованиям.\r\n                Тщательный отбор товаров - это еще одна возможность приятно удивить клиентов. Высокие стандарты\r\n                качества и\r\n                оптимальные цены на наш пол позволяют каждому покупателю приобрести наш пол в свой офис или дом.\r\n                Ежедневно\r\n                производители радуют новинками, которые незамедлительно появляются на нашем сайте.</p>\r\n            <p>Укладка электрического пола возможна под несколько видов напольных\r\n                покрытий,\r\n                таких как плитка или керамогранит. В обоих случаях поверхность напольного покрытия будет радовать\r\n                теплом даже в\r\n                самое холодное время года. Его поверхность быстро прогревается благодаря использованию специальных\r\n                нагревательных\r\n                матов. Монтировка нагревательного термомата отличается простотой и не займет много времени:\r\n                раскатав термомат\r\n                по\r\n                поверхности пола и подключив его к разъемам в терморегуляторе, вы полностью закончите монтировку\r\n                теплого пола\r\n                под\r\n                плитку или керамогранит.</p>\r\n            <p><em>Теплый пол под ламинат</em>нередко устанавливается под\r\n                паркетную\r\n                доску. Подобному сочетанию отдают свое предпочтение всё больше и больше людей, которые привыкли к\r\n                максимальному\r\n                комфорту. В первом случае для обеспечения дополнительного отопления применяет нагревательная\r\n                пленка, а во\r\n                втором\r\n                нередко применяется основа из дерева. По завершению монтажа, теплый пол готов к эксплуатации .</p>\r\n                <mat-divider></mat-divider>\r\n\r\n                <h1>Теплый пол в Минске по доступной цене.</h1>\r\n                <p>Такая установка прослужит долгие годы, если монтаж был осуществлен\r\n                    профессионально, в соответствии со всеми правилами и предписаниями. <em>Теплый пол</em> – это еще\r\n                    один\r\n                    замечательный способ обеспечить комфортные условия жизни, создать бесценную атмосферу домашнего\r\n                    уюта и\r\n                    чувствовать ее даже в самые морозные дни. У нас в контактах вы найдете\r\n                    телефоны по которым\r\n                    можно связаться и проконсультироваться что\r\n                    бы\r\n                    можно было приобрести<strong>теплый пол под ламинат</strong>.<em>Теплый пол\r\n                        электрический отзывы</em>\r\n                    о нем вы может прочитать в нашем каталоге.\r\n                </p>\r\n        </div>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/content/main-page/main-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content/main-page/main-page.component.ts ***!
  \**********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
        this.tiles = [
            {
                route: '#',
                picUrl: 'assets/images/gridPics/grid-1-web.jpg',
                cols: 4,
                rows: 2,
                alt: 'Теплые полы в Минске'
            },
            {
                route: '/warmehaus/mat-160W',
                picUrl: 'assets/images/gridPics/Нагревательный_Мат_160Вт.png',
                cols: 2,
                rows: 1,
                alt: 'Нагревательный мат 160 Вт'
            },
            {
                route: '/warmehaus/mat-200W',
                picUrl: 'assets/images/gridPics/Нагревательный_Мат_200Вт.png',
                cols: 2,
                rows: 1,
                alt: 'Нагревательный мат 200 Вт'
            },
            {
                route: '/warmehaus/cab-11W-thin',
                picUrl: 'assets/images/gridPics/Нагревательный_Кабель_в_слой_11Вт.png',
                cols: 2,
                rows: 1,
                alt: 'Нагревательный Кабель в слой плиточного клея 11Вт'
            },
            {
                route: '/warmehaus/cab-14W-thin',
                picUrl: 'assets/images/gridPics/Нагревательный_Кабель_в_слой_14Вт.png',
                cols: 2,
                rows: 1,
                alt: 'Нагревательный Кабель в слой плиточного клея 14Вт'
            },
            {
                route: '/warmehaus/cab-20W-uv-protection',
                picUrl: 'assets/images/gridPics/Нагревательный_Кабель_в_стяжку_20Вт.png',
                cols: 2,
                rows: 1,
                alt: 'Нагревательный Кабель в стяжку 20Вт'
            },
            {
                route: '/warmehaus/films',
                picUrl: 'assets/images/gridPics/Инфракрасная_Плёнка.png',
                cols: 2,
                rows: 1,
                alt: 'Инфракрасная пленка'
            },
            {
                route: '/warmehaus/anti-icing',
                picUrl: 'assets/images/gridPics/Системы_антиобледенения.png',
                cols: 2,
                rows: 1,
                alt: 'Системы антиобледенения'
            },
            {
                route: '/warmehaus/termostats',
                picUrl: 'assets/images/gridPics/Терморегуляторы.png',
                cols: 2,
                rows: 1,
                alt: 'Терморегуляторы'
            },
        ];
    }
    MainPageComponent.prototype.ngOnInit = function () {
        if (window.innerWidth >= 416) {
            this.tiles[0].cols = 4;
            this.tiles[0].rows = 2;
        }
        else {
            this.tiles[0].cols = 2;
            this.tiles[0].rows = 1;
        }
        this.breakpoint = (window.innerWidth <= 416) ? 2 : 4;
    };
    MainPageComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 416) ? 2 : 4;
        if (event.target.innerWidth <= 416) {
            this.tiles[0].cols = 2;
            this.tiles[0].rows = 1;
        }
        else {
            this.tiles[0].cols = 4;
            this.tiles[0].rows = 2;
        }
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/content/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/content/main-page/main-page.component.css")]
        })
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/anit-icing/anit-icing.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/content/warmehaus/anit-icing/anit-icing.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 17px;\r\n  width: 100%;\r\n}\r\n\r\ntd,\r\nth {\r\n  width: 40%;\r\n}\r\n\r\n.mat-header-cell {\r\n  font-display: inline;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  cursor: pointer\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  b {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 320px) {\r\n  b {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n/* td:nth-of-type(2){\r\n    font-weight: bold;\r\n  } */\r\n\r\nmat-paginator {\r\n  font-weight: bold;\r\n  color: black\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center\r\n}\r\n\r\n.table,\r\n.filter {\r\n  max-width: 1280px;\r\n  margin-left: auto;\r\n  margin-right: auto\r\n}\r\n\r\n.cards {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.recomind {\r\n  text-decoration: underline;\r\n}\r\n\r\nh2,h3,h4 {\r\n  text-align: center;\r\n}\r\n\r\nmat-divider {\r\n  height: 1px;\r\n  background-color: black\r\n}\r\n\r\n.description {\r\n\r\n  min-width: 80%;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  /* margin-left: 10%; */\r\n}\r\n\r\n.h2small {\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.mat-header-row {\r\n  background-color: rgb(233, 232, 232);\r\n}\r\n\r\nmat-tab-group {\r\n  max-width: 1200px;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.content {\r\n  margin: 30px\r\n}\r\n\r\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\n  color: black;\r\n  background-color: rgb(233, 232, 232);\r\n  font-weight: bold\r\n}\r\n\r\n::ng-deep .mat-ink-bar {\r\n  background-color: var(--primary-color, red) !important;\r\n}\r\n\r\nul {\r\n  max-width: 640px;\r\n}\r\n\r\n.vertTab {\r\n  -webkit-padding-before: 15px;\r\n          padding-block-start: 15px\r\n}\r\n\r\n.upon ul {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.uponTable {\r\n  max-width: 1500px;\r\n  margin-left: auto;\r\n  margin-left: auto\r\n}\r\n\r\n.upper-image {\r\n  max-width: 320px;\r\n  max-height: 320px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-right: 20px\r\n}\r\n\r\n.price-info {\r\n  padding-left: 20px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n.mat-header-row {\r\n  background-color: rgb(233, 232, 232);\r\n}\r\n\r\nmat-tab-group {\r\n  max-width: 1200px;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.content {\r\n  margin: 30px;\r\n}\r\n\r\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\n  color: black;\r\n  background-color: rgb(233, 232, 232);\r\n  font-weight: bold\r\n}\r\n\r\n::ng-deep .mat-ink-bar {\r\n  background-color: var(--primary-color, red) !important;\r\n}\r\n\r\nul {\r\n  max-width: 640px;\r\n}\r\n\r\n.vertTab {\r\n  -webkit-padding-before: 10px;\r\n          padding-block-start: 10px\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  b {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 300px) {\r\n  b {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #f7f6e3;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n  height: 3%;\r\n  cursor: pointer\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n\r\n}\r\n\r\n.examle-element-display {\r\n  height: 0;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\nngx-imageviewer {\r\n  margin-right: 73%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvYW5pdC1pY2luZy9hbml0LWljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBOztFQUVFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7S0FFSzs7QUFDTDtFQUNFLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBYztFQUNkLHlCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQztBQUNGOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQXdCO1VBQXhCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBd0I7VUFBeEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvYW5pdC1pY2luZy9hbml0LWljaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGZvbnQtZGlzcGxheTogaW5saW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBiIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICBiIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIHRkOm50aC1vZi10eXBlKDIpe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSAqL1xyXG5tYXQtcGFnaW5hdG9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2tcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4udGFibGUsXHJcbi5maWx0ZXIge1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0b1xyXG59XHJcblxyXG4uY2FyZHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWNvbWluZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmgyLGgzLGg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG5cclxuICBtaW4td2lkdGg6IDgwJTtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMCU7ICovXHJcbn1cclxuXHJcbi5oMnNtYWxsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMyLCAyMzIpO1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMzBweFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMyLCAyMzIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsIHJlZCkgIWltcG9ydGFudDtcclxufVxyXG5cclxudWwge1xyXG4gIG1heC13aWR0aDogNjQwcHg7XHJcbn1cclxuXHJcbi52ZXJ0VGFiIHtcclxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNXB4XHJcbn1cclxuXHJcbi51cG9uIHVsIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi51cG9uVGFibGUge1xyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbn1cclxuXHJcbi51cHBlci1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBtYXgtaGVpZ2h0OiAzMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogMjBweFxyXG59XHJcblxyXG4ucHJpY2UtaW5mbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMyLCAyMzIpO1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3QgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMiwgMjMyKTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCByZWQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG59XHJcblxyXG4udmVydFRhYiB7XHJcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMTBweFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y2ZTM7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIGhlaWdodDogMyU7XHJcbiAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4uZXhhbWxlLWVsZW1lbnQtZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxubmd4LWltYWdldmlld2VyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDczJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/content/warmehaus/anit-icing/anit-icing.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/warmehaus/anit-icing/anit-icing.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Обогрев труб WÄRMEHAUS AntiFreeze Guard 20W, 30W, 40W</mat-card-title>\r\n  <mat-divider [vertical]=\"true\"></mat-divider>\r\n  <div class=\"uponTable\">\r\n    <img class=\"upper-image\" src=\"assets/images/anti-icing/pipes-warming.jpg\"\r\n      alt=\"Кабель для прогрева труб в зимнее время\" align=\"left\" hspace=\"25\">\r\n    <div class=\"container upon\">\r\n      <ul>\r\n        <li>Готовые к использованию комплекты<strong> WÄRMEHAUS<sup>®</sup> AntiFreeze Guard, </strong>применяются для\r\n          поддержания в незамерзающем состоянии трубопроводов, предупреждения образования сосулек и наледи в желобах на\r\n          кровлях, образования ледяных пробок в канализационных системах- на дачах, в банях и в загородных домах.</li>\r\n        <li>Принцип саморегуляции <strong>WÄRMEHAUS<sup>®</sup> AntiFreeze Guard </strong>достигается благодаря\r\n          специальной высоко технологичной матрице - выделение тепла происходит только там, где это необходимо.</li>\r\n        <li>Саморегулируемый греющий кабель автоматически меняет мощность и выделение тепла на разных участках в\r\n          зависимости от температуры.</li>\r\n        <li>При падении температуры окружающей среды происходит увеличение мощности обогрева, а в случае повышения\r\n          температуры, эффект противоположный - мощность уменьшается.</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n<br>\r\n\r\n<h4><u>Список систем обогрева труб</u></h4>\r\n\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"pipeHeatingDataSource\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> м<sup><small>2</small></sup>/Вт </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15, 24]\"></mat-paginator>\r\n    <p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n\r\n  \r\n    <!-- <mat-divider [vertical]=\"true\"></mat-divider> -->\r\n    <h4 mat-line><u>Список систем антиобледенения</u></h4>\r\n\r\n    <div class=\"filter\">\r\n      <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n      </mat-form-field>\r\n    </div>\r\n<!-- https://github.com/nicky-lenaers/ngx-scroll-to -->\r\n<div #destinationRef></div>\r\n    <div class=\"mat-elevation-z8 table\">\r\n      <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\r\n\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Progress Column -->\r\n\r\n        <ng-container matColumnDef=\"nominal\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Свойство, м<sup><small>2</small></sup>/Вт</th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n          <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Color Column -->\r\n        <ng-container matColumnDef=\"price\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n          <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n        </ng-container>\r\n\r\n        <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n        <div class=\"expander\">\r\n          <ng-container class=\"expanded-elem\" matColumnDef=\"expandedDetail\">\r\n            <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n              <div class=\"example-element-detail\"\r\n                [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n                <div class=\"example-element-diagram\">\r\n\r\n                  <!-- https://www.npmjs.com/package/@hallysonh/ngx-imageviewer -->\r\n                  <ngx-imageviewer [src]=element.picPath></ngx-imageviewer>\r\n                  <div class=\"example-element-description\" [innerHTML]=\"element.description | safeHtml\"></div>\r\n                </div>\r\n              </div>\r\n            </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n          <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\r\n            [class.example-expanded-row]=\"expandedElement === element\"\r\n            (click)=\"expandedElement = expandedElement === element ? null : element\" [ngx-scroll-to]=\"destinationRef\">\r\n          </tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n        </div>\r\n\r\n      </table>\r\n\r\n      <p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n    </div>\r\n\r\n\r\n    <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z8\">\r\n      <mat-tab class=\"tab\" label=\"Описание AntiFreeze Guard 20W\">\r\n        <div class=\"content\">\r\n          <div class=\"vertTab\">\r\n            <ul>\r\n              <p>Саморегулируемый греющий кабель<strong>&nbsp;WÄRMEHAUS<sup>®</sup> AntiFreeze Guard 20W</strong> (тип\r\n                WÄRMEHAUS<sup>®</sup> SELFREG ELSR-N-20-2-AO) - это ленточный электрический нагреватель с параллельными\r\n                проводниками.</p>\r\n              <p>Материал греющей матрицы расположен вокруг двух медных проводников сечением 2х1,23мм2 с покрытием из\r\n                олова.</p>\r\n              <p>Проводящий материал сердцевины увеличивает или уменьшает выработку тепла при изменении температуры.\r\n                <strong>Линейная мощность 20Вт/м при 10С.</strong></p>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Описание AntiFreeze Guard 30W\">\r\n        <div class=\"content\">\r\n          <ul>\r\n            <p>Саморегулируемый греющий кабель<strong>&nbsp;WÄRMEHAUS<sup>®</sup> AntiFreeze Guard 30W</strong> (тип\r\n              WÄRMEHAUS<sup>®</sup> SELFREG ELSR-N-30-2-AO) - это ленточный электрический нагреватель с параллельными\r\n              проводниками.</p>\r\n            <p>Материал греющей матрицы расположен вокруг двух медных проводников сечением 2х1,23мм2 с покрытием из\r\n              олова.\r\n            </p>\r\n            <p>Проводящий материал сердцевины увеличивает или уменьшает выработку тепла при изменении температуры.\r\n              <strong>Линейная мощность 30Вт/м при 10С.</strong></p>\r\n          </ul>\r\n        </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Описание AntiFreeze Guard 40W\">\r\n        <div class=\"content\">\r\n          <ul>\r\n            <p>Саморегулируемый греющий кабель<strong>&nbsp;WÄRMEHAUS<sup>®</sup> AntiFreeze Guard 40W</strong> (тип\r\n              WÄRMEHAUS<sup>®</sup> SELFREG ELSR-N-40-2-AO) - это ленточный электрический нагреватель с параллельными\r\n              проводниками.</p>\r\n            <p>Материал греющей матрицы расположен вокруг двух медных проводников сечением 2х1,23мм2 с покрытием из\r\n              олова.\r\n            </p>\r\n            <p>Проводящий материал сердцевины увеличивает или уменьшает выработку тепла при изменении температуры.\r\n              <strong>Линейная мощность 40Вт/м при 10С.</strong></p>\r\n          </ul>\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n\r\n    <!-- <div class=\"container video\">\r\n    <p>Инструкция по пользованию таблицей терморегуляторов Wärmehaus</p>\r\n    <img src=\"assets/videos/termostat/Instruction.webp\"\r\n      alt=\"Инструкция по пользованию таблицей терморегуляторов Warmehaus\" /> -->\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/content/warmehaus/anit-icing/anit-icing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/warmehaus/anit-icing/anit-icing.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnitIcingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnitIcingComponent", function() { return AnitIcingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_data_anti_icing_pipe_heating_cable_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data/anti-icing/pipe-heating-cable-data */ "./src/data/anti-icing/pipe-heating-cable-data.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "./node_modules/@hallysonh/ngx-imageviewer/fesm5/hallysonh-ngx-imageviewer.js");
/* harmony import */ var src_app_constants_image_view_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/constants/image-view-styles */ "./src/app/constants/image-view-styles.ts");
/* harmony import */ var src_data_anti_icing_anti_icing_systems_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/data/anti-icing/anti-icing-systems-data */ "./src/data/anti-icing/anti-icing-systems-data.ts");








var AnitIcingComponent = /** @class */ (function () {
    function AnitIcingComponent() {
        this.displayedColumns = ['name', 'nominal', 'price'];
        this.pipeHeatingDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](src_data_anti_icing_pipe_heating_cable_data__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_DATA_PIPE_HEATING_CABLE"]);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](src_data_anti_icing_anti_icing_systems_data__WEBPACK_IMPORTED_MODULE_7__["ELEMENT_ANTI_ICING_SYSTEMS_DATA"]);
        this.columnsToDisplay = ['name', 'nominal', 'price'];
        this.headerNames = ['Тип', 'м2/Вт', 'Цена'];
    }
    AnitIcingComponent.prototype.ngOnInit = function () {
        this.pipeHeatingDataSource.sort = this.sort;
        this.pipeHeatingDataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AnitIcingComponent.prototype.applyFilter = function (filterValue) {
        this.pipeHeatingDataSource.filter = filterValue.trim().toLowerCase();
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AnitIcingComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AnitIcingComponent.prototype, "paginator", void 0);
    AnitIcingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anit-icing',
            template: __webpack_require__(/*! ./anit-icing.component.html */ "./src/app/content/warmehaus/anit-icing/anit-icing.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            providers: [
                {
                    provide: _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_5__["IMAGEVIEWER_CONFIG"],
                    useValue: src_app_constants_image_view_styles__WEBPACK_IMPORTED_MODULE_6__["MY_IMAGEVIEWER_CONFIG"]
                }
            ],
            styles: [__webpack_require__(/*! ./anit-icing.component.css */ "./src/app/content/warmehaus/anit-icing/anit-icing.component.css")]
        })
    ], AnitIcingComponent);
    return AnitIcingComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 17px;\r\n  width: 100%;\r\n}\r\ntd, th {\r\n  width: 40%;\r\n}\r\n.mat-header-cell{\r\n    font-display: inline;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    text-align: center\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  b {\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  b {\r\n    font-size: 10px;\r\n  }\r\n}\r\n/* td:nth-of-type(2){\r\n  font-weight: bold;\r\n} */\r\nmat-paginator{\r\n    font-weight: bold;\r\n    color: black\r\n}\r\nmat-card-title{\r\n    text-align: center\r\n}\r\n.table, .filter{\r\n  max-width:1280px;\r\n  margin-left: auto;\r\n  margin-right: auto\r\n}\r\n.cards{\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n.recomind{\r\n  text-decoration: underline;\r\n}\r\nh2{\r\n  text-align: center;\r\n}\r\nmat-divider{\r\n  height: 1px;\r\n  background-color: black\r\n}\r\n.description{\r\n  \r\nmin-width: 80%;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\n/* margin-left: 10%; */\r\n}\r\n.h2small{\r\nfont-weight: bold;\r\n\r\n}\r\n.mat-header-row{\r\nbackground-color: rgb(233, 232, 232);\r\n}\r\nmat-tab-group{\r\nmax-width: 1200px;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\nmargin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.content{\r\nmargin: 30px\r\n}\r\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\ncolor:black;\r\nbackground-color:rgb(233, 232, 232);\r\nfont-weight: bold\r\n}\r\n::ng-deep .mat-ink-bar {\r\nbackground-color: var(--primary-color,red) !important;\r\n}\r\nul{\r\nmax-width: 640px;\r\n}\r\n.vertTab{\r\n-webkit-padding-before: 15px;\r\n        padding-block-start: 15px\r\n}\r\n.upon ul{\r\nmargin-left: auto;\r\nmargin-right: auto;\r\n}\r\n.uponTable{\r\nmax-width: 1500px;\r\nmargin-left: auto;\r\nmargin-left: auto\r\n}\r\n.upper-image{\r\n  max-width: 320px;\r\n  max-height: 320px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-right: 20px\r\n  }\r\n.price-info{\r\n    padding-left: 20px;\r\n    padding-bottom: 15px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvY2FiMTEtdy10aGluL2NhYjExLXctdGhpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZjtBQUNKO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTs7R0FFRztBQUNIO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakI7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWDtBQUNGO0FBQ0E7O0FBRUEsY0FBYztBQUNkLHlCQUFzQjtRQUF0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix5QkFBc0I7UUFBdEIsc0JBQXNCO0FBQ3RCLGlCQUFpQjtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLG1DQUFtQztBQUNuQztBQUNBO0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsNEJBQXdCO1FBQXhCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCO0VBQ0E7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvY2FiMTEtdy10aGluL2NhYjExLXctdGhpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGZvbnQtZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi8qIHRkOm50aC1vZi10eXBlKDIpe1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59ICovXHJcbm1hdC1wYWdpbmF0b3J7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcbm1hdC1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnRhYmxlLCAuZmlsdGVye1xyXG4gIG1heC13aWR0aDoxMjgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbn1cclxuLmNhcmRze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnJlY29taW5ke1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbmgye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtZGl2aWRlcntcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuICBcclxubWluLXdpZHRoOiA4MCU7XHJcbm1hcmdpbi1ibG9jay1zdGFydDogMiU7XHJcbi8qIG1hcmdpbi1sZWZ0OiAxMCU7ICovXHJcbn1cclxuLmgyc21hbGx7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4ubWF0LWhlYWRlci1yb3d7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMiwgMjMyKTtcclxufVxyXG5tYXQtdGFiLWdyb3Vwe1xyXG5tYXgtd2lkdGg6IDEyMDBweDtcclxubWFyZ2luLWJsb2NrLXN0YXJ0OiAyJTtcclxubWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb250ZW50e1xyXG5tYXJnaW46IDMwcHhcclxufVxyXG46Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuY29sb3I6YmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6cmdiKDIzMywgMjMyLCAyMzIpO1xyXG5mb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcixyZWQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVse1xyXG5tYXgtd2lkdGg6IDY0MHB4O1xyXG59XHJcbi52ZXJ0VGFie1xyXG5wYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNXB4XHJcbn1cclxuLnVwb24gdWx7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnVwb25UYWJsZXtcclxubWF4LXdpZHRoOiAxNTAwcHg7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5tYXJnaW4tbGVmdDogYXV0b1xyXG59XHJcbi51cHBlci1pbWFnZXtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4XHJcbiAgfVxyXG4gIC5wcmljZS1pbmZve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHhcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Кабель двужильный CAB 11W THIN</mat-card-title>\r\n\r\n  <mat-divider></mat-divider>\r\n  <div class=\"uponTable\">\r\n    <img class=\"upper-image\" src=\"assets/images/WARMEHAUS CAB 11W 2 s 400 1(1).jpg\" alt=\"Кабель 11 Ватт под плитку\"\r\n     align=\"left\"\r\n     hspace=\"25\">\r\n    <div class=\"container upon\">\r\n      <ul>\r\n        <li>\r\n          WÄRMEHAUS® MAT 200W/m<sup><small>2</small></sup> Германия - готовая к применению нагревательная система\r\n          ТЕПЛЫЙ\r\n          ПОЛ повышенной мощности под керамическую плитку, ламинат, линолеум.\r\n        </li>\r\n        <li>\r\n          Применяется для внутренней установки.\r\n        </li>\r\n        <li>\r\n          Рекомендован в : ВАННЫЕ КОМНАТЫ, САНУЗЛЫ, УТЕПЛЕННЫЕ ЛОДЖИИ И Т.Д. ; ОСНОВНОЙ ОБОГРЕВ * (См. Таб.№1)\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"dataSource1\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> м<sup><small>2</small></sup>/Вт </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\r\n<p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n\r\n\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z8\">\r\n    <mat-tab class=\"tab\" label=\"Описание\">\r\n      <div class=\"content\">\r\n\r\n        <div class=\"vertTab\"></div>\r\n        <p>\r\n          WÄRMEHAUS® MAT 200W/m<sup><small>2</small></sup> Германия - армированный экранированный двужильный\r\n          нагревательный\r\n          мат толщиной 3,0мм.\r\n          Применяется на том этапе строительства, когда стяжка полов уже сделана. Укладывается в слой клея (не более\r\n          10мм)\r\n          или тонкий слой самовыравнивающегося раствора непосредственно под финишное покрытие пола, без стяжки.\r\n        </p>\r\n        <p>\r\n          Предназначен для установки в ремонтируемых и \"тонких\" полах непосредственно под покрытие пола без\r\n          формирования\r\n          толстой цементной стяжки и устанавливается в основном под плитку в плиточный клей.\r\n\r\n          Высокая удельная мощность 200Вт/м2 позволяет не только достичь комфортной 24...26С˚ температуры пола даже в\r\n          межсезонье, но и проектировать системы отопления для основного обогрева.\r\n\r\n          Сплошной экран из алюминиевой фольги, луженая медная шина заземления и двужильная конструкция кабеля\r\n          полностью\r\n          защищают от ЭМ излучения.\r\n        </p>\r\n        <p>\r\n          *Рекомендовано для комфортного подогрева поверхности в помещениях с повышенной влажностью, санузлах, ванных\r\n          комнатах или основного обогрева жилых помещений.\r\n        </p>\r\n        <p>\r\n          *Допускается использование в помещениях с повышенными теплопотерями, например в хорошо утепленных лоджиях и\r\n          верандах в качестве основного обогрева.\r\n        </p>\r\n        <p>\r\n          Идеальное решение** для комфортного/дополнительного обогрева поверхности в помещениях с повышенной влажностью\r\n          или\r\n          основного обогрева жилых помещений.\r\n        </p>\r\n        <p>\r\n          **- монтаж кабеля в слой плиточного клея не более 1см. Гарантия 20лет.\r\n        </p>\r\n        <img src=\"assets/images/WarmehausTABs800.jpg\" alt=\"Таблица укладки теплых полов\">\r\n        <p>\r\n          Мат изготовлен на основе резистивного нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          WÄRMEHAUS® MAT 200W/m2 - тонкий двужильный нагревательный мат на сетке, с шагом кабеля 7см и диаметром 3мм.\r\n\r\n          Армированный, экранированный, двужильный нагревательный кабель на сетке с двойной изоляцией, с холодным\r\n          проводом\r\n          длиной 3,5м, с герметичными армированной переходной и концевой муфтами.\r\n\r\n          Укладывается в слой клея или тонкий слой самовыравнивающегося раствора непосредственно под финишное покрытие\r\n          пола.\r\n        </p>\r\n        <p>\r\n          В основе работы резистивного нагревательного кабеля лежит свойство проводника с повышенным сопротивлением\r\n          выделять тепло. Количество выделяемого тепла зависит от сопротивления. В конструкции кабеля применена\r\n          прогрессивная технология с двумя нагревательными жилами, т.е. без возвратного токопроводящего проводника. Что\r\n          способствует равномерному прогреву кабеля, позволяет уменьшить диаметр кабеля на мате до 3мм и увеличить срок\r\n          службы системы. Нагревательным элементом служат сами токопроводящие жилы, изготовленные из металлического\r\n          сплава\r\n          и покрытые стойкой к высоким температурам изоляцией.\r\n        </p>\r\n        <p>\r\n          Важнейшим фактором, влияющим на качество и долговечность нагревательных систем являются характеристики\r\n          нагревательных элементов. Производителем нагревательных элементов для WÄRMEHAUS® MAT является VOKA\r\n          Vogtländisches\r\n          Kabelwerk GmbH Германия - предприятие концерна WILMS GRUPPE.\r\n        </p>\r\n        <p>\r\n          Нагревательные маты WÄRMEHAUS® MAT 200W/m2 являются полностью готовыми к использованию нагревательными\r\n          системами.\r\n          Разработаны инженерами WÄRMEHAUS GmbH и производятся в соответствии с европейскими нормами EN 60335-1, EN\r\n          60335-2, IEC 60800, а также в соответствии со стандартом по системам менеджмента качества ISO 9001 и\r\n          стандартом\r\n          по системам экологического менеджмента ISO 14001 на предприятиях концерна WILMS GRUPPE в Германии и Чехии.\r\n          Секции\r\n          WÄRMEHAUS® MAT 200W/m2 состоят из двужильного нагревательного кабеля закрепленного на стекловолоконной сетке\r\n          с\r\n          уникальной армированной проходной и оконечной муфтами, оканчивающегося \" холодным\" концом длинной 3,5м.\r\n        </p>\r\n        <p>\r\n          Линейка нагревательных матов WÄRMEHAUS® MAT 200W/m2 представлена в 15 типоразмерах, имеет ширину 50см и\r\n          различную\r\n          длину в зависимости от необходимой площади обогрева. Кабель предназначен для установки без формирования\r\n          толстой\r\n          цементной стяжки под любое напольное покрытие с удельным тепловым сопротивлением не более 0,10W/m2. Один\r\n          соединительный \"холодный\" провод упрощает и ускоряет монтаж.\r\n        </p>\r\n        <p>\r\n          Изготавливается как нагревательный мат с двужильным экранированным нагревательным кабелем толщиной 3 мм.\r\n          Кабель\r\n          имеет внутреннюю изоляцию из фторополимера (тефлона) и наружную изоляцию из синтетического полиолефина LSZH.\r\n          Кабель закреплен на сетке из стекловолокна и имеет один холодный соединительный провод длиной 3.5 м.\r\n          Герметичные\r\n          армированные переходная и концевая муфты.\r\n        </p>\r\n        <p>\r\n          В комплект поставки входит нагревательный мат, упаковка, инструкция по установке и эксплуатации -\r\n          включительно на\r\n          русском языке, гарантийный талон, гофротрубка ø18мм длинной 2м для установки термодатчика , специальная\r\n          заглушка\r\n          для гофротрубки, монтажная коробка.\r\n        </p>\r\n        <p>\r\n          WÄRMEHAUS® MAT 200W/m2 - тонкий двужильный нагревательный мат непосредственно под финишное покрытие пола,\r\n          например керамическую плитку.\r\n\r\n          Преимуществом данной системы является простота монтажа. Идеально для обогрева стандартных квадратных и\r\n          прямоугольных площадей. С помощью WÄRMEHAUS® MAT 200W/m2 возможно решать практически любые задачи по\r\n          комфортному/дополнительному/основному обогреву любых помещений.\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Строение кабеля\">\r\n      <div class=\"content\">\r\n        <h2>Строение нагревательного кабеля WÄRMEHAUS<sup><small class=\"h2small\">®</small></sup> CAB 11W Thin:</h2>\r\n\r\n        <img src=\"assets/images/warmehauscab14wlogosc.jpg\" alt=\"Теплый пол кабель в разрезе\" align=\"left\"\r\n          hspace=\"10\">\r\n        <p>\r\n          1. Две нагревательные жилы обеспечивают отсутствие магнитных полей, а в совокупности заземляющем проводником\r\n          позволяют существенно уменьшить диаметр кабеля до 3,0мм.\r\n        </p>\r\n        <p>\r\n          2. Внутренняя изоляция нагревательных жил выполнена из фторополимера (тефлона), наиболее долговечного и\r\n          стойкого\r\n          к высоким температурам материала изоляции нагревательных элементов.\r\n        </p>\r\n        <p>\r\n          3. Электрическую безопасность греющего кабеля обеспечивает луженый медный проводник сечением 0,80мм2.\r\n        </p>\r\n        <p>\r\n          4. Сплошной экран из алюминиевой фольги с PET защитой придает кабелю дополнительную прочность, герметичность,\r\n          равномерно распределяет тепловую энергию по всей длине нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          5. Внешняя оболочка кабеля WÄRMEHAUS® MAT 200W/m2 выполнена из термоустойчивого ПВХ стойкого к высоким, до\r\n          105˚С,\r\n          температурам материала изоляции толщиной 0,45мм.\r\n        </p>\r\n        <p>\r\n          Греющий кабель соединен с холодным концом уникальной армированной муфтой, что добавляет и без того надежной\r\n          системе дополнительную прочность.\r\n\r\n          Нагревательный кабель WÄRMEHAUS® CAB 11W Thin абсолютно герметичен, степень защиты - IP 67.\r\n\r\n          Нагревательные системы WÄRMEHAUS® CAB 11W Thin славятся своими качеством, надежностью и безопасностью!\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Рекомендовано\">\r\n      <div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Гостиная, спальня, кухня</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-58461f24b6d929d5841c8a16ab82d52a951e73a3dbf95676e0e4d895f8d1803f_8ee06f63.jpg\"\r\n              alt=\"Теплые полы для спален и гостиных\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Коридор, прихожая 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Кухня, гостиная 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              В комнатах с напольным покрытием из плитки температура пола всегда значительно холоднее и ходить там\r\n              босиком\r\n              не доставляет никакого удовольствия, особенно, осенью и зимой. Пол с подогревом легко устраняет этот\r\n              недостаток и привносит в помещение необходимый комфорт и уют.\r\n            </p>\r\n            <p>\r\n              В семьях с детьми вполне типична ситуация, когда ребенок играет, сидя или лежа на полу. Родители не\r\n              всегда\r\n              успевают проконтролировать этот момент и в будущем у малыша могут проявиться опасные заболевания от\r\n              постоянного нахождения на бетонной поверхности, пусть даже застеленной линолеумом или ковровым покрытием.\r\n              Если в квартире установлен теплый пол, маме с папой больше не придется переживать о здоровье своего чада\r\n              и\r\n              опасаться простуд, сквозняков и прочих неприятных моментов.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Ванная, туалет</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-b0ac4459aae2e5f89c95f70053cf2086728187915d1445b66000b08e0a9ca419_55c265cb.jpg\"\r\n              alt=\"Теплые полы для туалета и ванной комнаты\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Ванная комната 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Туалет 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Теплый пол можно подобрать практически под любой вид популярных сегодня напольных покрытий. Во всех\r\n              офисах\r\n              и\r\n              торговых точках, специализирующихся на продаже греющего оборудования, менеджеры всегда дадут\r\n              квалифицированную консультацию относительно вопроса, какую систему лучше поставить под ламинат, паркет,\r\n              плитку, ковролин или линолеум.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Балкон, лоджия</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-bf3618212e827c0d33296e6560fb52d9e3754f7344a84131c268ace6bdaf5377_78955d1b — копия.jpg\"\r\n              alt=\"Теплые полы для утепленных и неутепленных балконов и лоджий\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Утепленый 200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Неутепленый 220-250/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Почти во всех многоквартирных домах на балконах и лоджиях не предусмотрено центральное отопление. В\r\n              результате эти помещения впитывают с улицы излишнюю сырость, таким образом ухудшая микроклимат во\r\n              внутренних\r\n              жилых помещениях. Нейтрализовать этот момент поможет только система теплый пол, полноценно\r\n              функционирующая\r\n              зимой и удобно отключающаяся на летний период времени.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.ts ***!
  \**************************************************************************/
/*! exports provided: Cab11WThinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cab11WThinComponent", function() { return Cab11WThinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_data_cab_11w_thin_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data/cab-11w-thin-data */ "./src/data/cab-11w-thin-data.ts");




var Cab11WThinComponent = /** @class */ (function () {
    function Cab11WThinComponent() {
        this.displayedColumns = ['name', 'nominal', 'price'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](src_data_cab_11w_thin_data__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_DATA_MAT_CAB_11W_THIN"]);
    }
    Cab11WThinComponent.prototype.ngOnInit = function () {
        this.dataSource1.sort = this.sort;
        this.dataSource1.paginator = this.paginator;
    };
    Cab11WThinComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], Cab11WThinComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], Cab11WThinComponent.prototype, "paginator", void 0);
    Cab11WThinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cab11-w-thin',
            template: __webpack_require__(/*! ./cab11-w-thin.component.html */ "./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.html"),
            styles: [__webpack_require__(/*! ./cab11-w-thin.component.css */ "./src/app/content/warmehaus/cab11-w-thin/cab11-w-thin.component.css")]
        })
    ], Cab11WThinComponent);
    return Cab11WThinComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 17px;\r\n  width: 100%;\r\n}\r\ntd, th {\r\n  width: 40%;\r\n}\r\n.mat-header-cell{\r\n    font-display: inline;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    cursor: pointer\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  b {\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  b {\r\n    font-size: 10px;\r\n  }\r\n}\r\n/* td:nth-of-type(2){\r\n  font-weight: bold;\r\n} */\r\nmat-paginator{\r\n    font-weight: bold;\r\n    color: black\r\n}\r\nmat-card-title{\r\n    text-align: center\r\n}\r\n.table, .filter{\r\n  max-width:1280px;\r\n  margin-left: auto;\r\n  margin-right: auto\r\n}\r\n.cards{\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n.recomind{\r\n  text-decoration: underline;\r\n}\r\nh2{\r\n  text-align: center;\r\n}\r\nmat-divider{\r\n  height: 1px;\r\n  background-color: black\r\n}\r\n.description{\r\n  \r\nmin-width: 80%;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\n/* margin-left: 10%; */\r\n}\r\n.h2small{\r\nfont-weight: bold;\r\n\r\n}\r\n.mat-header-row{\r\nbackground-color: rgb(233, 232, 232);\r\n}\r\nmat-tab-group{\r\nmax-width: 1200px;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\nmargin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.content{\r\nmargin: 30px\r\n}\r\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\ncolor:black;\r\nbackground-color:rgb(233, 232, 232);\r\nfont-weight: bold\r\n}\r\n::ng-deep .mat-ink-bar {\r\nbackground-color: var(--primary-color,red) !important;\r\n}\r\nul{\r\nmax-width: 640px;\r\n}\r\n.vertTab{\r\n-webkit-padding-before: 15px;\r\n        padding-block-start: 15px\r\n}\r\n.upon ul{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.uponTable{\r\nmax-width: 1500px;\r\nmargin-left: auto;\r\nmargin-left: auto\r\n}\r\n.upper-image{\r\n  max-width: 320px;\r\n  max-height: 320px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\npadding-right: 20px\r\n  }\r\n.price-info{\r\n    padding-left: 20px;\r\n    padding-bottom: 15px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvY2FiMTQtdy10aGluL2NhYjE0LXctdGhpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTs7R0FFRztBQUNIO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO0FBQ0o7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakI7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWDtBQUNGO0FBQ0E7O0FBRUEsY0FBYztBQUNkLHlCQUFzQjtRQUF0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQix5QkFBc0I7UUFBdEIsc0JBQXNCO0FBQ3RCLGlCQUFpQjtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLG1DQUFtQztBQUNuQztBQUNBO0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsNEJBQXdCO1FBQXhCO0FBQ0E7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0VBQ0U7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvY2FiMTQtdy10aGluL2NhYjE0LXctdGhpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGZvbnQtZGlzcGxheTogaW5saW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi8qIHRkOm50aC1vZi10eXBlKDIpe1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59ICovXHJcbm1hdC1wYWdpbmF0b3J7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFja1xyXG59XHJcbm1hdC1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnRhYmxlLCAuZmlsdGVye1xyXG4gIG1heC13aWR0aDoxMjgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbn1cclxuLmNhcmRze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnJlY29taW5ke1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbmgye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtZGl2aWRlcntcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuICBcclxubWluLXdpZHRoOiA4MCU7XHJcbm1hcmdpbi1ibG9jay1zdGFydDogMiU7XHJcbi8qIG1hcmdpbi1sZWZ0OiAxMCU7ICovXHJcbn1cclxuLmgyc21hbGx7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG4ubWF0LWhlYWRlci1yb3d7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMiwgMjMyKTtcclxufVxyXG5tYXQtdGFiLWdyb3Vwe1xyXG5tYXgtd2lkdGg6IDEyMDBweDtcclxubWFyZ2luLWJsb2NrLXN0YXJ0OiAyJTtcclxubWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb250ZW50e1xyXG5tYXJnaW46IDMwcHhcclxufVxyXG46Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuY29sb3I6YmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6cmdiKDIzMywgMjMyLCAyMzIpO1xyXG5mb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcixyZWQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVse1xyXG5tYXgtd2lkdGg6IDY0MHB4O1xyXG59XHJcbi52ZXJ0VGFie1xyXG5wYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNXB4XHJcbn1cclxuLnVwb24gdWx7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi51cG9uVGFibGV7XHJcbm1heC13aWR0aDogMTUwMHB4O1xyXG5tYXJnaW4tbGVmdDogYXV0bztcclxubWFyZ2luLWxlZnQ6IGF1dG9cclxufVxyXG4udXBwZXItaW1hZ2V7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxuICBtYXgtaGVpZ2h0OiAzMjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbnBhZGRpbmctcmlnaHQ6IDIwcHhcclxuICB9XHJcbiAgLnByaWNlLWluZm97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Кабель двужильный CAB 14W THIN</mat-card-title>\r\n\r\n  <mat-divider></mat-divider>\r\n  <div class=\"uponTable\">\r\n    <img class=\"upper-image\" src=\"assets/images/WARMEHAUS CAB 14W 2 s 400 1(1).jpg\" alt=\"Кабель 14 Ватт в пол\" align=\"left\"\r\n      hspace=\"25\">\r\n    <div class=\"container upon\">\r\n      <ul>\r\n        <li>\r\n          WÄRMEHAUS <sup><small>®</small></sup> CAB 14W Thin Германия - готовая к применению нагревательная система\r\n          ТЕПЛЫЙ ПОЛ под керамическую\r\n          плитку, ламинат, паркетную доску, линолеум или система для обогрева труб.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"dataSource1\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> м<sup><small>2</small></sup>/Вт </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\r\n<p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n\r\n\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z8\">\r\n    <mat-tab class=\"tab\" label=\"Описание\">\r\n      <div class=\"content\">\r\n        \r\n        <div class=\"vertTab\"></div>\r\n        <p>\r\n          Разработан для основного отопления любых помещений, в т.ч. жилых, включая БАНИ, ЛОДЖИИ, ВЕРАНДЫ и т.д.\r\n        </p>\r\n        <p>\r\n          Рекомендован в : ВАННЫЕ КОМНАТЫ, САНУЗЛЫ, УТЕПЛЕННЫЕ ЛОДЖИИ И Т.Д. МОНТАЖ В СЛОЙ ПЛИТОЧНОГО КЛЕЯ, БЕЗ СТЯЖКИ\r\n          (допускается монтаж в неглубокую стяжку, до 20мм).\r\n        </p>\r\n        <p>\r\n          Применяется для внутренней установки.\r\n        </p>\r\n        <p>\r\n          WÄRMEHAUS <sup><small>®</small></sup> CAB 14W Thin Германия - армированный экранированный двужильный\r\n          нагревательный резистивный кабель диаметром 3,0мм, линейной мощностью 14Вт/м.\r\n        </p>\r\n        <p>\r\n          Применяется на том этапе строительства, когда стяжка полов уже сделана. Укладывается в слой клея (не более\r\n          20мм)\r\n          или тонкий слой самовыравнивающегося раствора непосредственно под финишное покрытие пола, без стяжки.\r\n        </p>\r\n        <p>\r\n          Предназначен для установки в ремонтируемых и \"тонких\" полах непосредственно под покрытие пола без\r\n          формирования\r\n          толстой цементной стяжки и устанавливается, в основном, под плитку в плиточный клей.\r\n        </p>\r\n        Допускается монтаж в узкую неглубокую 8х20мм штрабу, при условии отсутствия вокруг кабеля воздушных карманов\r\n        после\r\n        заливки штрабы.\r\n        <p>\r\n          Линейная мощность 14Вт/м позволяет достичь равномерного прогрева пола при монтаже в слой плиточного клея, при\r\n          шаге укладки до 9см.\r\n        </p>\r\n        <p>\r\n          Применяется в т.ч. для систем антипромерзания (при 100W/m2, шаг укладки 14см). Например в морозильных\r\n          камерах.\r\n\r\n          Также применяется для систем антизамерзания водопроводных труб в помещениях. Не имеет специальной защиты от\r\n          УФ\r\n          лучей.\r\n\r\n          Сплошной экран из алюминиевой фольги, медная шина заземления и двужильная конструкция кабеля полностью\r\n          защищают\r\n          от ЭМ излучения.\r\n        </p>\r\n        <p>\r\n          Выбирая ширину шага от 5 до 14см возможно добиться удельной мощности от 280Вт/м2 до 100Вт/м2,что решает любые\r\n          задачи в жилых помещениях, санитарных узлах, лоджиях, банях.\r\n        </p>\r\n        <p>\r\n          Универсальное решение* для комфортного или основного обогрева жилых помещений:\r\n        </p>\r\n        <ul>\r\n          <li>\r\n            Комфортного подогрева поверхности пола (при 150W/m2, шаг укладки 9,0см) - ТЕПЛЫЙ ПОЛ\r\n          </li>\r\n          <li>\r\n            Комфортного подогрева поверхности пола в помещениях с повышенной влажностью, санузлах, ванных комнатах (при\r\n            180W/m2, шаг укладки 7,5...8,0см) - ТЕПЛЫЙ ПОЛ\r\n          </li>\r\n          <li>\r\n            Основного обогрева жилых помещений (при 220W/m2, шаг укладки 6,5см) .\r\n          </li>\r\n          <li>\r\n            Основного обогрева в банях (при 250...280W/m2, шаг укладки 5,0...5,5см) .\r\n          </li>\r\n        </ul>\r\n        <p>\r\n          Допускается использование в утепленных лоджиях и верандах в качестве как дополнительного (при 160W/m2, шаг\r\n          укладки 9,0см) так и основного (при 220W/m2, шаг укладки 6,5см) обогрева.\r\n        </p>\r\n        <p>\r\n          *- монтаж кабеля в слой плиточного клея не более 2см.\r\n        </p>\r\n        <p>\r\n          <b>Гарантия 20лет.</b> \r\n        </p>\r\n        <p>\r\n          Продукция сертифицирована в ТС. ЕАС сертификат № TC RU C-DE.АИ30.А.00674\r\n        </p>\r\n        <p>\r\n         <i>Площадь комфортного обогрева в зависимости от типа помещения здесь:</i> \r\n        </p>\r\n        <p>\r\n          <img src=\"assets/images/WarmehausTABs800.jpg\" alt=\"Таблица укладки теплых полов\">\r\n        </p>\r\n        <p>\r\n          Рекомендуемая удельная мощность и шаг укладки WÄRMEHAUS® CAB 14W Thin для комфорт обогрева в зависимости от\r\n          типа\r\n          помещения:\r\n        </p>\r\n        <p>\r\n          Секция изготовлена на основе резистивного нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          Армированный, экранированный, двужильный нагревательный кабель с двойной изоляцией, с холодным проводом\r\n          длиной\r\n          3,5м, с герметичными армированной переходной и концевой муфтами.\r\n        </p>\r\n        <p>\r\n          В основе работы резистивного нагревательного кабеля лежит свойство проводника с повышенным сопротивлением\r\n          выделять тепло. Количество выделяемого тепла зависит от сопротивления. В конструкции кабеля применена\r\n          прогрессивная технология с двумя нагревательными жилами, т.е. без возвратного токопроводящего проводника. Что\r\n          способствует равномерному прогреву кабеля, позволяет уменьшить диаметр кабеля до 3мм и увеличить срок службы\r\n          системы. Нагревательным элементом служат сами токопроводящие жилы, изготовленные из металлического сплава и\r\n          покрытые стойкой к высоким температурам изоляцией.\r\n        </p>\r\n        <p>\r\n          Важнейшим фактором, влияющим на качество и долговечность нагревательных систем являются характеристики\r\n          нагревательных элементов. Производителем нагревательных элементов для WÄRMEHAUS® CAB является VOKA\r\n          Vogtländisches\r\n          Kabelwerk GmbH Германия - предприятие концерна WILMS GRUPPE.\r\n        </p>\r\n        <p>\r\n          Нагревательные кабели WÄRMEHAUS® CAB 14W Thin являются полностью готовыми к использованию нагревательными\r\n          системами. Разработаны инженерами WÄRMEHAUS GmbH и производятся в соответствии с европейскими нормами EN\r\n          60335-1,\r\n          EN 60335-2, IEC 60800, а также в соответствии со стандартом по системам менеджмента качества ISO 9001 и\r\n          стандартом по системам экологического менеджмента ISO 14001 на предприятиях концерна WILMS GRUPPE в Германии\r\n          и\r\n          Чехии. Секции WÄRMEHAUS® CAB 14W Thin состоят из двужильного нагревательного кабеля с уникальной армированной\r\n          проходной и оконечной муфтами, оканчивающегося \" холодным\" концом длинной 3,5м.\r\n        </p>\r\n        <p>\r\n          Линейка нагревательных кабелей WÄRMEHAUS® CAB 14W Thin представлена в 15 типоразмерах и имеет различную длину\r\n          в\r\n          зависимости от необходимой мощности. Кабель предназначен для установки без формирования толстой цементной\r\n          стяжки\r\n          под любое напольное покрытие с удельным тепловым сопротивлением не более 0,15W/m2. Один соединительный\r\n          \"холодный\"\r\n          провод упрощает и ускоряет монтаж.\r\n        </p>\r\n        <p>\r\n          WÄRMEHAUS® CAB 14W Thin является средним решением между матом и резистивным кабелем 20W/m. Он тоньше обычного\r\n          резистивного кабеля и имеет меньшую линейную мощность 14W/m, но в отличии от мата, кабель не закреплён на\r\n          сетке.\r\n          Это позволяет выбирать любой шаг укладки в интервале 5...14см, тем самым получать удельную мощность от\r\n          280W/m2 до\r\n          100W/m2 и при этом производить монтаж без стяжки. Основной сложностью является то, что размещать тонкий\r\n          кабель\r\n          без сетки сложнее. Однако, в отличии от мата, кабелем намного проще обогревать контуры нестандартной формы,\r\n          например площади треугольной, округлой или трапециевидной формы.\r\n        </p>\r\n        <p>\r\n          WÄRMEHAUS® CAB 14W Thin - тонкий двужильный нагревательный кабель непосредственно под финишное покрытие пола,\r\n          например керамическую плитку.\r\n        </p>\r\n        <p>\r\n          Преимуществом данной системы является универсальность. С помощью WÄRMEHAUS® CAB 14W Thin возможно решать\r\n          практически любые задачи по обогреву жилых помещений.\r\n        </p>\r\n        <p>\r\n          Двужильный (Twin conductor, one cold tail) нагревательный кабель для помещений.\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Строение кабеля\">\r\n      <div class=\"content\">\r\n        <h2>Строение нагревательного кабеля WÄRMEHAUS<sup><small class=\"h2small\">®</small></sup> CAB 14W Thin:</h2>\r\n\r\n        <img src=\"assets/images/warmehauscab14wlogosc.jpg\" alt=\"Теплый пол кабель в разрезе\" align=\"left\"\r\n          hspace=\"10\">\r\n        <p>\r\n          1. Две нагревательные жилы обеспечивают отсутствие магнитных полей, а в совокупности заземляющем проводником\r\n          позволяют существенно уменьшить диаметр кабеля до 3,0мм.\r\n        </p>\r\n        <p>\r\n          2. Внутренняя изоляция нагревательных жил выполнена из фторополимера (тефлона), наиболее долговечного и\r\n          стойкого\r\n          к высоким температурам материала изоляции нагревательных элементов.\r\n        </p>\r\n        <p>\r\n          3. Электрическую безопасность греющего кабеля обеспечивает луженый медный проводник сечением 0,80мм2.\r\n        </p>\r\n        <p>\r\n          4. Сплошной экран из алюминиевой фольги с PET защитой придает кабелю дополнительную прочность, герметичность,\r\n          равномерно распределяет тепловую энергию по всей длине нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          5. Внешняя оболочка кабеля WÄRMEHAUS® MAT 200W/m2 выполнена из термоустойчивого ПВХ стойкого к высоким, до\r\n          105˚С,\r\n          температурам материала изоляции толщиной 0,45мм.\r\n        </p>\r\n        <p>\r\n          Греющий кабель соединен с холодным концом уникальной армированной муфтой, что добавляет и без того надежной\r\n          системе дополнительную прочность.\r\n\r\n          Нагревательный кабель WÄRMEHAUS® CAB 14W Thin абсолютно герметичен, степень защиты - IP 67.\r\n\r\n          Нагревательные системы WÄRMEHAUS® CAB 14W Thin славятся своими качеством, надежностью и безопасностью!\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Рекомендовано\">\r\n      <div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Гостиная, спальня, кухня</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-58461f24b6d929d5841c8a16ab82d52a951e73a3dbf95676e0e4d895f8d1803f_8ee06f63.jpg\"\r\n              alt=\"Теплые полы для спален и гостиных\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Коридор, прихожая 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Кухня, гостиная 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              В комнатах с напольным покрытием из плитки температура пола всегда значительно холоднее и ходить там\r\n              босиком\r\n              не доставляет никакого удовольствия, особенно, осенью и зимой. Пол с подогревом легко устраняет этот\r\n              недостаток и привносит в помещение необходимый комфорт и уют.\r\n            </p>\r\n            <p>\r\n              В семьях с детьми вполне типична ситуация, когда ребенок играет, сидя или лежа на полу. Родители не\r\n              всегда\r\n              успевают проконтролировать этот момент и в будущем у малыша могут проявиться опасные заболевания от\r\n              постоянного нахождения на бетонной поверхности, пусть даже застеленной линолеумом или ковровым покрытием.\r\n              Если в квартире установлен теплый пол, маме с папой больше не придется переживать о здоровье своего чада\r\n              и\r\n              опасаться простуд, сквозняков и прочих неприятных моментов.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Ванная, туалет</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-b0ac4459aae2e5f89c95f70053cf2086728187915d1445b66000b08e0a9ca419_55c265cb.jpg\"\r\n              alt=\"Теплые полы для туалета и ванной комнаты\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Ванная комната 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Туалет 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Теплый пол можно подобрать практически под любой вид популярных сегодня напольных покрытий. Во всех\r\n              офисах\r\n              и\r\n              торговых точках, специализирующихся на продаже греющего оборудования, менеджеры всегда дадут\r\n              квалифицированную консультацию относительно вопроса, какую систему лучше поставить под ламинат, паркет,\r\n              плитку, ковролин или линолеум.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Балкон, лоджия</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-bf3618212e827c0d33296e6560fb52d9e3754f7344a84131c268ace6bdaf5377_78955d1b — копия.jpg\"\r\n              alt=\"Теплые полы для утепленных и неутепленных балконов и лоджий\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Утепленый 200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Неутепленый 220-250/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Почти во всех многоквартирных домах на балконах и лоджиях не предусмотрено центральное отопление. В\r\n              результате эти помещения впитывают с улицы излишнюю сырость, таким образом ухудшая микроклимат во\r\n              внутренних\r\n              жилых помещениях. Нейтрализовать этот момент поможет только система теплый пол, полноценно\r\n              функционирующая\r\n              зимой и удобно отключающаяся на летний период времени.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.ts ***!
  \**************************************************************************/
/*! exports provided: Cab14WThinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cab14WThinComponent", function() { return Cab14WThinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_data_cab_14w_thin_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data/cab-14w-thin-data */ "./src/data/cab-14w-thin-data.ts");




var Cab14WThinComponent = /** @class */ (function () {
    function Cab14WThinComponent() {
        this.displayedColumns = ['name', 'nominal', 'price'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](src_data_cab_14w_thin_data__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_DATA_MAT_CAB_14W_THIN"]);
    }
    Cab14WThinComponent.prototype.ngOnInit = function () {
        this.dataSource1.sort = this.sort;
        this.dataSource1.paginator = this.paginator;
    };
    Cab14WThinComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], Cab14WThinComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], Cab14WThinComponent.prototype, "paginator", void 0);
    Cab14WThinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cab14-w-thin',
            template: __webpack_require__(/*! ./cab14-w-thin.component.html */ "./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.html"),
            styles: [__webpack_require__(/*! ./cab14-w-thin.component.css */ "./src/app/content/warmehaus/cab14-w-thin/cab14-w-thin.component.css")]
        })
    ], Cab14WThinComponent);
    return Cab14WThinComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 17px;\r\n  width: 100%;\r\n}\r\ntd, th {\r\n  width: 40%;\r\n}\r\n.mat-header-cell{\r\n    font-display: inline;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    cursor: pointer\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  b {\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  b {\r\n    font-size: 10px;\r\n  }\r\n}\r\n/* td:nth-of-type(2){\r\n  font-weight: bold;\r\n} */\r\nmat-paginator{\r\n    font-weight: bold;\r\n    color: black\r\n}\r\nmat-card-title{\r\n    text-align: center\r\n}\r\n.table, .filter{\r\n  max-width:1280px;\r\n  margin-left: auto;\r\n  margin-right: auto\r\n}\r\n.cards{\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n.recomind{\r\n  text-decoration: underline;\r\n}\r\nh2{\r\n  text-align: center;\r\n}\r\nmat-divider{\r\n  height: 1px;\r\n  background-color: black\r\n}\r\n.description{\r\n  \r\nmin-width: 80%;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\n/* margin-left: 10%; */\r\n}\r\n.h2small{\r\nfont-weight: bold;\r\n\r\n}\r\n.mat-header-row{\r\nbackground-color: rgb(233, 232, 232);\r\n}\r\nmat-tab-group{\r\nmax-width: 1200px;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\nmargin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.content{\r\nmargin: 30px\r\n}\r\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\ncolor:black;\r\nbackground-color:rgb(233, 232, 232);\r\nfont-weight: bold\r\n}\r\n::ng-deep .mat-ink-bar {\r\nbackground-color: var(--primary-color,red) !important;\r\n}\r\nul{\r\nmax-width: 640px;\r\n}\r\n.vertTab{\r\n-webkit-padding-before: 15px;\r\n        padding-block-start: 15px\r\n}\r\n.upon ul{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.uponTable{\r\nmax-width: 1500px;\r\nmargin-left: auto;\r\nmargin-left: auto\r\n}\r\n.upper-image{\r\n  max-width: 320px;\r\n  max-height: 320px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\npadding-right: 20px\r\n  }\r\n.price-info{\r\n    padding-left: 20px;\r\n    padding-bottom: 15px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvY2FiMjAtdy11di9jYWIyMC13LXV2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQjtBQUNGO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7QUFDQTs7QUFFQSxjQUFjO0FBQ2QseUJBQXNCO1FBQXRCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHlCQUFzQjtRQUF0QixzQkFBc0I7QUFDdEIsaUJBQWlCO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsbUNBQW1DO0FBQ25DO0FBQ0E7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSw0QkFBd0I7UUFBeEI7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7RUFDRTtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3dhcm1laGF1cy9jYWIyMC13LXV2L2NhYjIwLXctdXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBmb250LWRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG4vKiB0ZDpudGgtb2YtdHlwZSgyKXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSAqL1xyXG5tYXQtcGFnaW5hdG9ye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2tcclxufVxyXG5tYXQtY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbi50YWJsZSwgLmZpbHRlcntcclxuICBtYXgtd2lkdGg6MTI4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0b1xyXG59XHJcbi5jYXJkc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yZWNvbWluZHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5oMntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWRpdmlkZXJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgXHJcbm1pbi13aWR0aDogODAlO1xyXG5tYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xyXG4vKiBtYXJnaW4tbGVmdDogMTAlOyAqL1xyXG59XHJcbi5oMnNtYWxse1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLm1hdC1oZWFkZXItcm93e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzIsIDIzMik7XHJcbn1cclxubWF0LXRhYi1ncm91cHtcclxubWF4LXdpZHRoOiAxMjAwcHg7XHJcbm1hcmdpbi1ibG9jay1zdGFydDogMiU7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uY29udGVudHtcclxubWFyZ2luOiAzMHB4XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3QgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbmNvbG9yOmJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzMsIDIzMiwgMjMyKTtcclxuZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XHJcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IscmVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bHtcclxubWF4LXdpZHRoOiA2NDBweDtcclxufVxyXG4udmVydFRhYntcclxucGFkZGluZy1ibG9jay1zdGFydDogMTVweFxyXG59XHJcbi51cG9uIHVse1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4udXBvblRhYmxle1xyXG5tYXgtd2lkdGg6IDE1MDBweDtcclxubWFyZ2luLWxlZnQ6IGF1dG87XHJcbm1hcmdpbi1sZWZ0OiBhdXRvXHJcbn1cclxuLnVwcGVyLWltYWdle1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgbWF4LWhlaWdodDogMzIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5wYWRkaW5nLXJpZ2h0OiAyMHB4XHJcbiAgfVxyXG4gIC5wcmljZS1pbmZve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHhcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.html":
/*!************************************************************************!*\
  !*** ./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Кабель Двужильный CAB 20W UV PROTECTION</mat-card-title>\r\n  <mat-divider></mat-divider>\r\n  <div class=\"uponTable\">\r\n    <img class=\"upper-image\" src=\"assets/images/ТЕПЛЫЙ_ПОЛ_WARMEHAUS_CAB_20W_UV_3_s_800.jpg\" alt=\"Кабель 20 Ватт в ванную обогрев\"\r\n      align=\"left\" hspace=\"25\">\r\n    <div class=\"container upon\">\r\n      <ul>\r\n        <li>\r\n          WÄRMEHAUS <sup><small>®</small></sup> CAB 20W UV Германия - готовая к применению нагревательная\r\n          система ТЕПЛЫЙ ПОЛ под керамическую плитку, ламинат, паркетную доску, линолеум или система для обогрева\r\n          открытых площадок, труб, желобов и водостоков.\r\n        </li>\r\n        <li>\r\n          Применяется для внутренней или наружной установки.\r\n        </li>\r\n        <li>\r\n          Рекомендован в : ЖИЛЫЕ КОМНАТЫ, КУХНИ, ПРИХОЖИЕ, ЛОДЖИИ, ОТКРЫТЫЕ ПЛОЩАДКИ, ТРУБЫ, ВОДОСТОКИ И Т.Д.* (См.\r\n          Таб.№1)\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"dataSource1\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> м<sup><small>2</small></sup>/Вт </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\r\n    <p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n\r\n\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z8\">\r\n    <mat-tab class=\"tab\" label=\"Описание\">\r\n      <div class=\"content\">\r\n\r\n        <div class=\"vertTab\"></div>\r\n        <p>\r\n          WÄRMEHAUS<sup><small>®</small></sup> CAB 20W UV Германия - армированный экранированный двужильный\r\n          нагревательный резистивный кабель диаметром 5,2...5,9мм, линейной мощностью 20Вт/м.\r\n        </p>\r\n        <p>\r\n          Укладывается в бетонный пол и применяется на том этапе строительства, когда стяжка полов еще не сделана.\r\n        </p>\r\n        <p>\r\n          Предназначен для установки в стяжку 30мм…40мм. Допускается монтаж в широкую и глубокую 20х20мм штрабу, при\r\n          условии отсутствия вокруг кабеля воздушных карманов после заливки штрабы.\r\n        </p>\r\n        <p>\r\n          Линейная мощность 20Вт/м позволяет достичь равномерного прогрева пола при стяжке 3...4см.\r\n        </p>\r\n        <p>\r\n          Применяется в т.ч. для систем снеготаяния и антиобледенения. Имеет специальную защиту от УФ лучей.\r\n        </p>\r\n        <p>\r\n          Сплошной экран из алюминиевой фольги, шина заземления и двужильная конструкция кабеля полностью защищают от\r\n          ЭМ излучения.\r\n        </p>\r\n        Армирующая нить из стекловолокна защищает кабель от продольных нагрузок растяжения.\r\n        <p>\r\n          Выбирая ширину шага от 5 до 20см возможно добиться удельной мощности от 400Вт/м2 до 100Вт/м2,что решает любые\r\n          задачи в жилых и промышленных помещениях, а также на открытых площадках, на кровле и в водостоках (кабель\r\n          имеет специальную защиту от ультрафиолетовых лучей - UV PROTECTION), а так же для обогрева трубопроводов.\r\n        </p>\r\n        <p>\r\n          Универсальное решение* для комфортного подогрева поверхности или основного обогрева жилых и нежилых\r\n          (промышленных и подсобных) помещений:\r\n        </p>\r\n        <ul>\r\n          <li>\r\n            Комфортного подогрева поверхности пола (при 150W/m2, шаг укладки 13,5см) - ТЕПЛЫЙ ПОЛ\r\n          </li>\r\n          <li>\r\n            Комфортного подогрева поверхности пола в помещениях с повышенной влажностью, санузлах, ванных комнатах (при\r\n            180W/m2, шаг укладки 11см) - ТЕПЛЫЙ ПОЛ\r\n          </li>\r\n          <li>\r\n            Основного обогрева жилых помещений (при 220W/m2, шаг укладки 9см) .\r\n          </li>\r\n        </ul>\r\n        <p>\r\n          Допускается использование в утепленных лоджиях и верандах в качестве как дополнительного (при 200W/m2, шаг\r\n          укладки 10см) так и основного (при 260W/m2, шаг укладки 7.5см) обогрева.\r\n        </p>\r\n        <p>\r\n          *- монтаж кабеля в стяжку 3...4см.\r\n        </p>\r\n        <p>\r\n          Гарантия 20лет.\r\n        </p>\r\n        <p>\r\n          <b>Продукция сертифицирована в ТС. ЕАС сертификат № TC RU C-DE.АИ30.А.00674</b>\r\n        </p>\r\n        <p>\r\n          <i>Площадь комфортного обогрева в зависимости от типа помещения здесь:</i>\r\n        </p>\r\n        <p>\r\n          <img src=\"assets/images/WarmehausCAB20UVTABs1000.jpg\" alt=\"Таблица укладки теплых полов кабеля на 20Вт\">\r\n        </p>\r\n        <p>\r\n          <i>Рекомендуемая удельная мощность и шаг укладки CAB 20W UV для комфорт обогрева в зависимости от типа\r\n            помещения:</i>\r\n        </p>\r\n        <img src=\"assets/images/WarmehausCAB20UVTAB1s600.jpg\" alt=\"Таблица укладки теплых полов кабеля на 20Вт\">\r\n        <p>\r\n          ***\r\n        </p>\r\n        <p>\r\n          Описание: Секция изготовлена на основе резистивного нагревательного кабеля. Армированный, экранированный,\r\n          двужильный нагревательный кабель с тройной изоляцией и УФ защитой, с холодным проводом длиной 3,5м, с\r\n          герметичными армированной переходной и концевой муфтами.В основе работы резистивного нагревательного кабеля\r\n          лежит свойство проводника с повышенным сопротивлением выделять тепло. Количество выделяемого тепла зависит от\r\n          сопротивления. В конструкции кабеля применена прогрессивная технология с двумя нагревательными жилами, т.е.\r\n          без возвратного токопроводящего проводника. Что способствует равномерному прогреву кабеля, позволяет\r\n          уменьшить диаметр кабеля до 5,2...5,9мм и увеличить срок службы системы. Нагревательным элементом служат сами\r\n          токопроводящие жилы, изготовленные из металлического сплава и покрытые стойкой к высоким температурам\r\n          изоляцией из фторопласта.Важнейшим фактором, влияющим на качество и долговечность нагревательных систем\r\n          являются характеристики нагревательных элементов. Производителем нагревательных элементов для WÄRMEHAUS CAB\r\n          является VOKA Vogtländisches Kabelwerk GmbH Германия - предприятие концерна WILMS GRUPPE.Нагревательные\r\n          кабели WÄRMEHAUS CAB 20W UV являются полностью готовыми к использованию нагревательными системами.\r\n          Разработаны инженерами WÄRMEHAUS GmbH и производятся в соответствии с европейскими нормами EN 60335-1, EN\r\n          60335-2, IEC 60800, а также в соответствии со стандартом по системам менеджмента качества ISO 9001 и\r\n          стандартом по системам экологического менеджмента ISO 14001 на предприятиях концерна WILMS GRUPPE в Германии\r\n          и Чехии. Секции WÄRMEHAUS CAB 20W UV состоят из двужильного нагревательного кабеля с уникальной армированной\r\n          проходной и оконечной муфтами, оканчивающегося \" холодным\" концом длинной 3,5м.Линейка нагревательных кабелей\r\n          WÄRMEHAUS CAB 20W UV представлена в 14 типоразмерах и имеет различную длину в зависимости от необходимой\r\n          мощности. Кабель предназначен для укладки в стяжку 3см…4см или глубокую (2см) штрабу под любое напольное\r\n          покрытие с удельным тепловым сопротивлением не более 0,15W/m2. Применяется в т.ч. для систем снеготаяния и\r\n          антиобледенения. Один соединительный \"холодный\" провод упрощает и ускоряет монтаж.Преимуществом данной\r\n          системы является универсальность. С помощью WÄRMEHAUS CAB 20W UV возможно решать практически любые задачи по\r\n          обогреву жилых и нежилых помещений, а также иных объектов.Двужильный (Twin conductor, one cold tail)\r\n          нагревательный кабель для помещений и наружного использования.\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Строение кабеля\">\r\n      <div class=\"content\">\r\n        <h2>Строение нагревательного кабеля WÄRMEHAUS<sup><small class=\"h2small\">®</small></sup> CAB 20W UV :</h2>\r\n\r\n        <img src=\"assets/images/warmehauscab20wlogosc.jpg\" alt=\"Теплый пол кабель в разрезе\" align=\"left\"\r\n          hspace=\"10\">\r\n        <p>\r\n          1. Две нагревательные жилы обеспечивают отсутствие магнитных полей и позволяют существенно уменьшить диаметр\r\n          кабеля до 5,2...5,9мм.\r\n        </p>\r\n        <p>\r\n          2. Внутренняя изоляция нагревательных жил выполнена из фторополимера (тефлона), самого долговечного и\r\n          стойкого к высоким, до 300˚С, температурам материала изоляции.\r\n        </p>\r\n        <p>\r\n          3. Высокую стойкость кабеля WÄRMEHAUS® CAB 20W UV к механическим нагрузкам обеспечивает дополнительный\r\n          изоляционный слой нагревательных жил из высокопрочного TXLP сшитого полиэтилена.\r\n        </p>\r\n        <p>\r\n          4. Электрическую безопасность греющего кабеля обеспечивает 7 луженых медных проволок сечением 0,3 мм2 каждая.\r\n        </p>\r\n        <p>\r\n          5. Армирование кабеля нитями стекловолокна придает ему дополнительную прочность на растяжение и разрыв.\r\n        </p>\r\n        <p>\r\n          6. Сплошной экран из алюминиевой фольги с PET защитой придает кабелю дополнительную прочность, герметичность,\r\n          равномерно распределяет тепловую энергию по всей длине нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          7. Внешняя оболочка кабеля WÄRMEHAUS® CAB 20W UV выполнена из ПВХ стойкого к высоким, до 105˚С, температурам\r\n          материала изоляции (защитой от ультрафиолетового излучения) - толщиной 0,8 мм.\r\n        </p>\r\n        <p>\r\n          Греющий кабель соединен с холодным концом уникальной армированной муфтой, что добавляет и без того надежной\r\n          системе дополнительную прочность.\r\n        </p>\r\n        <p>\r\n          Нагревательный кабель WÄRMEHAUS® CAB 20W UV абсолютно герметичен, степень защиты - IP 67.\r\n        </p>\r\n        <p>\r\n          Нагревательные системы WÄRMEHAUS® CAB 20W UV славятся своими качеством, надежностью и безопасностью!\r\n        </p>\r\n        <p>\r\n          Качество, проверенное временем!\r\n        </p>\r\n        <p>\r\n          Продукция сертифицирована в ТС. ЕАС сертификат № TC RU C-DE.АИ30.А.00674\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Рекомендовано\">\r\n      <div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Гостиная, спальня, кухня</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-58461f24b6d929d5841c8a16ab82d52a951e73a3dbf95676e0e4d895f8d1803f_8ee06f63.jpg\"\r\n              alt=\"Теплые полы для спален и гостиных\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Коридор, прихожая 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Кухня, гостиная 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              В комнатах с напольным покрытием из плитки температура пола всегда значительно холоднее и ходить там\r\n              босиком\r\n              не доставляет никакого удовольствия, особенно, осенью и зимой. Пол с подогревом легко устраняет этот\r\n              недостаток и привносит в помещение необходимый комфорт и уют.\r\n            </p>\r\n            <p>\r\n              В семьях с детьми вполне типична ситуация, когда ребенок играет, сидя или лежа на полу. Родители не\r\n              всегда\r\n              успевают проконтролировать этот момент и в будущем у малыша могут проявиться опасные заболевания от\r\n              постоянного нахождения на бетонной поверхности, пусть даже застеленной линолеумом или ковровым покрытием.\r\n              Если в квартире установлен теплый пол, маме с папой больше не придется переживать о здоровье своего чада\r\n              и\r\n              опасаться простуд, сквозняков и прочих неприятных моментов.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Ванная, туалет</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"assets/images/mats/0-02-05-b0ac4459aae2e5f89c95f70053cf2086728187915d1445b66000b08e0a9ca419_55c265cb.jpg\"\r\n              alt=\"Теплые полы для туалета и ванной комнаты\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Ванная комната 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Туалет 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Теплый пол можно подобрать практически под любой вид популярных сегодня напольных покрытий. Во всех\r\n              офисах\r\n              и\r\n              торговых точках, специализирующихся на продаже греющего оборудования, менеджеры всегда дадут\r\n              квалифицированную консультацию относительно вопроса, какую систему лучше поставить под ламинат, паркет,\r\n              плитку, ковролин или линолеум.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Балкон, лоджия</mat-card-title>\r\n          <mat-card-content>\r\n            <img src=\"../../../../assets/images/mats/0-02-05-bf3618212e827c0d33296e6560fb52d9e3754f7344a84131c268ace6bdaf5377_78955d1b — копия.jpg\"\r\n              alt=\"Теплые полы для утепленных и неутепленных балконов и лоджий\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Утепленый 200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Неутепленый 220-250/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Почти во всех многоквартирных домах на балконах и лоджиях не предусмотрено центральное отопление. В\r\n              результате эти помещения впитывают с улицы излишнюю сырость, таким образом ухудшая микроклимат во\r\n              внутренних\r\n              жилых помещениях. Нейтрализовать этот момент поможет только система теплый пол, полноценно\r\n              функционирующая\r\n              зимой и удобно отключающаяся на летний период времени.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.ts ***!
  \**********************************************************************/
/*! exports provided: Cab20WUvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cab20WUvComponent", function() { return Cab20WUvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_data_cab_20w_uv_protection_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data/cab-20w-uv-protection-data */ "./src/data/cab-20w-uv-protection-data.ts");




var Cab20WUvComponent = /** @class */ (function () {
    function Cab20WUvComponent() {
        this.displayedColumns = ['name', 'nominal', 'price'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](src_data_cab_20w_uv_protection_data__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION"]);
    }
    Cab20WUvComponent.prototype.ngOnInit = function () {
        this.dataSource1.sort = this.sort;
        this.dataSource1.paginator = this.paginator;
    };
    Cab20WUvComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], Cab20WUvComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], Cab20WUvComponent.prototype, "paginator", void 0);
    Cab20WUvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cab20-w-uv',
            template: __webpack_require__(/*! ./cab20-w-uv.component.html */ "./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.html"),
            styles: [__webpack_require__(/*! ./cab20-w-uv.component.css */ "./src/app/content/warmehaus/cab20-w-uv/cab20-w-uv.component.css")]
        })
    ], Cab20WUvComponent);
    return Cab20WUvComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/films/films.component.css":
/*!*************************************************************!*\
  !*** ./src/app/content/warmehaus/films/films.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  .mat-form-field {\r\n    font-size: 17px;\r\n    width: 100%;\r\n  }\r\n  td, th {\r\n    width: 40%;\r\n  }\r\n  .mat-header-cell{\r\n      font-display: inline;\r\n      font-weight: bold;\r\n      font-size: 14px;\r\n      text-align: center;\r\n      cursor: pointer\r\n  }\r\n  @media only screen and (max-width: 768px) {\r\n    b {\r\n      font-size: 20px;\r\n    }\r\n  }\r\n  @media only screen and (max-width: 320px) {\r\n    b {\r\n      font-size: 10px;\r\n    }\r\n  }\r\n  /* td:nth-of-type(2){\r\n    font-weight: bold;\r\n  } */\r\n  mat-paginator{\r\n      font-weight: bold;\r\n      color: black\r\n  }\r\n  mat-card-title{\r\n      text-align: center\r\n  }\r\n  .table, .filter{\r\n    max-width:1280px;\r\n    margin-left: auto;\r\n    margin-right: auto\r\n  }\r\n  .cards{\r\n    width: 100%;\r\n    margin-top: 20px;\r\n  }\r\n  .recomind{\r\n    text-decoration: underline;\r\n  }\r\n  h2{\r\n    text-align: center;\r\n  }\r\n  mat-divider{\r\n    height: 1px;\r\n    background-color: black\r\n  }\r\n  .description{\r\n    \r\n  min-width: 80%;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  /* margin-left: 10%; */\r\n  }\r\n  .h2small{\r\n  font-weight: bold;\r\n  \r\n  }\r\n  .mat-header-row{\r\n  background-color: rgb(233, 232, 232);\r\n  }\r\n  mat-tab-group{\r\n  max-width: 1200px;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .content{\r\n  margin: 30px\r\n  }\r\n  ::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\n  color:black;\r\n  background-color:rgb(233, 232, 232);\r\n  font-weight: bold\r\n  }\r\n  ::ng-deep .mat-ink-bar {\r\n  background-color: var(--primary-color,red) !important;\r\n  }\r\n  ul{\r\n  max-width: 640px;\r\n  }\r\n  .vertTab{\r\n  -webkit-padding-before: 15px;\r\n          padding-block-start: 15px\r\n  }\r\n  .upon ul{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .uponTable{\r\n  max-width: 1500px;\r\n  margin-left: auto;\r\n  margin-left: auto\r\n  }\r\n  .upper-image{\r\n    max-width: 320px;\r\n    max-height: 320px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  padding-right: 20px\r\n    }\r\n  .price-info{\r\n      padding-left: 20px;\r\n      padding-bottom: 15px\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvZmlsbXMvZmlsbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtFQUVBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7TUFDSSxvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixrQkFBa0I7TUFDbEI7RUFDSjtFQUNBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7RUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGO0VBQ0E7O0tBRUc7RUFDSDtNQUNJLGlCQUFpQjtNQUNqQjtFQUNKO0VBQ0E7TUFDSTtFQUNKO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCO0VBQ0Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxXQUFXO0lBQ1g7RUFDRjtFQUNBOztFQUVBLGNBQWM7RUFDZCx5QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QjtFQUNBO0VBQ0EsaUJBQWlCOztFQUVqQjtFQUNBO0VBQ0Esb0NBQW9DO0VBQ3BDO0VBQ0E7RUFDQSxpQkFBaUI7RUFDakIseUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixpQkFBaUI7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkM7RUFDQTtFQUVBO0VBQ0EscURBQXFEO0VBQ3JEO0VBRUE7RUFDQSxnQkFBZ0I7RUFDaEI7RUFDQTtFQUNBLDRCQUF3QjtVQUF4QjtFQUNBO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0VBQ0E7RUFDQSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCO0VBQ0E7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtJQUNFO0VBQ0E7TUFDRSxrQkFBa0I7TUFDbEI7SUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvd2FybWVoYXVzL2ZpbG1zL2ZpbG1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgLm1hdC1oZWFkZXItY2VsbHtcclxuICAgICAgZm9udC1kaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGIge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIGIge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIHRkOm50aC1vZi10eXBlKDIpe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfSAqL1xyXG4gIG1hdC1wYWdpbmF0b3J7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogYmxhY2tcclxuICB9XHJcbiAgbWF0LWNhcmQtdGl0bGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gIH1cclxuICAudGFibGUsIC5maWx0ZXJ7XHJcbiAgICBtYXgtd2lkdGg6MTI4MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuICB9XHJcbiAgLmNhcmRze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAucmVjb21pbmR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIG1hdC1kaXZpZGVye1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb257XHJcbiAgICBcclxuICBtaW4td2lkdGg6IDgwJTtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAxMCU7ICovXHJcbiAgfVxyXG4gIC5oMnNtYWxse1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIFxyXG4gIH1cclxuICAubWF0LWhlYWRlci1yb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMyLCAyMzIpO1xyXG4gIH1cclxuICBtYXQtdGFiLWdyb3Vwe1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gIG1hcmdpbjogMzBweFxyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC10YWItbGlzdCAubWF0LXRhYi1sYWJlbHMgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjpibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzMsIDIzMiwgMjMyKTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLHJlZCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgdWx7XHJcbiAgbWF4LXdpZHRoOiA2NDBweDtcclxuICB9XHJcbiAgLnZlcnRUYWJ7XHJcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMTVweFxyXG4gIH1cclxuICAudXBvbiB1bHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAudXBvblRhYmxle1xyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbiAgfVxyXG4gIC51cHBlci1pbWFnZXtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHhcclxuICAgIH1cclxuICAgIC5wcmljZS1pbmZve1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/content/warmehaus/films/films.component.html":
/*!**************************************************************!*\
  !*** ./src/app/content/warmehaus/films/films.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Кабель Двужильный CAB 20W UV PROTECTION</mat-card-title>\r\n  <mat-divider></mat-divider>\r\n  <div class=\"uponTable\">\r\n    <img class=\"upper-image\" src=\"assets/images/film/warmehaus_thermofilm_1m.jpg\"\r\n     alt=\"Пленка под ламинат в пол\"\r\n      align=\"left\" hspace=\"25\">\r\n    <div class=\"container upon\">\r\n      <ul>\r\n        <li>\r\n          Комплекты WÄRMEHAUS <sup><small>®</small></sup> infrared Film полностью готовы к монтажу.\r\n        </li>\r\n        <li><span style=\"color:rgb(0, 0, 0)\">Продукция изготовленная из первичного лавсана в соответствии с высокими\r\n            производственными требованиями.</span></li>\r\n        <li><span style=\"color:rgb(0, 0, 0)\">В комплект входит нагревательная пленка. </span></li>\r\n        <li><span style=\"color:rgb(0, 0, 0)\">Провода для коммутации нагревательных элементов.</span></li>\r\n        <li><span style=\"color:rgb(0, 0, 0)\">Контактные зажимы.</span></li>\r\n        <li><span style=\"color:rgb(0, 0, 0)\">Изоляторы контактной группы.</span></li>\r\n        <li>Ширина нагревательного элемента 0.5м.</li>\r\n        <li><span style=\"color:rgb(0, 0, 0)\">Инструкция по установке на русском языке, гарантийный талон в каждом\r\n            комплекте.</span></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"dataSource1\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> м<sup><small>2</small></sup>/Вт </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15, 26]\"></mat-paginator>\r\n    <p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n\r\n\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z8\">\r\n    <mat-tab class=\"tab\" label=\"Описание EcoPower 150W\">\r\n      <div class=\"content\">\r\n        <div class=\"vertTab\">\r\n          <p>\r\n            WÄRMEHAUS<sup><small class=\"h2small\">®</small></sup> infrared Film применяется под сухие финишные покрытия,\r\n            на том этапе строительства или ремонта,\r\n            когда требуется быстрый монтаж под ламинат, паркетную досу, линолеум, ковролин и т.д. Укладывается на\r\n            отражающий материал, непосредственно под финишное покрытие, без стяжки.\r\n          </p>\r\n          <p>\r\n            Удельная мощность 150Вт/м<sup><small class=\"h2small\">2</small></sup> позволяет достичь комфортной 24...26С<sup><small\r\n                class=\"h2small\">o</small></sup> температуры пола за очень короткое время,\r\n            15-30мин.\r\n          </p>\r\n          <p>\r\n            Рекомендовано для комфортного подогрева поверхности пола и стен в жилых помещениях.\r\n          </p>\r\n          <p>\r\n            Гарантия 10лет.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Описание HighPower 220W\">\r\n      <div class=\"content\">\r\n        <p>\r\n          WÄRMEHAUS<sup><small class=\"h2small\">®</small></sup> infrared Film применяется под сухие финишные покрытия,\r\n          на том этапе строительства или ремонта,\r\n          когда требуется быстрый монтаж под ламинат, паркетную доску, линолеум, ковролин и т.д. Укладывается на\r\n          отражающий материал, непосредственно под финишное покрытие, без стяжки.\r\n        </p>\r\n        <p>\r\n          Удельная мощность 220Вт/м<sup><small class=\"h2small\">2</small></sup> позволяет достичь комфортной 24...26С<sup><small class=\"h2small\">o</small></sup> температуры пола за очень короткое время,\r\n          15-30мин. и поддерживать поверхность в комфортном состоянии даже при высоких теплопотерях, на утепленных\r\n          лоджиях, дачах, верандах в загородных домах.\r\n        </p>\r\n        <p>\r\n          Рекомендовано для комфортного подогрева поверхности пола и стен в жилых помещениях.\r\n        </p>\r\n        <p>\r\n          Гарантия 10лет.\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/content/warmehaus/films/films.component.ts":
/*!************************************************************!*\
  !*** ./src/app/content/warmehaus/films/films.component.ts ***!
  \************************************************************/
/*! exports provided: FilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsComponent", function() { return FilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_data_film_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/data/film-data */ "./src/data/film-data.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var FilmsComponent = /** @class */ (function () {
    function FilmsComponent() {
        this.displayedColumns = ['name', 'nominal', 'price'];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](src_data_film_data__WEBPACK_IMPORTED_MODULE_2__["ELEMENT_DATA_FILMS"]);
    }
    FilmsComponent.prototype.ngOnInit = function () {
        this.dataSource1.sort = this.sort;
        this.dataSource1.paginator = this.paginator;
    };
    FilmsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], FilmsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FilmsComponent.prototype, "paginator", void 0);
    FilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-films',
            template: __webpack_require__(/*! ./films.component.html */ "./src/app/content/warmehaus/films/films.component.html"),
            styles: [__webpack_require__(/*! ./films.component.css */ "./src/app/content/warmehaus/films/films.component.css")]
        })
    ], FilmsComponent);
    return FilmsComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/termostat/termostat.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/content/warmehaus/termostat/termostat.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #f7f6e3;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n  height: 3%;\r\n  cursor: pointer\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n\r\n}\r\n\r\n.examle-element-display {\r\n  height: 0;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 17px;\r\n  width: 100%;\r\n}\r\n\r\ntd,\r\nth {\r\n  width: 40%;\r\n}\r\n\r\n.mat-header-cell {\r\n  font-display: inline;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  cursor: pointer\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  b {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 300px) {\r\n  b {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n/* td:nth-of-type(2){\r\n    font-weight: bold;\r\n  } */\r\n\r\nmat-paginator {\r\n  font-weight: bold;\r\n  color: black\r\n}\r\n\r\nmat-card-title {\r\n  text-align: center\r\n}\r\n\r\n.table,\r\n.filter {\r\n  max-width: 1280px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.recomind {\r\n  text-decoration: underline;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n}\r\n\r\nmat-divider {\r\n  height: 1px;\r\n  background-color: black;\r\n}\r\n\r\n.h2small {\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.mat-header-row {\r\n  background-color: rgb(233, 232, 232);\r\n}\r\n\r\nmat-tab-group {\r\n  max-width: 1200px;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.content {\r\n  margin: 30px;\r\n}\r\n\r\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\n  color: black;\r\n  background-color: rgb(233, 232, 232);\r\n  font-weight: bold\r\n}\r\n\r\n::ng-deep .mat-ink-bar {\r\n  background-color: var(--primary-color, red) !important;\r\n}\r\n\r\nul {\r\n  max-width: 640px;\r\n}\r\n\r\n.vertTab {\r\n  -webkit-padding-before: 10px;\r\n          padding-block-start: 10px\r\n}\r\n\r\n.upon ul {\r\n  margin-left: 5%;\r\n}\r\n\r\nngx-imageviewer {\r\n  margin-right: 73%;\r\n}\r\n\r\n/* .expander{\r\n    min-width: 800px\r\n  } */\r\n\r\n.price-info {\r\n  padding-left: 20px;\r\n  padding-bottom: 15px\r\n}\r\n\r\n.video {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: black;\r\n  text-align: center\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvdGVybW9zdGF0L3Rlcm1vc3RhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBOztLQUVLOztBQUNMO0VBQ0UsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQztBQUNGOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQXdCO1VBQXhCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztLQUVLOztBQUNMO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3dhcm1laGF1cy90ZXJtb3N0YXQvdGVybW9zdGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y2ZTM7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIGhlaWdodDogMyU7XHJcbiAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcblxyXG4uZXhhbWxlLWVsZW1lbnQtZGlzcGxheSB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLFxyXG50aCB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgZm9udC1kaXNwbGF5OiBpbmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogdGQ6bnRoLW9mLXR5cGUoMil7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9ICovXHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFja1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi50YWJsZSxcclxuLmZpbHRlciB7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucmVjb21pbmQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtZGl2aWRlciB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5oMnNtYWxsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMyLCAyMzIpO1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3QgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMiwgMjMyKTtcclxuICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbmstYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCByZWQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG59XHJcblxyXG4udmVydFRhYiB7XHJcbiAgcGFkZGluZy1ibG9jay1zdGFydDogMTBweFxyXG59XHJcblxyXG4udXBvbiB1bCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG5uZ3gtaW1hZ2V2aWV3ZXIge1xyXG4gIG1hcmdpbi1yaWdodDogNzMlO1xyXG59XHJcblxyXG4vKiAuZXhwYW5kZXJ7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4XHJcbiAgfSAqL1xyXG4ucHJpY2UtaW5mbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/content/warmehaus/termostat/termostat.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/content/warmehaus/termostat/termostat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Терморегуляторы</mat-card-title>\r\n  <div class=\"container video\">\r\n    <p>Инструкция по пользованию таблицей терморегуляторов Wärmehaus</p>\r\n    <img src=\"assets/videos/termostat/Instruction.webp\" alt=\"Инструкция по пользованию таблицей терморегуляторов Warmehaus\" />\r\n  </div>\r\n  <br>\r\n  <mat-divider></mat-divider>\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n\r\n    <!-- https://github.com/nicky-lenaers/ngx-scroll-to -->\r\n    <div #destinationRef></div>\r\n  </div>\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Управление</th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\r\n      <div class=\"expander\">\r\n        <ng-container class=\"expanded-elem\" matColumnDef=\"expandedDetail\">\r\n          <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\r\n            <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\r\n              <div class=\"example-element-diagram\">\r\n\r\n                <!-- https://www.npmjs.com/package/@hallysonh/ngx-imageviewer -->\r\n                <ngx-imageviewer [src]=element.picPath ></ngx-imageviewer>\r\n                <div class=\"example-element-description\" [innerHTML]=\"element.description | safeHtml\"></div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n        \r\n        <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\r\n        <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\r\n          [class.example-expanded-row]=\"expandedElement === element\" (click)=\"expandedElement = expandedElement === element ? null : element\" [ngx-scroll-to]=\"destinationRef\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\r\n      </div>\r\n\r\n    </table>\r\n\r\n    \r\n\r\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator> -->\r\n    <p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/content/warmehaus/termostat/termostat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/warmehaus/termostat/termostat.component.ts ***!
  \********************************************************************/
/*! exports provided: TermostatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermostatComponent", function() { return TermostatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hallysonh/ngx-imageviewer */ "./node_modules/@hallysonh/ngx-imageviewer/fesm5/hallysonh-ngx-imageviewer.js");
/* harmony import */ var src_app_constants_image_view_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/constants/image-view-styles */ "./src/app/constants/image-view-styles.ts");
/* harmony import */ var src_data_termostat_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/data/termostat-data */ "./src/data/termostat-data.ts");







var TermostatComponent = /** @class */ (function () {
    function TermostatComponent() {
        this.columnsToDisplay = ['name', 'nominal', 'price'];
        this.headerNames = ['Тип', 'м2/Вт', 'Цена'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](src_data_termostat_data__WEBPACK_IMPORTED_MODULE_6__["ELEMENT_DATA_TERMOSTATS"]);
    }
    TermostatComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    TermostatComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TermostatComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TermostatComponent.prototype, "paginator", void 0);
    TermostatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termostat',
            template: __webpack_require__(/*! ./termostat.component.html */ "./src/app/content/warmehaus/termostat/termostat.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            providers: [
                {
                    provide: _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__["IMAGEVIEWER_CONFIG"],
                    useValue: src_app_constants_image_view_styles__WEBPACK_IMPORTED_MODULE_5__["MY_IMAGEVIEWER_CONFIG"]
                }
            ],
            styles: [__webpack_require__(/*! ./termostat.component.css */ "./src/app/content/warmehaus/termostat/termostat.component.css")]
        })
    ], TermostatComponent);
    return TermostatComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/warmehaus.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content/warmehaus/warmehaus.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chip:focus {\r\n    outline: none;\r\n    border: 0;\r\n    background-color: white\r\n\r\n }\r\n a:hover {\r\n     color: white;\r\n     text-decoration: none\r\n }\r\n mat-chip-list{\r\n     display: block;\r\n     -webkit-margin-before: 1%;\r\n             margin-block-start: 1%;\r\n     -webkit-margin-after: 1%;\r\n             margin-block-end: 1%\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvd2FybWVoYXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNUOztDQUVIO0NBQ0E7S0FDSSxZQUFZO0tBQ1o7Q0FDSjtDQUNBO0tBQ0ksY0FBYztLQUNkLHlCQUFzQjthQUF0QixzQkFBc0I7S0FDdEIsd0JBQW1CO2FBQW5CO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3dhcm1laGF1cy93YXJtZWhhdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGlwOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG5cclxuIH1cclxuIGE6aG92ZXIge1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuIH1cclxuIG1hdC1jaGlwLWxpc3R7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxJTtcclxuICAgICBtYXJnaW4tYmxvY2stZW5kOiAxJVxyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/content/warmehaus/warmehaus.component.html":
/*!************************************************************!*\
  !*** ./src/app/content/warmehaus/warmehaus.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-carousel></app-carousel>-->\r\n<mat-chip-list>\r\n\r\n    <mat-chip class=\"chip\" color=\"primary\" selected>\r\n        <a routerLink=\"/warmehaus/mat-160W\" routerLinkActive=\"active\" style=\"color:white\">Маты 160Вт</a>\r\n    </mat-chip>\r\n\r\n    <mat-chip class=\"chip\" color=\"accent\" selected>\r\n        <a routerLink=\"/warmehaus/mat-200W\" routerLinkActive=\"active\" style=\"color:white\">Маты 200Вт</a>\r\n    </mat-chip>\r\n\r\n    <mat-chip class=\"chip\" color=\"warn\" selected>\r\n        <a routerLink=\"/warmehaus/cab-11W-thin\" routerLinkActive=\"active\" style=\"color:white\">Кабель 11Вт</a>\r\n    </mat-chip>\r\n\r\n    <mat-chip class=\"chip\" color=\"primary\" selected>\r\n        <a routerLink=\"/warmehaus/cab-14W-thin\" routerLinkActive=\"active\" style=\"color:white\">Кабель 14Вт</a>\r\n    </mat-chip>\r\n\r\n    <mat-chip class=\"chip\" color=\"accent\" selected>\r\n        <a routerLink=\"/warmehaus/cab-20W-uv-protection\" routerLinkActive=\"active\" style=\"color:white\">Кабель 20Вт</a>\r\n    </mat-chip>\r\n    \r\n    <mat-chip class=\"chip\" color=\"warn\" selected>\r\n        <a routerLink=\"/warmehaus/termostats\" routerLinkActive=\"active\" style=\"color:white\">Терморегуляторы</a>\r\n    </mat-chip>\r\n\r\n    <mat-chip class=\"chip\" color=\"primary\" selected>\r\n        <a routerLink=\"/warmehaus/anti-icing\" routerLinkActive=\"active\" style=\"color:white\">Антиобледенение</a>\r\n    </mat-chip>\r\n\r\n    <mat-chip class=\"chip\" color=\"accent\" selected>\r\n        <a routerLink=\"/warmehaus/films\" routerLinkActive=\"active\" style=\"color:white\">Плёнка</a>\r\n    </mat-chip>\r\n    \r\n</mat-chip-list>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/content/warmehaus/warmehaus.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content/warmehaus/warmehaus.component.ts ***!
  \**********************************************************/
/*! exports provided: WarmehausComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarmehausComponent", function() { return WarmehausComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");



var WarmehausComponent = /** @class */ (function () {
    // tiles: ITile[] = [
    //   {route: '/warmehaus/mat-160W', picUrl: "../../assets/images/gridPics/Нагревательный_Мат_160Вт.png", cols: 2, rows: 1, alt:'Нагревательный мат 160 Вт'},
    //   {route: '/warmehaus/mat-200W', picUrl: "../../assets/images/gridPics/Нагревательный_Мат_200Вт.png", cols: 2, rows: 1, alt: 'Нагревательный мат 200 Вт'},
    //   {route: 'url', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_11Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в слой плиточного клея 11Вт'},
    //   {route: 'url', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_слой_14Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в слой плиточного клея 14Вт'},
    //   {route: 'url', picUrl: "../../assets/images/gridPics/Нагревательный_Кабель_в_стяжку_20Вт.png", cols: 2, rows: 1, alt: 'Нагревательный Кабель в стяжку 20Вт'},
    //   {route: 'url', picUrl: "../../assets/images/gridPics/Инфракрасная_Плёнка.png", cols: 2, rows: 1, alt: 'Инфракрасная пленка'},
    //   {route: 'url', picUrl: "../../assets/images/gridPics/Системы_антиобледенения.png", cols: 2, rows: 1, alt: 'Системы антиобледенения'},
    //   {route: 'url', picUrl: "../../assets/images/gridPics/Терморегуляторы.png", cols: 2, rows: 1, alt: 'Терморегуляторы'},
    // ];
    function WarmehausComponent(menuService) {
        this.menuService = menuService;
        this.list = [];
    }
    WarmehausComponent.prototype.ngOnInit = function () {
        this.list = this.menuService
            .getMenu()[1].children;
    };
    WarmehausComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warmehaus',
            template: __webpack_require__(/*! ./warmehaus.component.html */ "./src/app/content/warmehaus/warmehaus.component.html"),
            styles: [__webpack_require__(/*! ./warmehaus.component.css */ "./src/app/content/warmehaus/warmehaus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], WarmehausComponent);
    return WarmehausComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 17px;\r\n  width: 100%;\r\n}\r\ntd, th {\r\n  width: 40%;\r\n}\r\n.mat-header-cell{\r\n    font-display: inline;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    cursor: pointer\r\n}\r\n@media only screen and (max-width: 768px) {\r\n  b {\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media only screen and (max-width: 320px) {\r\n  b {\r\n    font-size: 10px;\r\n  }\r\n}\r\n/* td:nth-of-type(2){\r\n  font-weight: bold;\r\n} */\r\nmat-paginator{\r\n    font-weight: bold;\r\n    color: black\r\n}\r\nmat-card-title{\r\n    text-align: center\r\n}\r\n.table, .filter{\r\n  max-width:1280px;\r\n  margin-left: auto;\r\n  margin-right: auto\r\n}\r\n.cards{\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n.recomind{\r\n  text-decoration: underline;\r\n}\r\nh2{\r\n  text-align: center;\r\n}\r\nmat-divider{\r\n  height: 1px;\r\n  background-color: black\r\n}\r\n.description{\r\n  \r\nmin-width: 80%;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\n/* margin-left: 10%; */\r\n}\r\n.h2small{\r\nfont-weight: bold;\r\n\r\n}\r\n.mat-header-row{\r\nbackground-color: rgb(233, 232, 232);\r\n}\r\nmat-tab-group{\r\nmax-width: 1200px;\r\n-webkit-margin-before: 2%;\r\n        margin-block-start: 2%;\r\nmargin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.content{\r\nmargin: 30px\r\n}\r\n::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\ncolor:black;\r\nbackground-color:rgb(233, 232, 232);\r\nfont-weight: bold\r\n}\r\n::ng-deep .mat-ink-bar {\r\nbackground-color: var(--primary-color,red) !important;\r\n}\r\nul{\r\nmax-width: 640px;\r\n}\r\n.vertTab{\r\n-webkit-padding-before: 15px;\r\n        padding-block-start: 15px\r\n}\r\n.upon ul, li{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.uponTable{\r\nmax-width: 1500px;\r\nmargin-left: auto;\r\nmargin-left: auto\r\n}\r\n.upper-image{\r\nmax-width: 320px;\r\nmax-height: 320px;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\npadding-right: 20px\r\n}\r\n.price-info{\r\n  padding-left: 20px;\r\n  padding-bottom: 15px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvd2FybWluZy1tYXQxNjAtdy93YXJtaW5nLW1hdDE2MC13LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUNBOztHQUVHO0FBQ0g7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQjtBQUNGO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYO0FBQ0Y7QUFDQTs7QUFFQSxjQUFjO0FBQ2QseUJBQXNCO1FBQXRCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHlCQUFzQjtRQUF0QixzQkFBc0I7QUFDdEIsaUJBQWlCO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsbUNBQW1DO0FBQ25DO0FBQ0E7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSw0QkFBd0I7UUFBeEI7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3dhcm1laGF1cy93YXJtaW5nLW1hdDE2MC13L3dhcm1pbmctbWF0MTYwLXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGQsIHRoIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBmb250LWRpc3BsYXk6IGlubGluZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG4vKiB0ZDpudGgtb2YtdHlwZSgyKXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSAqL1xyXG5tYXQtcGFnaW5hdG9ye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2tcclxufVxyXG5tYXQtY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbi50YWJsZSwgLmZpbHRlcntcclxuICBtYXgtd2lkdGg6MTI4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0b1xyXG59XHJcbi5jYXJkc3tcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yZWNvbWluZHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5oMntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LWRpdmlkZXJ7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgXHJcbm1pbi13aWR0aDogODAlO1xyXG5tYXJnaW4tYmxvY2stc3RhcnQ6IDIlO1xyXG4vKiBtYXJnaW4tbGVmdDogMTAlOyAqL1xyXG59XHJcbi5oMnNtYWxse1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLm1hdC1oZWFkZXItcm93e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzIsIDIzMik7XHJcbn1cclxubWF0LXRhYi1ncm91cHtcclxubWF4LXdpZHRoOiAxMjAwcHg7XHJcbm1hcmdpbi1ibG9jay1zdGFydDogMiU7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uY29udGVudHtcclxubWFyZ2luOiAzMHB4XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3QgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbmNvbG9yOmJsYWNrO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJnYigyMzMsIDIzMiwgMjMyKTtcclxuZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XHJcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IscmVkKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bHtcclxubWF4LXdpZHRoOiA2NDBweDtcclxufVxyXG4udmVydFRhYntcclxucGFkZGluZy1ibG9jay1zdGFydDogMTVweFxyXG59XHJcbi51cG9uIHVsLCBsaXtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLnVwb25UYWJsZXtcclxubWF4LXdpZHRoOiAxNTAwcHg7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5tYXJnaW4tbGVmdDogYXV0b1xyXG59XHJcbi51cHBlci1pbWFnZXtcclxubWF4LXdpZHRoOiAzMjBweDtcclxubWF4LWhlaWdodDogMzIwcHg7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbnBhZGRpbmctcmlnaHQ6IDIwcHhcclxufVxyXG4ucHJpY2UtaW5mb3tcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Нагревательный мат 160 Вт.</mat-card-title>\r\n\r\n  <mat-divider></mat-divider>\r\n  <div class=\"uponTable\">\r\n    <img class=\"upper-image\" src=\"assets/images/it2.jpg\" alt=\"Кабель плёнка 160 Ватт на кухню\" align=\"left\" hspace=\"25\">\r\n    <div class=\"container upon\">\r\n      <ul>\r\n        <li>\r\n          Тонкий двужильный нагревательный мат на сетке, с шагом кабеля 7см и диаметром 3мм с двойной изоляцией и\r\n          холодным\r\n          соединительным проводом длиной 3.5м.\r\n        </li>\r\n        <li>\r\n          В комплект поставки входит - упаковка, инструкция по установке и эксплуатации - включительно на русском\r\n          языке,\r\n          гарантийный талон, гофротрубка для установки термодатчика длинной 2м, пластиковая заглушка для гофротрубки,\r\n          подрозетник для установки терморегулятора.\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> м<sup><small>2</small></sup>/Вт </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\r\n    <p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z8\">\r\n    <mat-tab class=\"tab\" label=\"Описание\">\r\n      <div class=\"content\">\r\n        <div class=\"vertTab\"></div>\r\n        <p>\r\n          Мат изготовлен на основе резистивного нагревательного кабеля.\r\n          WÄRMEHAUS® MAT 160W/m2 - тонкий двужильный нагревательный мат на сетке, с шагом кабеля 7см и диаметром 3мм.\r\n          Армированный, экранированный, двужильный нагревательный кабель на сетке с двойной изоляцией, с холодным\r\n          проводом\r\n          длиной 3,5м, с герметичными армированной переходной и концевой муфтами.\r\n        </p>\r\n        <p>\r\n          Укладывается в слой клея или тонкий слой самовыравнивающегося раствора непосредственно под финишное покрытие\r\n          пола.\r\n          В основе работы резистивного нагревательного кабеля лежит свойство проводника с повышенным сопротивлением\r\n          выделять\r\n          тепло. Количество выделяемого тепла зависит от сопротивления. В конструкции кабеля применена прогрессивная\r\n          технология\r\n          с двумя нагревательными жилами, т.е. без возвратного токопроводящего проводника. Что способствует\r\n          равномерному\r\n          прогреву кабеля, позволяет уменьшить диаметр кабеля на мате до 3мм и увеличить срок службы системы.\r\n          Нагревательным\r\n          элементом служат сами токопроводящие жилы, изготовленные из металлического сплава и покрытые стойкой к\r\n          высоким\r\n          температурам изоляцией.\r\n        </p>\r\n        <p>\r\n          Важнейшим фактором, влияющим на качество и долговечность нагревательных систем являются характеристики\r\n          нагревательных\r\n          элементов. Производителем нагревательных элементов для WÄRMEHAUS® MAT является VOKA Vogtländisches Kabelwerk\r\n          GmbH\r\n          Германия - предприятие концерна WILMS GRUPPE.\r\n        </p>\r\n        <p>\r\n          Нагревательные маты WÄRMEHAUS® MAT 160W/m2 являются полностью готовыми к использованию нагревательными\r\n          системами.\r\n          Разработаны инженерами WÄRMEHAUSGmbH и производятся в соответствии с европейскими нормами EN 60335-1, EN\r\n          60335-2,\r\n          IEC\r\n          60800, а также в соответствии со стандартом по системам менеджмента качества ISO 9001 и стандартом по\r\n          системам\r\n          экологического менеджмента ISO 14001 на предприятиях концерна WILMS GRUPPE в Германии и Чехии. Секции\r\n          WÄRMEHAUS®\r\n          MAT\r\n          160W/m2 состоят из двужильного нагревательного кабеля закрепленного на стекловолоконной сетке с уникальной\r\n          армированной проходной и оконечной муфтами, оканчивающегося \" холодным\" концом длинной 3,5м.\r\n        </p>\r\n        <p>\r\n          Линейка нагревательных матов WÄRMEHAUS® MAT 160W/m2 представлена в 15 типоразмерах, имеет ширину 50см и\r\n          различную\r\n          длину в зависимости от необходимой площади обогрева. Мат предназначен для установки без формирования толстой\r\n          цементной стяжки под любое напольное покрытие с удельным тепловым сопротивлением не более 0,15W/m2. Один\r\n          соединительный \"холодный\" провод упрощает и ускоряет монтаж.\r\n        </p>\r\n        <p>\r\n          Изготавливается как нагревательный мат с двужильным экранированным нагревательным кабелем толщиной 3 мм.\r\n          Кабель\r\n          имеет\r\n          внутреннюю изоляцию из модифицированного полифениленоксида и наружную изоляцию из синтетического полиолефина\r\n          LSZH.\r\n          Кабель закреплен на сетке из стекловолокна и имеет один холодный соединительный провод длиной 3.5 м.\r\n          Герметичные\r\n          армированные переходная и концевая муфты.\r\n        </p>\r\n        <p>\r\n          В комплект поставки входит нагревательный мат, упаковка, инструкция по установке и эксплуатации -\r\n          включительно\r\n          на\r\n          русском языке, гарантийный талон, гофротрубка ø18мм длинной 2м для установки термодатчика , специальная\r\n          заглушка\r\n          для\r\n          гофротрубки, сервисная коробка (подрозетник), для установки терморегулятора.\r\n          WÄRMEHAUS® MAT 160W/m2 - тонкий двужильный нагревательный мат непосредственно под финишное покрытие пола,\r\n          например\r\n          керамическую плитку.\r\n        </p>\r\n        <p>\r\n          Преимуществом данной системы является простота монтажа. Идеально для обогрева стандартных квадратных и\r\n          прямоугольных\r\n          площадей. С помощью WÄRMEHAUS® MAT 160W/m2 возможно решать практически любые задачи по\r\n          комфортному/дополнительному\r\n          обогреву жилых помещений.\r\n          Двужильный (Twin conductor, one cold tail) нагревательный кабель для помещений.\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Строение кабеля\">\r\n      <h2>Строение нагревательного кабеля WÄRMEHAUS<sup><small class=\"h2small\">®</small></sup> MAT 160W/m<sup><small\r\n            class=\"h2small\">2</small></sup>:</h2>\r\n      <img src=\"assets/images/it2_4.jpg\" alt=\"Теплый пол кабель в разрезе\" align=\"left\" hspace=\"10\">\r\n      <div class=\"content\">\r\n        <p>\r\n          1. Внешняя оболочка кабеля WÄRMEHAUS® MAT 160W/m2 выполнена из синтетического полиолефина LSZH стойкого к\r\n          высоким,\r\n          до 105˚С, температурам материала изоляции толщиной 0,65мм.\r\n        </p>\r\n        <p>\r\n          2. Электрическую безопасность греющего кабеля обеспечивает два проводника из 7 луженых медных проволок\r\n          сечением\r\n          0,254мм2 каждая.\r\n        </p>\r\n        <p>\r\n          3. Внутренняя изоляция нагревательных жил выполнена из модифицированного полифениленоксида, долговечного и\r\n          стойкого\r\n          к высоким температурам материала изоляции.\r\n        </p>\r\n        <p>\r\n          4. Две нагревательные жилы обеспечивают отсутствие магнитных полей, а в совокупности с разнесенным по двум\r\n          сторонам\r\n          заземляющем проводником позволяют существенно уменьшить диаметр кабеля до 3,0мм.\r\n        </p>\r\n        <p>\r\n          5. Сплошной экран из алюминиевой фольги с PET защитой придает кабелю дополнительную прочность, герметичность,\r\n          равномерно распределяет тепловую энергию по всей длине нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          Греющий кабель соединен с холодным концом уникальной армированной муфтой, что добавляет и без того надежной\r\n          системе дополнительную прочность.\r\n          Нагревательный кабель WÄRMEHAUS® MAT 160W/m2 абсолютно герметичен, степень защиты - IP 67.\r\n          Нагревательные системы WÄRMEHAUS® MAT 160W/m2 славятся своими качеством, надежностью и безопасностью!\r\n          Качество,\r\n          проверенное временем!\r\n          Продукция сертифицирована в ТС. ЕАС сертификат № TC RU C-DE.АИ30.А.00674\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Рекомендовано\">\r\n      <div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Гостиная, спальня, кухня</mat-card-title>\r\n          <mat-card-content>\r\n            <img\r\n              src=\"assets/images/mats/0-02-05-58461f24b6d929d5841c8a16ab82d52a951e73a3dbf95676e0e4d895f8d1803f_8ee06f63.jpg\"\r\n              alt=\"Теплые полы для спален и гостиных\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Коридор, прихожая 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Кухня, гостиная 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              В комнатах с напольным покрытием из плитки температура пола всегда значительно холоднее и ходить там\r\n              босиком\r\n              не доставляет никакого удовольствия, особенно, осенью и зимой. Пол с подогревом легко устраняет этот\r\n              недостаток и привносит в помещение необходимый комфорт и уют.\r\n            </p>\r\n            <p>\r\n              В семьях с детьми вполне типична ситуация, когда ребенок играет, сидя или лежа на полу. Родители не\r\n              всегда\r\n              успевают проконтролировать этот момент и в будущем у малыша могут проявиться опасные заболевания от\r\n              постоянного нахождения на бетонной поверхности, пусть даже застеленной линолеумом или ковровым покрытием.\r\n              Если в квартире установлен теплый пол, маме с папой больше не придется переживать о здоровье своего чада\r\n              и\r\n              опасаться простуд, сквозняков и прочих неприятных моментов.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Ванная, туалет</mat-card-title>\r\n          <mat-card-content>\r\n            <img\r\n              src=\"assets/images/mats/0-02-05-b0ac4459aae2e5f89c95f70053cf2086728187915d1445b66000b08e0a9ca419_55c265cb.jpg\"\r\n              alt=\"Теплые полы для туалета и ванной комнаты\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Ванная комната 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Туалет 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Теплый пол можно подобрать практически под любой вид популярных сегодня напольных покрытий. Во всех\r\n              офисах и\r\n              торговых точках, специализирующихся на продаже греющего оборудования, менеджеры всегда дадут\r\n              квалифицированную консультацию относительно вопроса, какую систему лучше поставить под ламинат, паркет,\r\n              плитку, ковролин или линолеум.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Балкон, лоджия</mat-card-title>\r\n          <mat-card-content>\r\n            <img\r\n              src=\"assets/images/mats/0-02-05-bf3618212e827c0d33296e6560fb52d9e3754f7344a84131c268ace6bdaf5377_78955d1b — копия.jpg\"\r\n              alt=\"Теплые полы для утепленных и неутепленных балконов и лоджий\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Утепленый 200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Неутепленый 220-250/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Почти во всех многоквартирных домах на балконах и лоджиях не предусмотрено центральное отопление. В\r\n              результате эти помещения впитывают с улицы излишнюю сырость, таким образом ухудшая микроклимат во\r\n              внутренних\r\n              жилых помещениях. Нейтрализовать этот момент поможет только система теплый пол, полноценно\r\n              функционирующая\r\n              зимой и удобно отключающаяся на летний период времени.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WarmingMat160WComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarmingMat160WComponent", function() { return WarmingMat160WComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_data_heating_mat160W_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data/heating-mat160W-data */ "./src/data/heating-mat160W-data.ts");




var WarmingMat160WComponent = /** @class */ (function () {
    function WarmingMat160WComponent() {
        this.displayedColumns = ['name', 'nominal', 'price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](src_data_heating_mat160W_data__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_DATA_MAT_160W"]);
    }
    WarmingMat160WComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    WarmingMat160WComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], WarmingMat160WComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], WarmingMat160WComponent.prototype, "paginator", void 0);
    WarmingMat160WComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warming-mat160-w',
            template: __webpack_require__(/*! ./warming-mat160-w.component.html */ "./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.html"),
            styles: [__webpack_require__(/*! ./warming-mat160-w.component.css */ "./src/app/content/warmehaus/warming-mat160-w/warming-mat160-w.component.css")]
        })
    ], WarmingMat160WComponent);
    return WarmingMat160WComponent;
}());



/***/ }),

/***/ "./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n  .mat-form-field {\r\n    font-size: 17px;\r\n    width: 100%;\r\n  }\r\n  td, th {\r\n    width: 40%;\r\n  }\r\n  .mat-header-cell{\r\n      font-display: inline;\r\n      font-weight: bold;\r\n      font-size: 14px;\r\n      text-align: center;\r\n      cursor: pointer\r\n    }\r\n  @media only screen and (max-width: 768px) {\r\n    b {\r\n      font-size: 20px;\r\n    }\r\n  }\r\n  @media only screen and (max-width: 320px) {\r\n    b {\r\n      font-size: 10px;\r\n    }\r\n  }\r\n  /* td:nth-of-type(2){\r\n    font-weight: bold;\r\n  } */\r\n  mat-paginator{\r\n      font-weight: bold;\r\n      color: black\r\n  }\r\n  mat-card-title{\r\n      text-align: center\r\n  }\r\n  .table, .filter{\r\n    max-width:1280px;\r\n    margin-left: auto;\r\n    margin-right: auto\r\n  }\r\n  .cards{\r\n    width: 100%;\r\n    margin-top: 20px;\r\n  }\r\n  .recomind{\r\n    text-decoration: underline;\r\n  }\r\n  h2{\r\n    text-align: center;\r\n}\r\n  mat-divider{\r\n    height: 1px;\r\n    background-color: black\r\n}\r\n  .description{\r\n    \r\n  min-width: 80%;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  /* margin-left: 10%; */\r\n}\r\n  .h2small{\r\n  font-weight: bold;\r\n\r\n}\r\n  .mat-header-row{\r\n  background-color: rgb(233, 232, 232);\r\n}\r\n  mat-tab-group{\r\n  max-width: 1200px;\r\n  -webkit-margin-before: 2%;\r\n          margin-block-start: 2%;\r\n  margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n  .content{\r\n  margin: 30px\r\n}\r\n  ::ng-deep .mat-tab-list .mat-tab-labels .mat-tab-label-active {\r\n  color:black;\r\n  background-color:rgb(233, 232, 232);\r\nfont-weight: bold\r\n  }\r\n  ::ng-deep .mat-ink-bar {\r\n  background-color: var(--primary-color,red) !important;\r\n  }\r\n  ul{\r\n  max-width: 640px;\r\n}\r\n  .vertTab{\r\n  -webkit-padding-before: 15px;\r\n          padding-block-start: 15px\r\n}\r\n  .upon ul{\r\n  margin-left: auto;\r\nmargin-right: auto;\r\n}\r\n  .uponTable{\r\n  max-width: 1500px;\r\n  margin-left: auto;\r\n  margin-left: auto\r\n}\r\n  .upper-image{\r\n  max-width: 320px;\r\n  max-height: 320px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-right: 20px\r\n  }\r\n  .price-info{\r\n    padding-left: 20px;\r\n    padding-bottom: 15px\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC93YXJtZWhhdXMvd2FybWluZy1tYXQyMDAtdy93YXJtaW5nLW1hdDIwMC13LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFFQTtJQUNFLFVBQVU7RUFDWjtFQUNBO01BQ0ksb0JBQW9CO01BQ3BCLGlCQUFpQjtNQUNqQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCO0lBQ0Y7RUFDRjtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGO0VBRUE7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjtFQUNBOztLQUVHO0VBQ0g7TUFDSSxpQkFBaUI7TUFDakI7RUFDSjtFQUNBO01BQ0k7RUFDSjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQjtFQUNGO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLGtCQUFrQjtBQUN0QjtFQUNBO0lBQ0ksV0FBVztJQUNYO0FBQ0o7RUFDQTs7RUFFRSxjQUFjO0VBQ2QseUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7RUFDQTtFQUNFLGlCQUFpQjs7QUFFbkI7RUFDQTtFQUNFLG9DQUFvQztBQUN0QztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0lBQ2Ysa0JBQWtCO0FBQ3RCO0VBQ0E7RUFDRTtBQUNGO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsbUNBQW1DO0FBQ3JDO0VBQ0U7RUFFQTtFQUNBLHFEQUFxRDtFQUNyRDtFQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSw0QkFBd0I7VUFBeEI7QUFDRjtFQUNBO0VBQ0UsaUJBQWlCO0FBQ25CLGtCQUFrQjtBQUNsQjtFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQjtBQUNGO0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEI7RUFDQTtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3dhcm1laGF1cy93YXJtaW5nLW1hdDIwMC13L3dhcm1pbmctbWF0MjAwLXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLCB0aCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICAubWF0LWhlYWRlci1jZWxse1xyXG4gICAgICBmb250LWRpc3BsYXk6IGlubGluZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBiIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICBiIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiB0ZDpudGgtb2YtdHlwZSgyKXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH0gKi9cclxuICBtYXQtcGFnaW5hdG9ye1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IGJsYWNrXHJcbiAgfVxyXG4gIG1hdC1jYXJkLXRpdGxle1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICB9XHJcbiAgLnRhYmxlLCAuZmlsdGVye1xyXG4gICAgbWF4LXdpZHRoOjEyODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXHJcbiAgfVxyXG4gIC5jYXJkc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLnJlY29taW5ke1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbm1hdC1kaXZpZGVye1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xyXG59XHJcbi5kZXNjcmlwdGlvbntcclxuICAgIFxyXG4gIG1pbi13aWR0aDogODAlO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMiU7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEwJTsgKi9cclxufVxyXG4uaDJzbWFsbHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuLm1hdC1oZWFkZXItcm93e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMiwgMjMyKTtcclxufVxyXG5tYXQtdGFiLWdyb3Vwe1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMiU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgbWFyZ2luOiAzMHB4XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxpc3QgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMzLCAyMzIsIDIzMik7XHJcbmZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IscmVkKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxudWx7XHJcbiAgbWF4LXdpZHRoOiA2NDBweDtcclxufVxyXG4udmVydFRhYntcclxuICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxNXB4XHJcbn1cclxuLnVwb24gdWx7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbm1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4udXBvblRhYmxle1xyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvXHJcbn1cclxuLnVwcGVyLWltYWdle1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgbWF4LWhlaWdodDogMzIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHhcclxuICB9XHJcbiAgLnByaWNlLWluZm97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\">\r\n  <mat-card-title>Нагревательный мат 200 Вт.</mat-card-title>\r\n\r\n  <mat-divider></mat-divider>\r\n  <div class=\"uponTable\">\r\n    <img class=\"upper-image\" src=\"assets/images/ТЕПЛЫЙ ПОЛ WARMEHAUS MAT 200W 4 s800 4.jpg\"\r\n      alt=\"Кабель плёнка 200 Ватт на балкон и лоджию\" align=\"left\" hspace=\"25\">\r\n    <div class=\"container upon\">\r\n      <ul>\r\n        <li>\r\n          WÄRMEHAUS® MAT 200W/m<sup><small>2</small></sup> Германия - готовая к применению нагревательная система\r\n          ТЕПЛЫЙ\r\n          ПОЛ повышенной мощности под керамическую плитку, ламинат, линолеум.\r\n        </li>\r\n        <li>\r\n          Применяется для внутренней установки.\r\n        </li>\r\n        <li>\r\n          Рекомендован в : ВАННЫЕ КОМНАТЫ, САНУЗЛЫ, УТЕПЛЕННЫЕ ЛОДЖИИ И Т.Д. ; ОСНОВНОЙ ОБОГРЕВ * (См. Таб.№1)\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"filter\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Фильтр\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"mat-elevation-z8 table\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Progress Column -->\r\n\r\n      <ng-container matColumnDef=\"nominal\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> м<sup><small>2</small></sup>/Вт </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.nominal}} </td>\r\n      </ng-container>\r\n\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Тип </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.id}}. {{row.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Color Column -->\r\n      <ng-container matColumnDef=\"price\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Цена (бел.руб.) </th>\r\n        <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.price}},00 </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\r\n    <p class=\"price-info\"><b>Цены носят информационный характер.</b></p>\r\n  </div>\r\n\r\n\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z8\">\r\n    <mat-tab class=\"tab\" label=\"Описание\">\r\n      <mat-divider></mat-divider>\r\n\r\n      <div class=\"content\">\r\n        <div class=\"vertTab\"></div>\r\n        <p>\r\n          WÄRMEHAUS® MAT 200W/m<sup><small>2</small></sup> Германия - армированный экранированный двужильный\r\n          нагревательный\r\n          мат толщиной 3,0мм.\r\n          Применяется на том этапе строительства, когда стяжка полов уже сделана. Укладывается в слой клея (не более\r\n          10мм)\r\n          или тонкий слой самовыравнивающегося раствора непосредственно под финишное покрытие пола, без стяжки.\r\n        </p>\r\n        <p>\r\n          Предназначен для установки в ремонтируемых и \"тонких\" полах непосредственно под покрытие пола без\r\n          формирования\r\n          толстой цементной стяжки и устанавливается в основном под плитку в плиточный клей.\r\n\r\n          Высокая удельная мощность 200Вт/м2 позволяет не только достичь комфортной 24...26С˚ температуры пола даже в\r\n          межсезонье, но и проектировать системы отопления для основного обогрева.\r\n\r\n          Сплошной экран из алюминиевой фольги, луженая медная шина заземления и двужильная конструкция кабеля\r\n          полностью\r\n          защищают от ЭМ излучения.\r\n        </p>\r\n        <p>\r\n          *Рекомендовано для комфортного подогрева поверхности в помещениях с повышенной влажностью, санузлах, ванных\r\n          комнатах или основного обогрева жилых помещений.\r\n        </p>\r\n        <p>\r\n          *Допускается использование в помещениях с повышенными теплопотерями, например в хорошо утепленных лоджиях и\r\n          верандах в качестве основного обогрева.\r\n        </p>\r\n        <p>\r\n          Идеальное решение** для комфортного/дополнительного обогрева поверхности в помещениях с повышенной влажностью\r\n          или\r\n          основного обогрева жилых помещений.\r\n        </p>\r\n        <p>\r\n          **- монтаж кабеля в слой плиточного клея не более 1см. Гарантия 20лет.\r\n        </p>\r\n        <img src=\"assets/images/WarmehausTABs800.jpg\" alt=\"Таблица укладки теплых полов\">\r\n        <p>\r\n          Мат изготовлен на основе резистивного нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          WÄRMEHAUS® MAT 200W/m2 - тонкий двужильный нагревательный мат на сетке, с шагом кабеля 7см и диаметром 3мм.\r\n\r\n          Армированный, экранированный, двужильный нагревательный кабель на сетке с двойной изоляцией, с холодным\r\n          проводом\r\n          длиной 3,5м, с герметичными армированной переходной и концевой муфтами.\r\n\r\n          Укладывается в слой клея или тонкий слой самовыравнивающегося раствора непосредственно под финишное покрытие\r\n          пола.\r\n        </p>\r\n        <p>\r\n          В основе работы резистивного нагревательного кабеля лежит свойство проводника с повышенным сопротивлением\r\n          выделять тепло. Количество выделяемого тепла зависит от сопротивления. В конструкции кабеля применена\r\n          прогрессивная технология с двумя нагревательными жилами, т.е. без возвратного токопроводящего проводника. Что\r\n          способствует равномерному прогреву кабеля, позволяет уменьшить диаметр кабеля на мате до 3мм и увеличить срок\r\n          службы системы. Нагревательным элементом служат сами токопроводящие жилы, изготовленные из металлического\r\n          сплава\r\n          и покрытые стойкой к высоким температурам изоляцией.\r\n        </p>\r\n        <p>\r\n          Важнейшим фактором, влияющим на качество и долговечность нагревательных систем являются характеристики\r\n          нагревательных элементов. Производителем нагревательных элементов для WÄRMEHAUS® MAT является VOKA\r\n          Vogtländisches\r\n          Kabelwerk GmbH Германия - предприятие концерна WILMS GRUPPE.\r\n        </p>\r\n        <p>\r\n          Нагревательные маты WÄRMEHAUS® MAT 200W/m2 являются полностью готовыми к использованию нагревательными\r\n          системами.\r\n          Разработаны инженерами WÄRMEHAUS GmbH и производятся в соответствии с европейскими нормами EN 60335-1, EN\r\n          60335-2, IEC 60800, а также в соответствии со стандартом по системам менеджмента качества ISO 9001 и\r\n          стандартом\r\n          по системам экологического менеджмента ISO 14001 на предприятиях концерна WILMS GRUPPE в Германии и Чехии.\r\n          Секции\r\n          WÄRMEHAUS® MAT 200W/m2 состоят из двужильного нагревательного кабеля закрепленного на стекловолоконной сетке\r\n          с\r\n          уникальной армированной проходной и оконечной муфтами, оканчивающегося \" холодным\" концом длинной 3,5м.\r\n        </p>\r\n        <p>\r\n          Линейка нагревательных матов WÄRMEHAUS® MAT 200W/m2 представлена в 15 типоразмерах, имеет ширину 50см и\r\n          различную\r\n          длину в зависимости от необходимой площади обогрева. Кабель предназначен для установки без формирования\r\n          толстой\r\n          цементной стяжки под любое напольное покрытие с удельным тепловым сопротивлением не более 0,10W/m2. Один\r\n          соединительный \"холодный\" провод упрощает и ускоряет монтаж.\r\n        </p>\r\n        <p>\r\n          Изготавливается как нагревательный мат с двужильным экранированным нагревательным кабелем толщиной 3 мм.\r\n          Кабель\r\n          имеет внутреннюю изоляцию из фторополимера (тефлона) и наружную изоляцию из синтетического полиолефина LSZH.\r\n          Кабель закреплен на сетке из стекловолокна и имеет один холодный соединительный провод длиной 3.5 м.\r\n          Герметичные\r\n          армированные переходная и концевая муфты.\r\n        </p>\r\n        <p>\r\n          В комплект поставки входит нагревательный мат, упаковка, инструкция по установке и эксплуатации -\r\n          включительно\r\n          на\r\n          русском языке, гарантийный талон, гофротрубка ø18мм длинной 2м для установки термодатчика , специальная\r\n          заглушка\r\n          для гофротрубки, монтажная коробка.\r\n        </p>\r\n        <p>\r\n          WÄRMEHAUS® MAT 200W/m2 - тонкий двужильный нагревательный мат непосредственно под финишное покрытие пола,\r\n          например керамическую плитку.\r\n\r\n          Преимуществом данной системы является простота монтажа. Идеально для обогрева стандартных квадратных и\r\n          прямоугольных площадей. С помощью WÄRMEHAUS® MAT 200W/m2 возможно решать практически любые задачи по\r\n          комфортному/дополнительному/основному обогреву любых помещений.\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Строение кабеля\">\r\n      <h2>Строение нагревательного кабеля WÄRMEHAUS<sup><small class=\"h2small\">®</small></sup> MAT 200W/m<sup><small\r\n            class=\"h2small\">2</small></sup>:</h2>\r\n\r\n      <img src=\"assets/images/warmehauscab14wlogosc.jpg\" alt=\"Теплый пол кабель в разрезе\" align=\"left\" hspace=\"10\">\r\n      <div class=\"content\">\r\n        <p>\r\n          1. Две нагревательные жилы обеспечивают отсутствие магнитных полей, а в совокупности заземляющем проводником\r\n          позволяют существенно уменьшить диаметр кабеля до 3,0мм.\r\n        </p>\r\n        <p>\r\n          2. Внутренняя изоляция нагревательных жил выполнена из фторополимера (тефлона), наиболее долговечного и\r\n          стойкого\r\n          к высоким температурам материала изоляции нагревательных элементов.\r\n        </p>\r\n        <p>\r\n          3. Электрическую безопасность греющего кабеля обеспечивает луженый медный проводник сечением 0,80мм2.\r\n        </p>\r\n        <p>\r\n          4. Сплошной экран из алюминиевой фольги с PET защитой придает кабелю дополнительную прочность, герметичность,\r\n          равномерно распределяет тепловую энергию по всей длине нагревательного кабеля.\r\n        </p>\r\n        <p>\r\n          5. Внешняя оболочка кабеля WÄRMEHAUS® MAT 200W/m2 выполнена из термоустойчивого ПВХ стойкого к высоким, до\r\n          105˚С,\r\n          температурам материала изоляции толщиной 0,45мм.\r\n        </p>\r\n        <p>\r\n          Греющий кабель соединен с холодным концом уникальной армированной муфтой, что добавляет и без того надежной\r\n          системе дополнительную прочность.\r\n\r\n          Нагревательный кабель WÄRMEHAUS® MAT 200W/m2 абсолютно герметичен, степень защиты - IP 67.\r\n\r\n          Нагревательные системы WÄRMEHAUS® MAT 200W/m2 славятся своими качеством, надежностью и безопасностью!\r\n        </p>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Рекомендовано\">\r\n      <div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Гостиная, спальня, кухня</mat-card-title>\r\n          <mat-card-content>\r\n            <img\r\n              src=\"assets/images/mats/0-02-05-58461f24b6d929d5841c8a16ab82d52a951e73a3dbf95676e0e4d895f8d1803f_8ee06f63.jpg\"\r\n              alt=\"Теплые полы для спален и гостиных\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Коридор, прихожая 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Кухня, гостиная 160Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              В комнатах с напольным покрытием из плитки температура пола всегда значительно холоднее и ходить там\r\n              босиком\r\n              не доставляет никакого удовольствия, особенно, осенью и зимой. Пол с подогревом легко устраняет этот\r\n              недостаток и привносит в помещение необходимый комфорт и уют.\r\n            </p>\r\n            <p>\r\n              В семьях с детьми вполне типична ситуация, когда ребенок играет, сидя или лежа на полу. Родители не\r\n              всегда\r\n              успевают проконтролировать этот момент и в будущем у малыша могут проявиться опасные заболевания от\r\n              постоянного нахождения на бетонной поверхности, пусть даже застеленной линолеумом или ковровым\r\n              покрытием.\r\n              Если в квартире установлен теплый пол, маме с папой больше не придется переживать о здоровье своего\r\n              чада и\r\n              опасаться простуд, сквозняков и прочих неприятных моментов.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Ванная, туалет</mat-card-title>\r\n          <mat-card-content>\r\n            <img\r\n              src=\"assets/images/mats/0-02-05-b0ac4459aae2e5f89c95f70053cf2086728187915d1445b66000b08e0a9ca419_55c265cb.jpg\"\r\n              alt=\"Теплые полы для туалета и ванной комнаты\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Ванная комната 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Туалет 160-200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Теплый пол можно подобрать практически под любой вид популярных сегодня напольных покрытий. Во всех\r\n              офисах\r\n              и\r\n              торговых точках, специализирующихся на продаже греющего оборудования, менеджеры всегда дадут\r\n              квалифицированную консультацию относительно вопроса, какую систему лучше поставить под ламинат, паркет,\r\n              плитку, ковролин или линолеум.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с\r\n              этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n        <mat-card class=\"mat-elevation-z8 cards\">\r\n          <mat-card-title>Балкон, лоджия</mat-card-title>\r\n          <mat-card-content>\r\n            <img\r\n              src=\"assets/images/mats/0-02-05-bf3618212e827c0d33296e6560fb52d9e3754f7344a84131c268ace6bdaf5377_78955d1b — копия.jpg\"\r\n              alt=\"Теплые полы для утепленных и неутепленных балконов и лоджий\">\r\n            <p class=\"recomind\">Рекомендованная мощность:</p>\r\n            <ul>\r\n              <li>\r\n                Утепленый 200Вт/м<sup><small>2</small></sup>\r\n              </li>\r\n              <li>\r\n                Неутепленый 220-250/м<sup><small>2</small></sup>\r\n              </li>\r\n            </ul>\r\n            <p>\r\n              Почти во всех многоквартирных домах на балконах и лоджиях не предусмотрено центральное отопление. В\r\n              результате эти помещения впитывают с улицы излишнюю сырость, таким образом ухудшая микроклимат во\r\n              внутренних\r\n              жилых помещениях. Нейтрализовать этот момент поможет только система теплый пол, полноценно\r\n              функционирующая\r\n              зимой и удобно отключающаяся на летний период времени.\r\n            </p>\r\n            <p>\r\n              В помещениях с традиционно сырым микроклиматом (ванные комнаты, санузлы, кухни и пр.) очень часто на\r\n              стенах\r\n              и\r\n              потолке проявляются грибок и плесень, портящие внешний вид и ухудшающие общую атмосферу. Бороться с\r\n              этими\r\n              неприятными проявлениями практически невозможно, если конечно, не установить в проблемном помещении\r\n              греющую\r\n              напольную систему.\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WarmingMat200WComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarmingMat200WComponent", function() { return WarmingMat200WComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_data_heating_mat_200W_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/data/heating-mat-200W-data */ "./src/data/heating-mat-200W-data.ts");




var WarmingMat200WComponent = /** @class */ (function () {
    function WarmingMat200WComponent() {
        this.displayedColumns = ['name', 'nominal', 'price'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](src_data_heating_mat_200W_data__WEBPACK_IMPORTED_MODULE_3__["ELEMENT_DATA_MAT_200W"]);
    }
    WarmingMat200WComponent.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    WarmingMat200WComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], WarmingMat200WComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], WarmingMat200WComponent.prototype, "paginator", void 0);
    WarmingMat200WComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warming-mat200-w',
            template: __webpack_require__(/*! ./warming-mat200-w.component.html */ "./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.html"),
            styles: [__webpack_require__(/*! ./warming-mat200-w.component.css */ "./src/app/content/warmehaus/warming-mat200-w/warming-mat200-w.component.css")]
        })
    ], WarmingMat200WComponent);
    return WarmingMat200WComponent;
}());



/***/ }),

/***/ "./src/app/menu-components/breadcrumbs/breadcrumbs.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/menu-components/breadcrumbs/breadcrumbs.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.breadcrumb, a{\r\n    background: none;\r\n    font-weight: bold;\r\n    text-align: start;\r\n    font-size: 13px;\r\n    align-items: inline-start;\r\n    -webkit-margin-before: 8px;\r\n            margin-block-start: 8px;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n\r\n}\r\n.item, a {\r\n    margin-top: -1px;\r\n    color: white;\r\n    pointer-events: none;\r\n    margin-left: -14px;\r\n    margin-right: -5px;\r\n}\r\na:hover {\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\na:link{\r\n    color: white\r\n}\r\nspan{\r\n    color: white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QiwwQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCOztBQUVKO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWVudS1jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJyZWFkY3J1bWIsIGF7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGFsaWduLWl0ZW1zOiBpbmxpbmUtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxuXHJcbn1cclxuLml0ZW0sIGEge1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xyXG59XHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmE6bGlua3tcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcbnNwYW57XHJcbiAgICBjb2xvcjogd2hpdGVcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu-components/breadcrumbs/breadcrumbs.component.html":
/*!************************************************************************!*\
  !*** ./src/app/menu-components/breadcrumbs/breadcrumbs.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\r\n  <a class=\"breadcrumb-item\" *ngFor=\"let item of breadcrumbList; let i = index\" [class.active]=\"i===breadcrumbList.length-1\">\r\n    <a [routerLink]=\"item.path\" *ngIf=\"i!==breadcrumbList.length-1\">{{ item.name }}</a>\r\n    <a class=\"item\" *ngIf=\"i===breadcrumbList.length-1\">{{ item.name }}</a>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "./src/app/menu-components/breadcrumbs/breadcrumbs.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/menu-components/breadcrumbs/breadcrumbs.component.ts ***!
  \**********************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");




var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(_router, menuService) {
        this._router = _router;
        this.menuService = menuService;
        this.menu = [];
        this.breadcrumbList = [];
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        this.menu = this.menuService.getMenu();
        this.listenRouting();
    };
    BreadcrumbsComponent.prototype.listenRouting = function () {
        var _this = this;
        var routerUrl, routerList, target;
        this._router.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;
            if (routerUrl && typeof routerUrl === 'string') {
                target = _this.menu;
                _this.breadcrumbList.length = 0;
                routerList = routerUrl.slice(1).split('/');
                // tslint:disable-next-line:no-shadowed-variable
                routerList.forEach(function (router, index) {
                    target = target.find(function (page) { return page.path.slice(2) === router; });
                    _this.breadcrumbList.push({
                        name: target.name,
                        path: (index === 0) ? target.path : _this.breadcrumbList[index - 1].path + "/" + target.path.slice(2)
                    });
                    if (index + 1 !== routerList.length) {
                        target = target.children;
                    }
                });
                console.log(_this.breadcrumbList);
            }
        });
    };
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/app/menu-components/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./src/app/menu-components/breadcrumbs/breadcrumbs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/menu-components/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/menu-components/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    background-color: rgb(27, 23, 6);\r\n    color : white;\r\n    height: 100px;\r\n}\r\nstrong{\r\n    color: white\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAyMywgNik7XHJcbiAgICBjb2xvciA6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5zdHJvbmd7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu-components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/menu-components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"content has-text-centered\">\r\n      <strong>Copyright © 2018</strong> \r\n      <strong> by</strong>\r\n      <p><a href=\"http://warmehaus-minsk.by/\"> Warmehaus-minsk.by\r\n      </a></p>\r\n      \r\n</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/menu-components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/menu-components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/menu-components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/menu-components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/menu-components/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/menu-components/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\r\n    background-color: #ffcb03;\r\n    max-width: 100%;\r\n}\r\n.navbar-menu{\r\n    width: 60%;\r\n}\r\n.navbar-item{\r\n    margin-right: 5px;\r\n    margin-left: 5px;\r\n}\r\nbutton{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    align-items: center\r\n}\r\nbutton:focus {\r\n    outline: none;\r\n    border: 0;\r\n }\r\na:hover {\r\n     color: black;\r\n     text-decoration: none\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jb21wb25lbnRzL21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7Q0FDWjtBQUNBO0tBQ0ksWUFBWTtLQUNaO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9tZW51LWNvbXBvbmVudHMvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNiMDM7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5hdmJhci1tZW51e1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4ubmF2YmFyLWl0ZW17XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gfVxyXG4gYTpob3ZlciB7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/menu-components/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/menu-components/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-fixed-top\" role=\"navigation\" aria-label=\"main navigation\">\r\n\r\n  <div class=\"navbar-brand\">\r\n    <a class=\"navbar-item\" href=\"\">\r\n      <!-- href=\"#\" routerLink= \"\" routerLinkActive=\"active\" -->\r\n      <img src={{brand}} style='max-height: 38px'>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"burger\"><a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\"\r\n      data-target=\"navbarBasic\">\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n\r\n  <div id=\"navbarBasic\" class=\"navbar-menu\">\r\n    <a class=\"navbar-item\" href=\"#\" routerLink=\"/home\" routerLinkActive=\"active\">\r\n      Главная\r\n    </a>\r\n    <!-- <div class=\"navbar-item is-hoverable\">\r\n      <a class=\"navbar-link\">\r\n        <strong>Продукция</strong>\r\n      </a>\r\n\r\n      <div class=\"navbar-dropdown\">\r\n\r\n        <a class=\"navbar-item\" href=\"#\" routerLink=\"/warmehaus\" routerLinkActive=\"active\">\r\n          WARMEHAUS\r\n        </a>\r\n        <a class=\"navbar-item\">\r\n          Electrolux\r\n        </a>\r\n        <a class=\"navbar-item\">\r\n          Devi\r\n        </a>\r\n        <hr class=\"navbar-divider\">\r\n        <a class=\"navbar-item\">\r\n          Report an issue\r\n        </a>\r\n      </div>\r\n    </div> -->\r\n    <a class=\"navbar-item\">\r\n      Контакты\r\n    </a>\r\n<hr>\r\n    <div class=\"navbar-end\">\r\n      <a href=\"https://mail.google.com/mail/?view=cm&fs=1&to=3523204@gmail.com\" target=\"_blank\">\r\n        <button mat-fab color=\"warn\">\r\n          <mat-icon>email</mat-icon>\r\n        </button></a>\r\n\r\n      <button mat-fab color=\"warn\" (click)=\"openBottomSheet()\">\r\n        <mat-icon>phone</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/menu-components/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/menu-components/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _phones_sheet_phones_sheet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phones-sheet/phones-sheet.component */ "./src/app/menu-components/phones-sheet/phones-sheet.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(bottomSheet) {
        this.bottomSheet = bottomSheet;
        this.brand = 'assets/images/logo2.png';
    }
    MenuComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(_phones_sheet_phones_sheet_component__WEBPACK_IMPORTED_MODULE_2__["PhonesSheetComponent"]);
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu-components/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu-components/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
    ], MenuComponent);
    return MenuComponent;
}());

document.addEventListener('DOMContentLoaded', function () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function (el) {
            el.addEventListener('click', function () {
                var target = el.dataset.target;
                var $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});


/***/ }),

/***/ "./src/app/menu-components/phones-sheet/phones-sheet.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/menu-components/phones-sheet/phones-sheet.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    display: -webkit-flex; /* Safari */\r\n    -webkit-align-items: center; /* Safari 7.0+ */\r\n    display: inline-flex;\r\n    align-items: center;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\np{\r\n    text-align-last: center;\r\n    font-weight: bold;\r\n    margin-top: 10px\r\n}\r\n.divider{\r\n    margin-top: 15px\r\n}\r\n.contacts{\r\n    margin-left: 25%;\r\n    margin-right: 25%;\r\n    display: inline-flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jb21wb25lbnRzL3Bob25lcy1zaGVldC9waG9uZXMtc2hlZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQixFQUFFLFdBQVc7SUFDbEMsMkJBQTJCLEVBQUUsZ0JBQWdCO0lBQzdDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQjtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY29tcG9uZW50cy9waG9uZXMtc2hlZXQvcGhvbmVzLXNoZWV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAvKiBTYWZhcmkgKi9cclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogU2FmYXJpIDcuMCsgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG59XHJcbi5kaXZpZGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTVweFxyXG59XHJcblxyXG4uY29udGFjdHN7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu-components/phones-sheet/phones-sheet.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/menu-components/phones-sheet/phones-sheet.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n\r\n\r\n  <span mat-line>\r\n    <p>Связь через мессенджеры:</p>\r\n    <div class=\"contact-social contacts\">\r\n\r\n      <a mat-item href=\" https://t.me/warmehaus\" target=\"_blank\">\r\n        <img src=\"assets/images/telegram-7-569219.png\" alt=\"Телеграм вармхауз Минск\" height=\"55\" width=\"55\">\r\n      </a>\r\n\r\n      <a mat-item href=\"https://api.whatsapp.com/send?phone=375293523204\" target=\"_blank\">\r\n        <img src=\"assets/images/whatsapp-155-721985.png\" alt=\"Вотсап вармхауз Минск\" height=\"55\" width=\"55\">\r\n      </a>\r\n\r\n      <a mat-item href=\"viber://chat?number=+375293523204\">\r\n        <img src=\"assets/images/social-41-512.png\" alt=\"Viber вармхауз Минск\" height=\"55\" width=\"55\">\r\n      </a>\r\n\r\n    </div>\r\n  </span>\r\n\r\n  <span class=\"call\">\r\n    \r\n      <mat-divider class=\"divider\"></mat-divider>\r\n    <p >Позвонить:</p>\r\n  </span>\r\n\r\n  <a mat-list-item (click)=\"openLink($event)\">\r\n    <img src=\"assets/images/velcom_logo.png\" alt=\"Телефон вармхауз Минск\" height=\"42\" width=\"42\">\r\n    <span mat-line>\r\n      <a href=\"tel:+375293523204\">+375 (29) 352-32-04</a>\r\n    </span>\r\n  </a>\r\n\r\n  <a mat-list-item (click)=\"openLink($event)\">\r\n    <img src=\"assets/images/iOS-logo-300x300.png\" alt=\"Телефон вармхаус Минск\" height=\"42\" width=\"42\">\r\n    <span mat-line>\r\n      <a href=\"tel:+375295575980\">+375 (29) 557-59-80</a>\r\n    </span>\r\n  </a>\r\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/menu-components/phones-sheet/phones-sheet.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/menu-components/phones-sheet/phones-sheet.component.ts ***!
  \************************************************************************/
/*! exports provided: PhonesSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesSheetComponent", function() { return PhonesSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PhonesSheetComponent = /** @class */ (function () {
    function PhonesSheetComponent(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    PhonesSheetComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    PhonesSheetComponent.prototype.ngOnInit = function () {
    };
    PhonesSheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phones-sheet',
            template: __webpack_require__(/*! ./phones-sheet.component.html */ "./src/app/menu-components/phones-sheet/phones-sheet.component.html"),
            styles: [__webpack_require__(/*! ./phones-sheet.component.css */ "./src/app/menu-components/phones-sheet/phones-sheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"]])
    ], PhonesSheetComponent);
    return PhonesSheetComponent;
}());



/***/ }),

/***/ "./src/app/menu-components/toolbar/toolbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/menu-components/toolbar/toolbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".first{\r\n    height: 100px;\r\n}\r\n\r\n.second {\r\n    background-color: red;\r\n    height: 40px;\r\n}\r\n\r\n.third{\r\n    height: 40px;\r\n    background-color: black;\r\n}\r\n\r\n.container{\r\n    position: fixed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tZW51LWNvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlyc3R7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uc2Vjb25kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnRoaXJke1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu-components/toolbar/toolbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/menu-components/toolbar/toolbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  \r\n  <mat-toolbar-row class=\"second\">\r\n    <span></span>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row class=\"third\">\r\n    <div id=\"container\">\r\n    <app-breadcrumbs></app-breadcrumbs>\r\n  </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n"

/***/ }),

/***/ "./src/app/menu-components/toolbar/toolbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/menu-components/toolbar/toolbar.component.ts ***!
  \**************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/menu-components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/menu-components/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/safe-html.ts":
/*!******************************!*\
  !*** ./src/app/safe-html.ts ***!
  \******************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtml',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenu = function () {
        var menu = [
            { name: 'Главная', path: './home', children: [] },
            { name: 'Wärmehaus', path: './warmehaus', children: [
                    { name: 'Маты 160Вт', path: './mat-160W' },
                    { name: 'Маты 200Вт', path: './mat-200W' },
                    { name: 'Двужильный CAB 11W THIN', path: './cab-11W-thin' },
                    { name: 'Двужильный CAB 14W THIN', path: './cab-14W-thin' },
                    { name: 'Двужильный CAB 20W UV', path: './cab-20W-uv-protection' },
                    { name: 'Терморегуляторы', path: './termostats' },
                    { name: 'Инфракрасная плёнка', path: './films' },
                    { name: 'Антиобледенение', path: './anti-icing' },
                ]
            },
        ];
        return menu;
    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/data/anti-icing/anti-icing-systems-data.ts":
/*!********************************************************!*\
  !*** ./src/data/anti-icing/anti-icing-systems-data.ts ***!
  \********************************************************/
/*! exports provided: ELEMENT_ANTI_ICING_SYSTEMS_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_ANTI_ICING_SYSTEMS_DATA", function() { return ELEMENT_ANTI_ICING_SYSTEMS_DATA; });
// An array of termostats with markup (Safe HTML used).
var ELEMENT_ANTI_ICING_SYSTEMS_DATA = [
    // Подогрев желобов WÄRMEHAUS SELFREG 30W
    {
        id: 138,
        name: 'Подогрев желобов WÄRMEHAUS SELFREG 30W',
        nominal: 'CAB WÄRMEHAUS SELFREG 30W - 1,0м.п - 30Вт.',
        price: 19.00,
        description: "\n      <div>\n  <hr>\n      <h4 align=\"center\">\n      \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n    </h4>\n    <div class=\"container text\">\n    <i>\u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0433\u0440\u0435\u044E\u0449\u0438\u0439 \u043A\u0430\u0431\u0435\u043B\u044C W\u00C4RMEHAUS<sup>\u00AE</sup> SELFREG 30-2-AO.</i>\n    <style>\n    li{\n      text-align: left;\n    }\n    </style>\n    <ul>\n\t<li>\u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u0430\u043C\u0438.</li>\n    <li>\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0433\u0440\u0435\u044E\u0449\u0435\u0439 \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u0432\u043E\u043A\u0440\u0443\u0433 \u0434\u0432\u0443\u0445 \u043C\u0435\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u043E\u0432 \u0441\u0435\u0447\u0435\u043D\u0438\u0435\u043C 2\u04451,23\u043C\u043C2\n     \u0441 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435\u043C \u0438\u0437 \u043E\u043B\u043E\u0432\u0430. \u041F\u0440\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0441\u0435\u0440\u0434\u0446\u0435\u0432\u0438\u043D\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u043B\u0438 \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u0442 \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0443\n      \u0442\u0435\u043F\u043B\u0430 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</li>\n    <li><strong>\u041B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C 30\u0412\u0442/\u043C \u043F\u0440\u0438 10\u0421</strong></li>\n    <li> \u041F\u043B\u043E\u0441\u043A\u0438\u0439 \u0441\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0431\u0435\u043B\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C\u0438 0,5\u04451,2\u0441\u043C.\n     \u0421 \u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0435\u0439, \u044D\u043A\u0440\u0430\u043D\u043E\u043C \u0438\u0437 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0444\u043E\u043B\u044C\u0433\u0438.</li>\n</ul>\n    <hr>\n      <h4 align=\"center\">\n      \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n    </h4>\n    <div id=\"container\" align=\"center\" class=\"imageCont\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/d1bb05bb7e0f17d2f93a49bb743ee266.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/454abae29581bb5f51b38334967cd1d3.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0441\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/23d42ebd69420e1afd5480fef4c64525.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/SELFREG 30-2-AO.png \"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n    </div>\n    <hr>\n    </div>\n      ",
        picPath: 'assets/images/anti-icing/SELFREG 30/SELFREG 30-2-AO.png',
        picAlt: 'Кабель антиобледенения и топки снега'
    },
    // Подогрев желобов WÄRMEHAUS SELFREG 40W
    {
        id: 139,
        name: 'Подогрев желобов WÄRMEHAUS SELFREG 40W',
        nominal: 'CAB WÄRMEHAUS SELFREG 40W - 1,0м.п - 40Вт.',
        price: 21.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0433\u0440\u0435\u044E\u0449\u0438\u0439 \u043A\u0430\u0431\u0435\u043B\u044C W\u00C4RMEHAUS<sup>\u00AE</sup> SELFREG 40-2-AO.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n\t<li>\u041B\u0435\u043D\u0442\u043E\u0447\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u043F\u0430\u0440\u0430\u043B\u043B\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u0430\u043C\u0438.</li>\n    <li>\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0433\u0440\u0435\u044E\u0449\u0435\u0439 \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D \u0432\u043E\u043A\u0440\u0443\u0433 \u0434\u0432\u0443\u0445 \u043C\u0435\u0434\u043D\u044B\u0445 \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u043E\u0432 \u0441\u0435\u0447\u0435\u043D\u0438\u0435\u043C 2\u04451,23\u043C\u043C2\n    \u0441 \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u0435\u043C \u0438\u0437 \u043E\u043B\u043E\u0432\u0430. \u041F\u0440\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0441\u0435\u0440\u0434\u0446\u0435\u0432\u0438\u043D\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u043B\u0438 \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u0442 \u0432\u044B\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0442\u0435\u043F\u043B\u0430\n    \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</li>\n    <li><strong>\u041B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C 40\u0412\u0442/\u043C \u043F\u0440\u0438 10\u0421</strong></li>\n    <li>\u041F\u043B\u043E\u0441\u043A\u0438\u0439 \u0441\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u0431\u0435\u043B\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u0430\u043C\u0438 0,5\u04451,2\u0441\u043C. \u0421 \u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u0438\u0437\u043E\u043B\u044F\u0446\u0438\u0435\u0439,\n    \u044D\u043A\u0440\u0430\u043D\u043E\u043C \u0438\u0437 \u0430\u043B\u044E\u043C\u0438\u043D\u0438\u0435\u0432\u043E\u0439 \u0444\u043E\u043B\u044C\u0433\u0438.</li>\n</ul>\n        <hr>\n        <h4 align=\"center\">\n      \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n    </h4>\n    <div id=\"container\" align=\"center\" class=\"imageCont\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/d1bb05bb7e0f17d2f93a49bb743ee266.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/454abae29581bb5f51b38334967cd1d3.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0441\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/23d42ebd69420e1afd5480fef4c64525.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n    <img src=\"assets/images/anti-icing/SELFREG 30/SELFREG 30-2-AO.png \"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n    </div>\n    <hr>\n    </div>\n      ",
        picPath: 'assets/images/anti-icing/SELFREG 30/SELFREG 30-2-AO.png',
        picAlt: 'Кабель антиобледенения и топки снега'
    },
    // Датчик грунта WÄRMEHAUS ETOG
    {
        id: 140,
        name: 'Датчик грунта WÄRMEHAUS ETOG',
        nominal: 'Датчик температуры и влажности',
        price: 570.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0414\u0430\u0442\u0447\u0438\u043A \u0433\u0440\u0443\u043D\u0442\u0430 \u0442\u0438\u043F\u0430 W\u00E4rmehaus ETOG GROUND SENSOR \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432 \u0433\u0440\u0443\u043D\u0442 \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445.\n        \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C. \u041C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0439 \u043A\u0430\u0431\u0435\u043B\u044C 10\u043C.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n    <ul>\n        <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442\u043E\u043C W\u00E4rmehaus \u0415\u0422\u041E2.</li>\n        <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442\u043E\u043C W\u00E4rmehaus \u0415\u0422R2.</li>\n        <li>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443.</li>\n        <li>\u041C\u043E\u043D\u0442\u0430\u0436 \u043D\u0430 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u044F\u0445. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP68.</li>\n        <li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0412/\u0414 32X60 \u043C\u043C.</li>\n    </ul>\n        <hr>\n        <h4 align=\"center\">\n      \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n    </h4>\n    <div id=\"container\" align=\"center\" class=\"imageCont\">\n    <img src=\"assets/images/anti-icing/W\u00C4RMEHAUS ETOG/ETOG 55.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0447\u0432\u044B\">\n    <img src=\"assets/images/anti-icing/W\u00C4RMEHAUS ETOG/f3d266328bb2ffd241bc00e7a22f04c7.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0447\u0432\u044B \u0441\u0445\u0435\u043C\u0430 \u043C\u043E\u043D\u0442\u0430\u0436\u0430\">\n    <img src=\"assets/images/anti-icing/W\u00C4RMEHAUS ETOG/1e864cd6ebc7a3563b3e44a750cead57.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0447\u0432\u044B \u0441\u0445\u0435\u043C\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F\">\n    <img src=\"assets/images/anti-icing/W\u00C4RMEHAUS ETOG/8387ece9ec51a2aa4571fd1adffcf522.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\n    alt=\"\u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u0447\u0432\u044B \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043F\u0440\u0438\u0431\u043E\u0440\u0430\">\n    </div>\n    <hr>\n    </div>\n      ",
        picPath: 'assets/images/anti-icing/WÄRMEHAUS ETOG/ETOG 55.jpg',
        picAlt: 'Датчик температуры и влажности WÄRMEHAUS ETOG'
    },
    // Датчик влажности WÄRMEHAUS ETOR
    {
        id: 141,
        name: 'Датчик влажности WÄRMEHAUS ETOR',
        nominal: 'Датчик снеготаяния - антиобледенения',
        price: 475.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0414\u0430\u0442\u0447\u0438\u043A \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 W\u00C4RMEHAUS ETOR \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F\n         \u0437\u0430 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 \u0430\u043D\u0442\u0438\u043E\u0431\u043B\u0435\u0434\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0440\u043E\u0432\u043B\u044F\u0445.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n        <li>\u0414\u0430\u0442\u0447\u0438\u043A \u0434\u043B\u044F \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u043E\u0432 \u0438 \u043A\u0440\u043E\u0432\u043B\u0438\n        <span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">W\u00E4rmehaus</span></span>\n         ETOR \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0432 \u0436\u0435\u043B\u043E\u0431\u0430\u0445, \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0445 \u0442\u0440\u0443\u0431\u0430\u0445 \u0438 \u0442. \u043F.</li>\n        <li>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C.</li>\n        <li>\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438 \u0441 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u043C \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B ETF.</li>\n\t<li>\u0414\u0430\u0442\u0447\u0438\u043A \u0434\u043B\u044F \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u043E\u0432&nbsp;W\u00E4rmehaus ETOR-55: \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C.</li>\n\t<li>\u041C\u043E\u043D\u0442\u0430\u0436 \u0432 \u0436\u0435\u043B\u043E\u0431\u0430\u0445 \u0438 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0445 \u0442\u0440\u0443\u0431\u0430\u0445. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP68.</li>\n\t<li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0414) 16/28/110 \u043C\u043C.</li>\n</ul>\n        <hr>\n        <h4 align=\"center\">\n      \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n    </h4>\n    <div id=\"container\" align=\"center\" class=\"imageCont\">\n    <img src=\"assets/images/anti-icing/W\u00C4RMEHAUS ETOR/\u0414\u0430\u0442\u0447\u0438\u043A \u0432\u043B\u0430\u0433\u0438 W\u00C4RMEHAUS ETOR.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0414\u0430\u0442\u0447\u0438\u043A \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F - \u0430\u043D\u0442\u0438\u043E\u0431\u043B\u0435\u0434\u0435\u043D\u0435\u043D\u0438\u044F\">\n    </div>\n    <hr>\n    </div>\n      ",
        picPath: 'assets/images/anti-icing/WÄRMEHAUS ETOR/Датчик влаги WÄRMEHAUS ETOR.jpg',
        picAlt: 'Датчик снеготаяния - антиобледенения WÄRMEHAUS ETOR'
    },
    // Терморегулятор WÄRMEHAUS ETO2
    {
        id: 142,
        name: 'Терморегулятор WÄRMEHAUS ETO2',
        nominal: 'Терморегулятор снеготаяния - антиобледенения',
        price: 722.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS ETO2 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\n        \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F \u043D\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445 \u0438 \u0430\u043D\u0442\u0438\u043E\u0431\u043B\u0435\u0434\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0440\u043E\u0432\u043B\u044F\u0445.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          W\u00E4rmehaus E\u0422\u041E2 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u043A\n          \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u043A\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0433\u043E, \u0442\u0430\u043A \u0438 \u0432\u043E\u0434\u044F\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u0430.\n          \u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u044B\u0445\u043E\u0434\u043E\u043C\n          \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0434\u0435\u043B\u0430\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043A\u0430\u043A \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0442\u0430\u043A \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u043E\u0439.\n          </li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F / \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F.</span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">2 \u0437\u043E\u043D\u044B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F.</span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u041A\u0440\u044B\u0448\u0438 \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438, \u0440\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0432 \u043E\u0434\u043D\u043E \u0438 \u0442\u043E \u0436\u0435 \u0432\u0440\u0435\u043C\u044F. </span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0442\u0430\u044F\u043D\u0438\u044F \u043B\u044C\u0434\u0430 \u0438 \u0441\u043D\u0435\u0433\u0430 \u043D\u0430 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445 \u0438 \u0432 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0430\u0445.</span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438. </span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043B\u0438 \u0432\u043E\u0434\u044F\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439.</span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u041A\u043E\u0434\u0438\u0440\u0443\u044E\u0449\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u0438 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442\n   \u043F\u0440\u043E\u0441\u0442\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0432\u043D\u0443\u044E \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443. </span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u0420\u0435\u043B\u0435 \u0441\u0438\u0433\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u0441\u0438\u0433\u043D\u0430\u043B\u0430. </span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u0412\u044B\u0431\u043E\u0440 \u044F\u0437\u044B\u043A\u0430. </span></span></span></p>\n\t</li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\"><span style=\"color:black\">\n  \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 2 \u0433\u043E\u0434\u0430.</span></span></span></p>\n\t</li>\n</ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n\t<li>\u0422\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442&nbsp;W\u00E4rmehaus \u0415\u0422\u041E2-4550:</li>\n\t<li>\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 220-240\u0412 \u00B1 10%, 50-60 \u0413\u0446.</li>\n\t<li>\u041F\u0435\u0440\u0435\u043F\u0430\u0434 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 1,0\u00B0\u0421 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435.</li>\n\t<li>\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 -20/+10\u00B0\u0421.</li>\n\t<li>\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0442\u0430\u0439\u043C\u0435\u0440 \u0434\u043B\u044F \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F 0-6 \u0447\u0430\u0441\u043E\u0432.</li>\n\t<li>\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0435 \u0440\u0435\u043B\u0435 3\u042516\u0410, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0440\u0435\u043B\u0435 2 \u0437\u043E\u043D\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0412\u044B\u0445\u043E\u0434 3\u042516\u0410, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0440\u0435\u043B\u0435.</li>\n\t<li>\u0421\u0438\u0433\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0440\u0435\u043B\u0435 1\u04255\u0410.</li>\n\t<li>\u0412\u043E\u0434\u044F\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043D\u0430\u0433\u0440\u0435\u0432\u0430 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 3-\u0445 \u0438\u043B\u0438 4-\u0445 \u0445\u043E\u0434\u043E\u0432\u044B\u043C \u043A\u0440\u0430\u043D\u043E\u043C, \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043D\u0430\u0441\u043E\u0441\u043E\u043C, \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043D\u0430\u0441\u043E\u0441\u043E\u043C.</li>\n\t<li>\u0414\u0438\u0441\u043F\u043B\u0435\u0439 \u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439.</li>\n\t<li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B 0/+50\u00B0\u0421.</li>\n\t<li>\u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP20.</li>\n\t<li>\u0412\u0435\u0441 600 \u0433.</li>\n\t<li>\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0431\u0435\u0437 \u043A\u0440\u044B\u0448\u043A\u0438 (\u0412/\u0428/\u0413) 90/156/45 \u043C\u043C.</li>\n\t<li>\u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0441 \u043A\u0440\u044B\u0448\u043A\u043E\u0439 (\u0412/\u0428/\u0413) 170/162/45 \u043C\u043C.</li>\n  <li>\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u043E\u0433\u043E \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u0430: \u0412\u041A\u043B/\u0437\u0435\u043B\u0435\u043D\u044B\u0439- \u041D\u0430 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442 \u043F\u043E\u0434\u0430\u043D\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u0435.\n  \u041D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u044C/\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0435\u0438\u0441\u043F\u0440\u0430\u0432\u043D\u043E\u0441\u0442\u0438.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0433\u0440\u0443\u043D\u0442\u0430&nbsp;W\u00E4rmehaus ETOG-55: \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\n  \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443. \u041C\u043E\u043D\u0442\u0430\u0436 \u041D\u0430 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u044F\u0445 \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP68.\n  \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0412/\u0414 32X60 \u043C\u043C.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0434\u043B\u044F \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u043E\u0432&nbsp;W\u00E4rmehaus ETOR-55: \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\n  \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C. \u041C\u043E\u043D\u0442\u0430\u0436 \u0432 \u0436\u0435\u043B\u043E\u0431\u0430\u0445 \u0438 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0445 \u0442\u0440\u0443\u0431\u0430\u0445. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP68. \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430\n  \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0414) 16/28/110 \u043C\u043C.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B&nbsp;W\u00E4rmehaus ETF-744/99: \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\n  \u041D\u0430\u0440\u0443\u0436\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443. \u041C\u043E\u043D\u0442\u0430\u0436 \u041D\u0430\u0441\u0442\u0435\u043D\u043D\u044B\u0439. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP54. \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439\n  \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0422) 86/45/35 \u043C\u043C.</li>\n</ul>\n</div>\n        </div>\n          <h4 align=\"center\">\n         \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n        </h4>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/anti-icing/outdoor-termostats/W\u00C4RMEHAUS ETO2/cb0a6eec2943f768fcadffa22dcfcaf9.jpg\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/anti-icing/outdoor-termostats/WÄRMEHAUS ETO2/ТЕПЛЫЙ_ПОЛ_ТЕРМОРЕГУЛЯТОР_WARMEHAUS_ETO2.jpg',
        picAlt: 'Терморегулятор снеготаяния - антиобледенения WÄRMEHAUS ETO2'
    },
    // Терморегулятор WÄRMEHAUS ETR2
    {
        id: 143,
        name: 'Терморегулятор WÄRMEHAUS ETR2',
        nominal: 'Терморегулятор снеготаяния - антиобледенения',
        price: 456.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS ETR2 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\n         \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F \u043D\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445 \u0438 \u0430\u043D\u0442\u0438\u043E\u0431\u043B\u0435\u0434\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0440\u043E\u0432\u043B\u044F\u0445.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n  <li><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">W\u00E4rmehaus </span></span>\n  ETR2 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F \u043D\u0430 \u043B\u044E\u0431\u044B\u0445 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u0445. \u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438&nbsp;\n  <span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">W\u00E4rmehaus</span></span>\n   ETR2 \u0432 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438 \u0441 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0438 \u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043A\u0438 \u0437\u0435\u043C\u043B\u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u043C\u0438 \u043E\u0442 \u0441\u043D\u0435\u0433\u0430.\n   </li>\n  <li>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043E\u0434\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E, \u043F\u0440\u0438 \u043E\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0438\u0436\u0435\n   \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 \u0432\u043B\u0430\u0433\u0438 \u043D\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0435 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438.\n   </li>\n   <li><span style=\"font-size:larger\"><span style=\"color:black\">\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\n    \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F \u043D\u0430 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u0445 \u0443\u0447\u0430\u0441\u0442\u043A\u0430\u0445 \u0438 \u0432 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0430\u0445.</span></span></li>\n   <li><span style=\"font-size:larger\">\u041A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0438 \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438.</span></li>\n   <li><span style=\"font-size:larger\">\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0433\u0440\u0443\u043D\u0442\u0430.</span></li>\n   <li><span style=\"font-size:larger\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0434\u043E 3600W.</span></li>\n   <li><span style=\"font-size:larger\">\u0414\u043B\u044F \u043A\u0440\u044B\u0448, \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u043E\u0432, \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u043E\u043A.</span></li>\n   <li><span style=\"font-size:larger\">\u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438.</span></li>\n   <li>\n   <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n   <span style=\"color:black\">\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 2 \u0433\u043E\u0434\u0430.</span></span></span></p>\n   </li>\n </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n\t<li>\u0422\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442&nbsp;W\u00E4rmehaus \u0415\u0422R2</li>\n\t<li>\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 220-240\u0412 \u00B1 10%, 50-60 \u0413\u0446.</li>\n\t<li>\u041F\u0435\u0440\u0435\u043F\u0430\u0434 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 1,0\u00B0\u0421 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435.</li>\n\t<li>\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 0/+10\u00B0\u0421.</li>\n\t<li>\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0438 \u043F\u043E\u0441\u043B\u0435 \u0441\u0442\u0430\u0438\u0432\u0430\u043D\u0438\u044F \u0434\u043E 5 \u0447\u0430\u0441\u043E\u0432.</li>\n\t<li>\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0435 \u0440\u0435\u043B\u0435 16\u0410, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0440\u0435\u043B\u0435.</li>\n\t<li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -10/+50\u00B0\u0421.</li>\n\t<li>\u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP20.</li>\n\t<li>\u0412\u0435\u0441 600 \u0433.</li>\n\t<li>\u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0413) 85/52/59 \u043C\u043C.</li>\n\t<li>\u0424\u0443\u043D\u043A\u0446\u0438\u0438 \u0441\u0432\u0435\u0442\u043E\u0434\u0438\u043E\u0434\u043D\u043E\u0433\u043E \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u0430: \u0412\u041A\u043B/\u0437\u0435\u043B\u0435\u043D\u044B\u0439- \u043D\u0430 \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442 \u043F\u043E\u0434\u0430\u043D\u043E \u043F\u0438\u0442\u0430\u043D\u0438\u0435.</li>\n\t<li>\u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u0432\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u0438.</li>\n\t<li>\u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</li>\n\t<li>\u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0433\u0440\u0443\u043D\u0442\u0430&nbsp;W\u00E4rmehaus ETOG-55: \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443.\n   \u041C\u043E\u043D\u0442\u0430\u0436 \u041D\u0430 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u0445 \u043F\u043B\u043E\u0449\u0430\u0434\u044F\u0445 \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP68. \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421\n    \u0420\u0430\u0437\u043C\u0435\u0440\u044B \u0412/\u0414 32X60 \u043C\u043C.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0434\u043B\u044F \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u043E\u0432&nbsp;W\u00E4rmehaus ETOR-55: \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C.\n   \u041C\u043E\u043D\u0442\u0430\u0436 \u0432 \u0436\u0435\u043B\u043E\u0431\u0430\u0445 \u0438 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0445 \u0442\u0440\u0443\u0431\u0430\u0445. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP68. \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B\n    -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0414) 16/28/110 \u043C\u043C.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B&nbsp;W\u00E4rmehaus ETF-744/99: \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u041D\u0430\u0440\u0443\u0436\u043D\u0443\u044E\n   \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443. \u041C\u043E\u043D\u0442\u0430\u0436 \u041D\u0430\u0441\u0442\u0435\u043D\u043D\u044B\u0439. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP54. \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421\n    \u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0422) 86/45/35 \u043C\u043C.</li>\n</ul>\n</div>\n        </div>\n          <h4 align=\"center\">\n         \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n        </h4>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/anti-icing/outdoor-termostats/W\u00C4RMEHAUS ETR2/978c36fc4db9da5352b3e11552f06146.jpg\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        </div>\n      ",
        picPath: 'assets/images/anti-icing/outdoor-termostats/WÄRMEHAUS ETR2/ТЕПЛЫЙ_ПОЛ_ТЕРМОРЕГУЛЯТОР_WARMEHAUS_ETR2.jpg',
        picAlt: 'Терморегулятор снеготаяния - антиобледенения WÄRMEHAUS ETR2'
    },
    // Терморегулятор WÄRMEHAUS ETR/F
    {
        id: 144,
        name: 'Терморегулятор WÄRMEHAUS ETR/F',
        nominal: 'Терморегулятор - антиобледенения',
        price: 285.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS ETR/F\n         \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F \u0430\u043D\u0442\u0438\u043E\u0431\u043B\u0435\u0434\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0440\u043E\u0432\u043B\u044F\u0445.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n  <li><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">W\u00E4rmehaus\n  </span></span>ETR/F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u044B\u0445 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430\u0445.\n  \u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438&nbsp;<span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  W\u00E4rmehaus</span></span> ETR/F \u0432 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438 \u0441 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F, \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0438 \u0438 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0443\u0447\u0430\u0441\u0442\u043A\u0438 \u043A\u0440\u043E\u0432\u043B\u0438 \u043E\u0442 \u043D\u0430\u043B\u0435\u0434\u0438.</li>\n  <li>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043F\u0440\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0434\u0435\u043B\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E.</li>\n\t<li><span style=\"font-size:larger\"><span style=\"color:black\">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F \u043D\u0430 \u043A\u0440\u043E\u0432\u043B\u044F\u0445 \u0438 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u0430\u0445.</span></span></li>\n\t<li><span style=\"font-size:larger\">\u0420\u0430\u0431\u043E\u0442\u0430 \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u043C\u0443 \u0434\u0430\u0442\u0447\u0438\u043A\u0443 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430\u0445.</span></li>\n\t<li><span style=\"font-size:larger\">\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435.</span></li>\n\t<li><span style=\"font-size:larger\">\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F, \u0438\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u043D\u043E\u0433\u043E \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u0430.</span></li>\n\t<li><span style=\"font-size:larger\">\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0438 \u0434\u043E 3600\u0412\u0442.</span></li>\n\t<li><span style=\"font-size:larger\">\u0414\u043B\u044F \u043A\u0440\u044B\u0448 \u0438 \u0432\u043E\u0434\u043E\u0441\u0442\u043E\u043A\u043E\u0432.</span></li>\n\t<li><span style=\"font-size:larger\">\u041F\u0440\u043E\u0441\u0442\u043E\u0442\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438.</span></li>\n\t<li>\n  <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\">\n  <span style=\"color:black\">\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 2 \u0433\u043E\u0434\u0430.</span></span></span></p>\n\t</li>\n</ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n\t<li>\u0422\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442&nbsp;W\u00E4rmehaus \u0415\u0422R/F \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0443\u0445\u043E\u0434\u0430.</li>\n\t<li>\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 220-240\u0412 \u00B1 10%, 50-60 \u0413\u0446.</li>\n\t<li>\u041F\u0435\u0440\u0435\u043F\u0430\u0434 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 1,0\u00B0\u0421 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435.</li>\n\t<li>\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 +10\u00B0/-15\u00B0\u0421.</li>\n\t<li>\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0440\u0442\u0430.</li>\n\t<li>\u041F\u043E\u0442\u0440\u0435\u0431\u043B\u044F\u0435\u043C\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C 3\u0412\u0442.</li>\n\t<li>\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0435 \u0440\u0435\u043B\u0435 16\u0410, \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0440\u0435\u043B\u0435.</li>\n\t<li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -10/+50\u00B0\u0421.</li>\n\t<li>\u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP20.</li>\n\t<li>\u0412\u0435\u0441 600 \u0433.</li>\n\t<li>\u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0413) 85/52/59 \u043C\u043C.</li>\n\t<li>\u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F:\n\t<ul>\n\t\t<li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0432\u044B\u0448\u0435 \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 - \u0436\u0435\u043B\u0442\u044B\u0439.</li>\n\t\t<li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u043D\u0438\u0436\u0435 \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 - \u0437\u0435\u043B\u0435\u043D\u044B\u0439.</li>\n\t\t<li>\u0420\u0435\u043B\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E - \u043A\u0440\u0430\u0441\u043D\u044B\u0439.</li>\n\t</ul>\n\t</li>\n\t<li>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432 \u0437\u043E\u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0434\u0430\u0442\u0447\u0438\u043A\u0430. \u041C\u043E\u043D\u0442\u0430\u0436 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u043D\u0430 \u043D\u0430\u0440\u0443\u0436\u043D\u044B\u0445 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F\u0445.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B&nbsp;W\u00E4rmehaus ETF-744/99:\n   \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u041D\u0430\u0440\u0443\u0436\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443. \u041C\u043E\u043D\u0442\u0430\u0436 \u041D\u0430\u0441\u0442\u0435\u043D\u043D\u044B\u0439. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP54.\n    \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0422) 86/45/35 \u043C\u043C.</li>\n</ul>\n</div>\n        </div>\n          <h4 align=\"center\">\n         \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n        </h4>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/anti-icing/outdoor-termostats/W\u00C4RMEHAUS ETRF/84ceeeb3f5123b449e1afc29effdc40b.jpg\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        </div>\n      ",
        picPath: 'assets/images/anti-icing/outdoor-termostats/WÄRMEHAUS ETRF/ТЕПЛЫЙ_ПОЛ_ТЕРМОРЕГУЛЯТОР_WARMEHAUS_ETR_F.jpg',
        picAlt: 'Терморегулятор снеготаяния - антиобледенения WÄRMEHAUS ETRF'
    },
    // Терморегулятор WÄRMEHAUS ETN4
    {
        id: 145,
        name: 'Терморегулятор WÄRMEHAUS ETN4',
        nominal: 'Терморегулятор снеготаяния - антиобледенения',
        price: 238.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS ETN4 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\n         \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F \u043D\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0430\u0445, \u0430\u043D\u0442\u0438\u043E\u0431\u043B\u0435\u0434\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0430 \u043A\u0440\u043E\u0432\u043B\u044F\u0445, \u0430\u043D\u0442\u0438\u0437\u0430\u043C\u0435\u0440\u0437\u0430\u043D\u0438\u044F \u0442\u0440\u0443\u0431.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n  <li>W\u00E4rmehaus E\u0422N4 \u044D\u0442\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0438\u0431\u043E\u0440 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0439 \u0440\u0435\u0448\u0430\u0442\u044C \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0435\n   \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0433\u0434\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u0444\u043E\u0440\u0442 \u043F\u0440\u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0438\n    \u044D\u043D\u0435\u0440\u0433\u0438\u0438, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u043A \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u043A\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0433\u043E, \u0442\u0430\u043A \u0438 \u0432\u043E\u0434\u044F\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u0430.</li>\n    <li>\n    <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\"><span style=\"color:black\">\n    \u041D\u0430\u0434\u0435\u0436\u043D\u044B\u0439 \u043C\u0435\u0445\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F / \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u0438\u0431\u043E\u0440\u0430.</span></span></span></p>\n    </li>\n    <li>\n    <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\"><span style=\"color:black\">\n    3 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0435 - \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043A\u043D\u043E\u043F\u043A\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F.</span></span></span></p>\n    </li>\n    <li>\n    <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\"><span style=\"color:black\">\n    \u0416\u041A\u0418 \u0434\u0438\u0441\u043F\u043B\u0435\u0439 \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439.</span></span></span></p>\n    </li>\n    <li>\n    <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\"><span style=\"color:black\">\n    \u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0430\u0433\u0440\u0435\u0432\u0430 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F. </span></span></span></p>\n    </li>\n    <li>\n    <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\"><span style=\"color:black\">\n    \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 (\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043E\u0442 \u0434\u0435\u0442\u0435\u0439). </span></span></span></p>\n    </li>\n    <li>\n    <p><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"font-size:14px\"><span style=\"color:black\">\n    \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 2 \u0433\u043E\u0434\u0430.</span></span></span></p>\n    </li>\n  </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n\t<li>\u0422\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442&nbsp;W\u00E4rmehaus \u0415\u0422N4</li>\n\t<li>\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 220-240\u0412 \u00B1 10%, 50-60 \u0413\u0446.</li>\n\t<li>\u041F\u0435\u0440\u0435\u043F\u0430\u0434 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 1,0\u00B0\u0421 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435.</li>\n\t<li>\u041D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440 \u043E\u0442 -19.5 \u0434\u043E +70\u00B0\u0421.</li>\n\t<li>\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043E\u0437\u0434\u0443\u0445\u0430, \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043F\u043E\u043B\u0430, \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0441 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435\u043C \u043F\u043E \u043F\u043E\u043B\u0443.</li>\n\t<li>\u0420\u0430\u0431\u043E\u0442\u0430 \u0432 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u043C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438 (\u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F).</li>\n\t<li>\u0421\u0438\u043B\u043E\u0432\u043E\u0435 \u0440\u0435\u043B\u0435 16\u0410.</li>\n\t<li>\u0414\u0438\u0441\u043F\u043B\u0435\u0439 \u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439.</li>\n\t<li>\u041E\u0442\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u043B\u0438\u0431\u043E \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</li>\n\t<li>\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043A\u0430\u043B\u0438\u0431\u0440\u043E\u0432\u043A\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</li>\n\t<li>\u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP20.</li>\n\t<li>\u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0413) 85/52/59 \u043C\u043C.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B&nbsp;W\u00E4rmehaus ETF-744/99:\n   \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u041D\u0430\u0440\u0443\u0436\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443. \u041C\u043E\u043D\u0442\u0430\u0436 \u041D\u0430\u0441\u0442\u0435\u043D\u043D\u044B\u0439. \u041A\u043B\u0430\u0441\u0441 \u0437\u0430\u0449\u0438\u0442\u044B \u043A\u043E\u0440\u043F\u0443\u0441\u0430 IP54.\n    \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044B -20/+70\u00B0\u0421 \u0420\u0430\u0437\u043C\u0435\u0440\u044B (\u0412/\u0428/\u0422) 86/45/35 \u043C\u043C.</li>\n  <li>\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E \u0441 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u043C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B&nbsp;W\u00E4rmehaus ETF-744/99T:\n   \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u043F\u043E\u043B\u0430, (\u0441\u0440\u0435\u0434\u044B \u0432 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D). \u041C\u043E\u043D\u0442\u0430\u0436 \u0432 \u043F\u043E\u043B \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u0433\u0435\u0440\u043C\u0435\u0442\u0438\u0447\u043D\u043E\u0439 \u0442\u0440\u0443\u0431\u043A\u0438.</li>\n</ul>\n</div>\n        </div>\n          <h4 align=\"center\">\n         \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438\n        </h4>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/anti-icing/outdoor-termostats/W\u00C4RMEHAUS ETN4/6d903bacb388b206a7d1f931d2b469e6.jpg\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        </div>\n      ",
        picPath: 'assets/images/anti-icing/outdoor-termostats/WÄRMEHAUS ETN4/ТЕПЛЫЙ_ПОЛ_ТЕРМОРЕГУЛЯТОР_WARMEHAUS_ETN.jpg',
        picAlt: 'Терморегулятор снеготаяния - антиобледенения WÄRMEHAUS ETN4'
    }
];


/***/ }),

/***/ "./src/data/anti-icing/pipe-heating-cable-data.ts":
/*!********************************************************!*\
  !*** ./src/data/anti-icing/pipe-heating-cable-data.ts ***!
  \********************************************************/
/*! exports provided: ELEMENT_DATA_PIPE_HEATING_CABLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_PIPE_HEATING_CABLE", function() { return ELEMENT_DATA_PIPE_HEATING_CABLE; });
var ELEMENT_DATA_PIPE_HEATING_CABLE = [
    {
        id: 114,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: 'CAB AFG 20W - 1,0м.п - 20Вт',
        price: 68.00
    },
    {
        id: 115,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: ' 2CAB AFG 20W - 2,0м.п - 40Вт',
        price: 93.00
    },
    {
        id: 116,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: 'CAB AFG 20W - 4,0м.п - 80Вт',
        price: 143.00
    },
    {
        id: 117,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: 'CAB AFG 20W - 6,0м.п - 120Вт',
        price: 192.00
    },
    {
        id: 118,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: 'CAB AFG 20W - 8,0м.п - 160Вт',
        price: 241.00
    },
    {
        id: 119,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: 'CAB AFG 20W - 10,0м.п - 200Вт',
        price: 291.00
    },
    {
        id: 120,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: 'CAB AFG 20W - 20,0м.п - 400Вт',
        price: 538.00
    },
    {
        id: 121,
        name: 'Комплект WÄRMEHAUS AFG 20W',
        nominal: 'CAB AFG 20W - 30,0м.п - 600Вт',
        price: 785.00
    },
    {
        id: 122,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 1,0м.п - 30Вт',
        price: 70.00
    },
    {
        id: 123,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 2,0м.п - 60Вт',
        price: 97.00
    },
    {
        id: 124,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 4,0м.п - 120Вт',
        price: 150.00
    },
    {
        id: 125,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 6,0м.п - 180Вт',
        price: 203.00
    },
    {
        id: 126,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 8,0м.п - 240Вт',
        price: 257.00
    },
    {
        id: 127,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 10,0м.п - 300Вт',
        price: 310.00
    },
    {
        id: 128,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 20,0м.п - 600Вт',
        price: 576.00
    },
    {
        id: 129,
        name: 'Комплект WÄRMEHAUS AFG 30W',
        nominal: 'CAB AFG 30W - 30,0м.п - 900Вт',
        price: 842.00
    },
    {
        id: 130,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 1,0м.п - 40Вт',
        price: 72.00
    },
    {
        id: 131,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 2,0м.п - 80Вт',
        price: 101.00
    },
    {
        id: 132,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 4,0м.п - 160Вт',
        price: 158.00
    },
    {
        id: 133,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 6,0м.п - 240Вт',
        price: 215.00
    },
    {
        id: 134,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 8,0м.п - 320Вт',
        price: 272.00
    },
    {
        id: 135,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 10,0м.п - 400Вт',
        price: 329.00
    },
    {
        id: 136,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 20,0м.п - 800Вт',
        price: 614.00
    },
    {
        id: 137,
        name: 'Комплект WÄRMEHAUS AFG 40W',
        nominal: 'CAB AFG 40W - 30,0м.п - 1200Вт',
        price: 899.00
    }
];


/***/ }),

/***/ "./src/data/cab-11w-thin-data.ts":
/*!***************************************!*\
  !*** ./src/data/cab-11w-thin-data.ts ***!
  \***************************************/
/*! exports provided: ELEMENT_DATA_MAT_CAB_11W_THIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_MAT_CAB_11W_THIN", function() { return ELEMENT_DATA_MAT_CAB_11W_THIN; });
var ELEMENT_DATA_MAT_CAB_11W_THIN = [
    { id: 31, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '10,0м2 - 112W', price: 133.00 },
    { id: 32, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '14,3м2 - 160W', price: 152.00 },
    { id: 33, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '21,5м2 - 240W', price: 170.00 },
    { id: 34, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '28,6м2 - 320W', price: 200.00 },
    { id: 35, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '35,8м2 - 400W', price: 228.00 },
    { id: 36, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '42,9м2 - 480W', price: 247.00 },
    { id: 37, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '50,1м2 - 560W', price: 276.00 },
    { id: 38, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '57,2м2 - 640W', price: 295.00 },
    { id: 39, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '64,4м2 - 720W', price: 323.00 },
    { id: 40, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '71,5м2 - 800W', price: 352.00 },
    { id: 41, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '85,8м2 - 960W', price: 380.00 },
    { id: 42, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '100,1м2 - 1120W', price: 418.00 },
    { id: 43, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '114,4м2 - 1280W', price: 466.00 },
    { id: 44, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '128,7м2 - 1440W', price: 513.00 },
    { id: 45, name: 'Двужильный WÄRMEHAUS CAB 11W Thin', nominal: '143,0м2 - 1600W', price: 570.00 },
];


/***/ }),

/***/ "./src/data/cab-14w-thin-data.ts":
/*!***************************************!*\
  !*** ./src/data/cab-14w-thin-data.ts ***!
  \***************************************/
/*! exports provided: ELEMENT_DATA_MAT_CAB_14W_THIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_MAT_CAB_14W_THIN", function() { return ELEMENT_DATA_MAT_CAB_14W_THIN; });
var ELEMENT_DATA_MAT_CAB_14W_THIN = [
    { id: 46, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '10,0м2 - 140W', price: 152.00 },
    { id: 47, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '14,3м2 - 200W', price: 171.00 },
    { id: 48, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '21,5м2 - 300W', price: 200.00 },
    { id: 49, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '28,6м2 - 400W', price: 228.00 },
    { id: 50, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '35,8м2 - 500W', price: 257.00 },
    { id: 51, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '42,9м2 - 600W', price: 285.00 },
    { id: 52, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '50,1м2 - 700W', price: 314.00 },
    { id: 53, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '57,2м2 - 800W', price: 333.00 },
    { id: 54, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '64,4м2 - 900W', price: 352.00 },
    { id: 55, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '71,5м2 - 1000W', price: 399.00 },
    { id: 56, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '85,8м2 - 1200W', price: 456.00 },
    { id: 57, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '100,1м2 - 1400W', price: 494.00 },
    { id: 58, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '114,4м2 - 1600W', price: 570.00 },
    { id: 59, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '128,7м2 - 1800W', price: 665.00 },
    { id: 60, name: 'Двужильный WÄRMEHAUS CAB 14W Thin', nominal: '143,0м2 - 2000W', price: 760.00 },
];


/***/ }),

/***/ "./src/data/cab-20w-uv-protection-data.ts":
/*!************************************************!*\
  !*** ./src/data/cab-20w-uv-protection-data.ts ***!
  \************************************************/
/*! exports provided: ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION", function() { return ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION; });
var ELEMENT_DATA_MAT_CAB_20W_UV_PROTECTION = [
    { id: 61, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '10,0м2 - 200W', price: 152.00 },
    { id: 62, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '13,7м2 - 274W', price: 181.00 },
    { id: 63, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '17,2м2 - 344W', price: 209.00 },
    { id: 64, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '22,5м2 - 450W', price: 238.00 },
    { id: 65, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '27,0м2 - 540W', price: 266.00 },
    { id: 66, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '32,0м2 - 640W', price: 295.00 },
    { id: 67, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '39,0м2 - 780W', price: 342.00 },
    { id: 68, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '44,0м2 - 880W', price: 380.00 },
    { id: 69, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '53,5м2 - 1070W', price: 418.00 },
    { id: 70, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '64,0м2 - 1280W', price: 494.00 },
    { id: 71, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '79,0м2 - 1580W', price: 570.00 },
    { id: 72, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '92,0м2 - 1840W', price: 684.00 },
    { id: 73, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '116,0м2 - 2320W', price: 798.00 },
    { id: 74, name: 'Двужильный WÄRMEHAUS CAB 20W UV PROTECTION', nominal: '140,0м2 - 2800W', price: 912.00 },
];


/***/ }),

/***/ "./src/data/film-data.ts":
/*!*******************************!*\
  !*** ./src/data/film-data.ts ***!
  \*******************************/
/*! exports provided: ELEMENT_DATA_FILMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_FILMS", function() { return ELEMENT_DATA_FILMS; });
var ELEMENT_DATA_FILMS = [
    {
        id: 86,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 0,5м.кв. - 110Вт',
        price: 36.00
    },
    {
        id: 87,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 1,0м.кв. - 220Вт',
        price: 51.00
    },
    {
        id: 88,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 1,5м.кв. - 330Вт',
        price: 74.00
    },
    {
        id: 89,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 2,0м.кв. - 440Вт',
        price: 89.00
    },
    {
        id: 90,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 2,5м.кв. - 550Вт',
        price: 106.00
    },
    {
        id: 91,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 3,0м.кв. - 660Вт',
        price: 129.00
    },
    {
        id: 92,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 3,5м.кв. - 770Вт',
        price: 146.00
    },
    {
        id: 93,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 4,0м.кв. - 880Вт',
        price: 169.00
    },
    {
        id: 94,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 4,5м.кв. - 990Вт',
        price: 188.00
    },
    {
        id: 95,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 5,0м.кв. - 1100Вт',
        price: 209.00
    },
    {
        id: 96,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 6,0м.кв. - 1320Вт',
        price: 243.00
    },
    {
        id: 97,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 7,0м.кв. - 1540Вт',
        price: 276.00
    },
    {
        id: 98,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'HighPower 220W/m2. 8,0м.кв. - 1760Вт',
        price: 315.00
    },
    {
        id: 101,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. 0,5м.кв. - 75Вт',
        price: 36.00
    },
    {
        id: 102,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. 1,0м.кв. - 150Вт',
        price: 51.00
    },
    {
        id: 103,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /1,5м.кв. - 225Вт',
        price: 74.00
    },
    {
        id: 104,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /2,0м.кв. - 300Вт',
        price: 89.00
    },
    {
        id: 105,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /2,5м.кв. - 375Вт',
        price: 106.00
    },
    {
        id: 106,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /3,0м.кв. - 450Вт',
        price: 129.00
    },
    {
        id: 107,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /3,5м.кв. - 525Вт',
        price: 146.00
    },
    {
        id: 108,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /4,0м.кв. - 600Вт',
        price: 169.00
    },
    {
        id: 109,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /4,5м.кв. - 675Вт',
        price: 188.00
    },
    {
        id: 110,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /5,0м.кв. - 750Вт',
        price: 209.00
    },
    {
        id: 111,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /6,0м.кв. - 900Вт',
        price: 243.00
    },
    {
        id: 112,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /7,0м.кв. - 1050Вт',
        price: 276.00
    },
    {
        id: 113,
        name: 'Инфракрасная нагревательная пленка WÄRMEHAUS infrared Film',
        nominal: 'EcoPower 150W/m2. /8,0м.кв. - 1200Вт',
        price: 315.00
    },
];


/***/ }),

/***/ "./src/data/heating-mat-200W-data.ts":
/*!*******************************************!*\
  !*** ./src/data/heating-mat-200W-data.ts ***!
  \*******************************************/
/*! exports provided: ELEMENT_DATA_MAT_200W */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_MAT_200W", function() { return ELEMENT_DATA_MAT_200W; });
var ELEMENT_DATA_MAT_200W = [
    { id: 16, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '0,7м2 - 140W', price: 190.00 },
    { id: 17, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '1,0м2 - 200W', price: 219.00 },
    { id: 18, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '1,5м2 - 300W', price: 257.00 },
    { id: 19, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '2,0м2 - 400W', price: 295.00 },
    { id: 20, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '2,5м2 - 500W', price: 333.00 },
    { id: 21, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '3,0м2 - 600W', price: 380.00 },
    { id: 22, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '3,5м2 - 700W', price: 428.00 },
    { id: 23, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '4,0м2 - 800W', price: 475.00 },
    { id: 24, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '4,5м2 - 900W', price: 542.00 },
    { id: 25, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '5,0м2 - 1000W', price: 608.00 },
    { id: 26, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '6,0м2 - 1200W', price: 684.00 },
    { id: 27, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '7,0м2 - 1400W', price: 751.00 },
    { id: 28, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '8,0м2 - 1600W', price: 827.00 },
    { id: 29, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '9,0м2 - 1900W', price: 912.00 },
    { id: 30, name: 'Двужильный WÄRMEHAUS MAT 200W', nominal: '10,0м2 - 2000W', price: 1026.00 },
];


/***/ }),

/***/ "./src/data/heating-mat160W-data.ts":
/*!******************************************!*\
  !*** ./src/data/heating-mat160W-data.ts ***!
  \******************************************/
/*! exports provided: ELEMENT_DATA_MAT_160W */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_MAT_160W", function() { return ELEMENT_DATA_MAT_160W; });
var ELEMENT_DATA_MAT_160W = [
    { id: 1, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '0,7м2 - 112W', price: 152.00 },
    { id: 2, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '1,0м2 - 160W', price: 171.00 },
    { id: 3, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '1,5м2 - 240W', price: 200.00 },
    { id: 4, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '2,0м2 - 320W', price: 238.00 },
    { id: 5, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '2,5м2 - 480W', price: 266.00 },
    { id: 6, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '3,0м2 - 560W', price: 295.00 },
    { id: 7, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '3,5м2 - 640W', price: 333.00 },
    { id: 8, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '4,0м2 - 720W', price: 380.00 },
    { id: 9, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '4,5м2 - 800W', price: 418.00 },
    { id: 10, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '5,0м2 - 960W', price: 456.00 },
    { id: 11, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '6,0м2 - 1120W', price: 513.00 },
    { id: 12, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '7,0м2 - 1280W', price: 570.00 },
    { id: 13, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '8,0м2 - 1440W', price: 627.00 },
    { id: 14, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '9,0м2 - 1600W', price: 684.00 },
    { id: 15, name: 'Двужильный WÄRMEHAUS MAT 160W', nominal: '10,0м2 - 1600W', price: 760.00 },
];


/***/ }),

/***/ "./src/data/termostat-data.ts":
/*!************************************!*\
  !*** ./src/data/termostat-data.ts ***!
  \************************************/
/*! exports provided: ELEMENT_DATA_TERMOSTATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA_TERMOSTATS", function() { return ELEMENT_DATA_TERMOSTATS; });
// An array of termostats with markup (Safe HTML used).
var ELEMENT_DATA_TERMOSTATS = [
    // Терморегулятор WÄRMEHAUS TouchScreen
    {
        id: 75,
        name: 'Терморегулятор WÄRMEHAUS TouchScreen',
        nominal: 'Сенсорный',
        price: 247.00,
        description: "\n      <div>\n  <hr>\n      <h4 align=\"center\">\n      \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n    </h4>\n    <div class=\"container text\">\n    <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0421\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 W\u00C4RMEHAUS TOUCHSCREEN 24/7 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E\n     \u043F\u043E\u043B\u0430 \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B</i>\n    <style>\n    li{\n      text-align: left;\n    }\n    </style>\n    <ul>\n      <li>\n        \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 <b>\u0421\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 24/7</b> \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C \"\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n      </li>\n      <li>\n        \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u0434\u043D\u044F\u043C \u043D\u0435\u0434\u0435\u043B\u0438 : \u0420\u0430\u0431\u043E\u0447\u0438\u0439/\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0434\u0435\u043D\u044C -  5/2 \u0438\u043B\u0438 6/1 \u0438\u043B\u0438 7/0.\n      </li>\n      <li>\n        \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 <b>6-\u0442\u0438</b> \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0432 \u0441\u0443\u0442\u043A\u0438.\n      </li>\n      <li>\n        \u0414\u0432\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B - \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 \u0434\u043B\u0438\u043D\u043D\u043E\u0439 3\u043C.\n      </li>\n      <li>\n        \u041F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u043E\u043C.\n      </li>\n      <li>\n        \u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u043C\u0443 \u0434\u0430\u0442\u0447\u0438\u043A\u0443 - \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u0430.\n      </li>\n      <li>\n        \u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u043C\u0443 \u0434\u0430\u0442\u0447\u0438\u043A\u0443 - \u0434\u043B\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u0430.\n      </li>\n      <li>\n        \u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0434\u0432\u0443\u043C \u0434\u0430\u0442\u0447\u0438\u043A\u0430\u043C - \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043E\u0431\u043E\u0433\u0440\u0435\u0432\u0430. \u0414\u0430\u0442\u0447\u0438\u043A \u0432\u043E\u0437\u0434\u0443\u0445\u0430 (\u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439) - \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439.\n        \u0414\u0430\u0442\u0447\u0438\u043A \u043F\u043E\u043B\u0430 (\u0432\u043D\u0435\u0448\u043D\u0438\u0439) - \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u0435\u043B\u044C.\n      </li>\n      <li>\n        \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F.\n      </li>\n      <li>\n        \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0438 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B, \u0434\u043D\u044F \u043D\u0435\u0434\u0435\u043B\u0438 \u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.\n      </li>\n      <li>\n        \u0421\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 LED \u044D\u043A\u0440\u0430\u043D.\n      </li>\n      <li>\n        \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 LED \u0431\u0435\u043B\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430.\n      </li>\n      <li>\n        \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B.\n      </li>\n      <li>\n        \u042D\u043D\u0435\u0440\u0433\u043E\u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0447\u0430\u0441\u044B.\n      </li>\n      <li>\n        \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0410\u043D\u0442\u0438\u0437\u0430\u043C\u0435\u0440\u0437\u0430\u043D\u0438\u044F.\n      </li>\n      <li>\n        \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F... <b>+5...+50C<sup><small>o</small></sup></b>\n      </li>\n      <li>\n        \u0421\u0430\u043C\u043E\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430.\n      </li>\n      <li>\n        \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n      </li>\n      <li>\n        \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441\u0430.\n      </li>\n      <li>\n        \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.\n      </li>\n      <li>\n        \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n      </li>\n      <li>\n        \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n      </li>\n    </ul>\n    <hr>\n  <h4 align=\"center\">\n    \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n  </h4>\n  <ul>\n      <li>\n      \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F...   +5...+50<sup><small>o</small></sup>\u0421\n      </li>\n      <li>\n      \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n      </li>\n      <li>\n      \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n      </li>\n      <li>\n      \u0428\u0430\u0433 \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5\u202610<sup><small>o</small>\u0421\n      </li>\n      <li>\n      \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3600W\n      </li>\n      <li>\n      \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3200W\n      </li>\n      <li>\n      \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   16\u0410\n      </li>\n      <li>\n      \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  14,5\u0410\n      </li>\n      <li>\n      \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 20%\n      </li>\n      <li>\n      \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,22\u043A\u0433\n      </li>\n      <li>\n      \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   85\u044588\u044544\n      </li>\n      <li>\n      \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 30\u043C\u043C\n      </li>\n      <li>\n      \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n      </li>\n      <li>\n      \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C...   10kOm/25<sup><small>o</small>\u0421\n      </li>\n      <li>\n      \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439...   10kOm/25<sup><small>o</small></sup>\u0421\n      </li>\n      <li>\n      \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1\u043E\u0421\n      </li>\n      <li>\n      \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP20\n      </li>\n    </ul>\n    *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n    \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3200 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n    </div>\n  <hr>\n      <h4 align=\"center\">\n      \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n    </h4>\n    <p align=\"center\">\n      <i>\u0427\u0451\u0440\u043D\u044B\u0439 / \u0421\u0435\u0440\u0435\u0431\u0440\u043E / \u0411\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n    </p>\n    <div id=\"container\" align=\"center\" class=\"imageCont\">\n    <img src=\"assets/images/termostats/touchscreen24to7/25ae2f22e31bdc9ca8194c1ab69f3974.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0447\u0435\u0440\u043D\u044B\u0439\">\n    <img src=\"assets/images/termostats/touchscreen24to7/29e83460023a1240f5acfc0e2937f120.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0441\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n    <img src=\"assets/images/termostats/touchscreen24to7/631ec501a89798a34414e9d98303edc3.jpg\"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n    <img src=\"assets/images/termostats/touchscreen24to7/WH_TS_front_s700.jpg \"\n    style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\n    alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n    </div>\n    <hr>\n    </div>\n      ",
        picPath: 'assets/images/termostats/touchscreen24to7/02a94d427c05decb935dfa8f0251c059.jpg',
        picAlt: 'ТЕРМОРЕГУЛЯТОР WÄRMEHAUS TOUCHSCREEN'
    },
    // Терморегулятор WÄRMEHAUS WH100
    {
        id: 76,
        name: 'Терморегулятор WÄRMEHAUS WH100',
        nominal: 'Аналоговый',
        price: 114.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH 100 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          \u041D\u0435\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C  \"\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n          </li>\n          <li>\n          \u0420\u0443\u0447\u043D\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F :  \u041A\u0440\u0430\u0441\u043D\u044B\u0439 - \u0440\u0435\u0436\u0438\u043C \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 28\u043C\u043C.\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 14\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438  <b>Polo, Elyo, Busch&Jaeger</b>.\n          </li>\n          <li>\n          \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438 \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0442\u0438\u043F\u0430\u043C\u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0435\u0439.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F...   +5...+50<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3200W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   14\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 15%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,200\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   80\u044580\u044550\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 28\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C...   10kOm/25<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP20\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0411\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/analogWH100/5dabfed070c79d60f454568f2a74eb22.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH100/4f1f1f1b1d32829a8b8485403cf8e2ef.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH100/WH100_front_s700.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/analogWH100/5dabfed070c79d60f454568f2a74eb22.jpg',
        picAlt: 'Терморегулятор регулируемый не программируемый (аналоговый)'
    },
    // Терморегулятор WÄRMEHAUS WH200
    {
        id: 77,
        name: 'Терморегулятор WÄRMEHAUS WH200',
        nominal: 'Аналоговый',
        price: 114.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH 200 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          \u041D\u0435\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C  \"\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n          </li>\n          <li>\n          \u0420\u0443\u0447\u043D\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F :  \u041A\u0440\u0430\u0441\u043D\u044B\u0439 - \u0440\u0435\u0436\u0438\u043C \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 28\u043C\u043C.\n          </li>\n          <li>\n          \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F +5...+50<sup><small>o</small></sup>\u0421\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 14\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438  <b>ABB, Gira, Jung, Schneider \u0441\u0435\u0440\u0438\u044F M</b>.\n          </li>\n          <li>\n          \u041C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438 \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0442\u0438\u043F\u0430\u043C\u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0435\u0439.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F...   +5...+50<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3200W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   14\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 15%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,200\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   80\u044580\u044550\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 28\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C...   10kOm/25<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP20\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/analogWH200/c23199a1167b9084c03738ea136ec863.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH200/f264102ae0357a1b761b197a22b58cde.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH200/WH200_front_s700.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/analogWH200/c23199a1167b9084c03738ea136ec863.jpg',
        picAlt: 'Терморегулятор регулируемый не программируемый (аналоговый)'
    },
    // Терморегулятор WÄRMEHAUS WH400 PRO
    {
        id: 78,
        name: 'Терморегулятор WÄRMEHAUS WH400 PRO',
        nominal: 'Сенсорный', price: 247.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH400 PRO \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          \u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043F\u043B\u043E\u043C.\n          </li>\n          <li>\n          <b>\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439/\u0432\u044B\u043D\u043E\u0441\u043D\u043E\u0439 \u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</b>\n          </li>\n          <li>\n          \u041A\u043B\u0435\u043C\u043C\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u043E\u0432  1.5-2.5 \u043C\u043C<sup><small>2</small></sup>\n          </li>\n          <li>\n          \u041F\u0440\u0438\u043D\u0446\u0438\u043F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0428\u0418\u041C/\u041F\u0418\n          </li>\n          <li>\n          \u041F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F    0.5 \u0412\u0442\n          </li>\n          <li>\n          \u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u0431\u0430\u0442\u0430\u0440\u0435\u0438   5 \u043B\u0435\u0442\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0438 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          <b>\u0412\u044B\u0441\u043E\u043A\u043E\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u044B\u0439 LED \u0421\u0415\u041D\u0421\u041E\u0420\u041D\u042B\u0419  \u044D\u043A\u0440\u0430\u043D.</b>\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 22\u043C\u043C.\n          </li>\n          <li>\n          \u0421\u0430\u043C\u043E\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430.\n          </li>\n          <li>\n          \u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u0435\u0437 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 <b>ABB, GIRA, JUNG</b> \u0438 \u0442.\u0434.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0443...   +5...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043F\u043E\u043B\u0443...   +5...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3600W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   16\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13,5\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 10%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,200\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   82\u044582\u044540\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 22\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C...   10kOm/25<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 0,4<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP21\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <img src=\"assets/images/termostats/touchscreenWH400Pro/frames WH600 1 s400.jpg\"\n        alt=\"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\">\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0411\u0435\u043B\u044B\u0439</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/touchscreenWH400Pro/\u0422\u0415\u041F\u041B\u042B\u0419_\u041F\u041E\u041B_\u0422\u0415\u0420\u041C\u041E\u0420\u0415\u0413\u0423\u041B\u042F\u0422\u041E\u0420_WARMEHAUS_WH400_s800.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/touchscreenWH400Pro/WH400_front_s700.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/touchscreenWH400Pro/9c611740b299fc0ad5cc52caa701438a.jpg',
        picAlt: 'Терморегулятор сенсорный белый WH400 Pro'
    },
    // Терморегулятор WÄRMEHAUS WH500 PRO
    {
        id: 79,
        name: 'Терморегулятор WÄRMEHAUS WH500 PRO',
        nominal: 'Сенсорный',
        price: 247.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH500 PRO \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F\n        \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          <b>\u0423\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441 \u043D\u043E\u0432\u044B\u043C \u043C\u0435\u043D\u044E \u0438 \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u043E\u0439 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0435\u0439 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E\n          \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0441\u0447\u0438\u0442\u044B\u0432\u0430\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438.</b>\n          </li>\n          <li>\n          \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 24/7 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C \" \u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n          </li>\n          <li>\n          \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u0434\u043D\u044F\u043C \u043D\u0435\u0434\u0435\u043B\u0438 : \u0420\u0430\u0431\u043E\u0447\u0438\u0439/\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0434\u0435\u043D\u044C -  5/2 \u0438\u043B\u0438 6/1 \u0438\u043B\u0438 7/0.\n          </li>\n          <li>\n          \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 <b>4-\u0445 \u0438\u043B\u0438 6-\u0442\u0438</b> \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0432 \u0441\u0443\u0442\u043A\u0438.\n          </li>\n          <li>\n          \u042D\u043D\u0435\u0440\u0433\u043E\u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0447\u0430\u0441\u044B. \u0421\u0440\u043E\u043A \u0441\u043B\u0443\u0436\u0431\u044B \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0439 \u0431\u0430\u0442\u0430\u0440\u0435\u0438 \u0434\u043B\u044F \u0447\u0430\u0441\u043E\u0432 \u0438 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044F 5 \u043B\u0435\u0442\n          </li>\n          <li>\n          \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F.\n          </li>\n          <li>\n          <b>\u0414\u0432\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 : \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439/\u0432\u044B\u043D\u043E\u0441\u043D\u043E\u0439 \u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</b>\n          </li>\n          <li>\n          \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F \"\u041F\u0420\u041E\u0413\u041D\u041E\u0417-\u041F\u0420\u0415\u0414\u0412\u0410\u0420\u0418\u0422\u0415\u041B\u042C\u041D\u042B\u0419 \u041F\u0420\u041E\u0413\u0420\u0415\u0412\".\n          </li>\n          <li>\n          \u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u044F  \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u0441\u0443\u0442\u043E\u043A/\u043D\u0435\u0434\u0435\u043B\u0438/\u043C\u0435\u0441\u044F\u0446\u0430/\u0432\u0441\u0435\u0433\u043E.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0438 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B, \u0434\u043D\u044F \u043D\u0435\u0434\u0435\u043B\u0438, \u0434\u0430\u0442\u044B \u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.\n          </li>\n          <li>\n          \u0426\u0432\u0435\u0442\u043D\u043E\u0439 \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 2\" \u044D\u043A\u0440\u0430\u043D.\n          </li>\n          <li>\n          \u041D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0430\u044F \u044F\u0440\u043A\u043E\u0441\u0442\u044C \u044D\u043A\u0440\u0430\u043D\u0430.\n          </li>\n          <li>\n          \u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B , \"\u0417\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0434\u0435\u0442\u0435\u0439\".\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E <b>22\u043C\u043C</b>.\n          </li>\n          <li>\n          \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F +5...+40<small>o</small></sup>\u0421\n          </li>\n          <li>\n          \u0421\u0430\u043C\u043E\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430.\n          </li>\n          <li>\n          \u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u0435\u0437 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B (\u0440\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043D\u043E\u0433\u043E \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F).\n          </li>\n          <li>\n          \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0438 \u043F\u043E\u043B\u0430.\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u043C \u043A\u043E\u0440\u043E\u0431\u043A\u043E\u0439-\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u043E\u043C DK \u0434\u043B\u044F \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u0433\u043E \u043C\u043E\u043D\u0442\u0430\u0436\u0430.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0443...   +5...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043F\u043E\u043B\u0443...   +5...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3600W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   16\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13,5\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 10%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,200\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   82\u044582\u044540\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 22\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C...   10kOm/25<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 0,4<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP21\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <img src=\"assets/images/termostats/touchscreenWH500Pro/frames WH600 1 s400(1).jpg\"\n        alt=\"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\">\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0411\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/touchscreenWH500Pro/7dde2feaea7027829f0f8f34960bdebb.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/touchscreenWH500Pro/798ed46c91bded57ac29d03623b8e0f1.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0441\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n        <img src=\"assets/images/termostats/touchscreenWH500Pro/\u0422\u0415\u041F\u041B\u042B\u0419_\u041F\u041E\u041B_\u0422\u0415\u0420\u041C\u041E\u0420\u0415\u0413\u0423\u041B\u042F\u0422\u041E\u0420_WARMEHAUS_WH500_s800.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; padding-bottom: 15px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/touchscreenWH500Pro/WH500_front_s700.jpg\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/touchscreenWH500Pro/7dde2feaea7027829f0f8f34960bdebb.jpg',
        picAlt: 'Терморегулятор теплый пол сенсорный белый WH 500 Pro'
    },
    // Терморегулятор WÄRMEHAUS WH600 PRO
    {
        id: 80,
        name: 'Терморегулятор WÄRMEHAUS WH600 PRO',
        nominal: 'Сенсорный',
        price: 228.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH600 PRO \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C  \"\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n          </li>\n          <li>\n          \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \"\u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E\" \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. (\u0428\u0438\u043C \u043C\u043E\u0434\u0443\u043B\u044F\u0446\u0438\u044F).\n          </li>\n          <li>\n          \u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043F\u043B\u043E\u043C.\n          </li>\n          <li>\n          \u042D\u043D\u0435\u0440\u0433\u043E\u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0447\u0430\u0441\u044B.\n          </li>\n          <li>\n          <b>\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439/\u0432\u044B\u043D\u043E\u0441\u043D\u043E\u0439 \u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</b>\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0438 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u0412\u044B\u0441\u043E\u043A\u043E\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u044B\u0439 LED  \u044D\u043A\u0440\u0430\u043D \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439 \u0431\u0435\u043B\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430.\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 20\u043C\u043C.\n          </li>\n          <li>\n          \u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u0435\u0437 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 <b>ABB, GIRA, JUNG</b> \u0438 \u0434\u0440.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0443...   +5...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043F\u043E\u043B\u0443...   +5...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3600W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   16\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13,5\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 10%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,160\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   84\u044584\u044538\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 20\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C...   10kOm/25<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP21\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <img src=\"assets/images/termostats/analogWH600Pro/frames WH600 1 s400(1).jpg\"\n        alt=\"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\">\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/analogWH600Pro/cb7a619d3c125f9ac793b07976574b97.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439\">\n        <img src=\"assets/images/termostats/analogWH600Pro/33eebdcf9e7d2ae640e4f9bf11a2cfd9.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0430\u043B\u044C\u043F\u0438\u0439\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH600Pro/\u0422\u0415\u041F\u041B\u042B\u0419 \u041F\u041E\u041B THERMOSTAT WARMEHAUS WH600 FRAME ABB GIRA JUNG 3 s400.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH600Pro/\u0422\u0415\u041F\u041B\u042B\u0419_\u041F\u041E\u041B_\u0422\u0415\u0420\u041C\u041E\u0420\u0415\u0413\u0423\u041B\u042F\u0422\u041E\u0420_WARMEHAUS_WH600_3_s400.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/analogWH600Pro/53f99eeb16941dcc56f3ba439444e848.jpg',
        picAlt: 'Терморегулятор WÄRMEHAUS WH600 PRO сенсорный с кнопками'
    },
    // Терморегулятор WÄRMEHAUS WH1000 PRO
    {
        id: 81,
        name: 'Терморегулятор WÄRMEHAUS WH1000 PRO',
        nominal: 'Аналоговый',
        price: 228.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH1000 PRO \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u0432 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B\u044B</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C  \"\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n          </li>\n          <li>\n          \u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043F\u043B\u043E\u043C.\n          </li>\n          <li>\n          \u042D\u043D\u0435\u0440\u0433\u043E\u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0447\u0430\u0441\u044B.\n          </li>\n          <li>\n          <b>\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0439 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439/\u0432\u044B\u043D\u043E\u0441\u043D\u043E\u0439 \u0434\u0430\u0442\u0447\u0438\u043A\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</b>\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u043E\u043A\u043D\u0430. (\u041F\u0440\u0438 \u043A\u0440\u0430\u0442\u043A\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0432\u0435\u0442\u0440\u0438\u0432\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u0431\u043E\u0440 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0438\u0442 \u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B).\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0438 \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u0412\u044B\u0441\u043E\u043A\u043E\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u044B\u0439 LED  \u044D\u043A\u0440\u0430\u043D \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439 \u0431\u0435\u043B\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430.\n          </li>\n          <li>\n          \u0420\u0435\u0436\u0438\u043C \u043E\u0442\u044A\u0435\u0437\u0434\u0430. (\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0431\u0443\u0434\u0435\u0442 \u0433\u043E\u0442\u043E\u0432 \u043A \u0412\u0430\u0448\u0435\u043C\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044E \u0438\u0437 \u043E\u0442\u043F\u0443\u0441\u043A\u0430).\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 24\u043C\u043C.\n          </li>\n          <li>\n          \u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u0435\u0437 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 <b>Schneider \u0441\u0435\u0440\u0438\u044F Unica, Simon \u0441\u0435\u0440\u0438\u044F 27 (Neos, Play)</b> \u0438 \u0434\u0440.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u0432\u043E\u0437\u0434\u0443\u0445\u0443...   +5...+30<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u043E \u043F\u043E\u043B\u0443...   +5...+45<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3600W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   16\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13,5\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 10%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,180\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   85\u044580\u044538\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 24\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 2\u043C...\n            </li>\n            <li>\n            \u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0432\u043D\u0435\u0448\u043D\u0438\u043C\u0438 \u0434\u0430\u0442\u0447\u0438\u043A\u0430\u043C\u0438 NTC : 6.8 , 10 , 12 , 15 , 33 , 47kOm \u043F\u0440\u0438 25<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP21\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <img src=\"assets/images/termostats/analogWH1000Pro/frames WARMEHAUS WH1000 2 s400(2)(1).jpg\"\n        alt=\"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\">\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/analogWH1000Pro/9e990f49e7769a517f36e8a38a62ccd9.jpg\"\n        style=\"padding-left: 5%; padding-right: 2%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH1000Pro/a01266454347a1e78564c26d55fb3bd1.jpg\"\n        style=\"padding-left: 2%; padding-right: 5%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n        <img src=\"assets/images/termostats/analogWH1000Pro/8933d2cdd2e3dea8180e3aea9c4cecf6.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 253px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH1000Pro/47745146e538837899cec8737fe4f408.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 253px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        <img src=\"assets/images/termostats/analogWH1000Pro/61ee076a4143dee0caae125ddd5151a9.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;  max-height: 420px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        <img src=\"assets/images/termostats/analogWH1000Pro/WH1000_front_s800..jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px;\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/analogWH1000Pro/9e990f49e7769a517f36e8a38a62ccd9.jpg',
        picAlt: 'Терморегулятор WÄRMEHAUS WH1000 PRO лучшего качества'
    },
    // Терморегулятор WÄRMEHAUS WH900 DIGITAL
    {
        id: 82,
        name: 'Терморегулятор WÄRMEHAUS WH900 DIGITAL',
        nominal: 'Сенсорный',
        price: 133.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS DIGITAL WH900 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E\n        \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0441\u0443\u0442\u043E\u043A. \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0439 LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          \u041F\u043E\u043B\u0443\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \"\u0422\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430\".\n          </li>\n          <li>\n          \u041F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u0430\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u043E\u043C\u0443 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0443, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0444\u0443\u043D\u043A\u0446\u0438\u0438 <b>\"\u041E\u0422\u041B\u041E\u0416\u0415\u041D\u041D\u042B\u0419 \u0421\u0422\u0410\u0420\u0422/\u0417\u0410\u0414\u0415\u0420\u0416\u041A\u0410 \u0412\u041A\u041B\u042E\u0427\u0415\u041D\u0418\u042F\"</b> .\n          </li>\n          <li>\n          \u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043F\u043B\u043E\u043C.\n          </li>\n          <li>\n          \u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 (\u041F\u043E\u043B\u0443\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C) \u043E\u0442 0,5 \u0434\u043E 99 \u0447\u0430\u0441\u043E\u0432.\n          </li>\n          <li>\n          \u042D\u0442\u043E\u0442 \u0440\u0435\u0436\u0438\u043C \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044E.\n          \u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0434\u043D\u0438\u043C \u043F\u0440\u0438\u043A\u043E\u0441\u043D\u043E\u0432\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F - \u043E\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0441\u0430 \u0434\u043E 99 \u0447\u0430\u0441\u043E\u0432.\n          \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0440\u0438\u0431\u043E\u0440 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0438\u0442 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u043F\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044E \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u042D\u0442\u043E\u0442 \u0440\u0435\u0436\u0438\u043C \u0443\u0434\u043E\u0431\u0435\u043D,\n          \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043B\u044F \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u043F\u043E\u043A\u0430 \u0412\u044B \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430 \u043D\u043E\u0447\u044C \u043F\u043E\u043A\u0430 \u0412\u044B \u0441\u043F\u0438\u0442\u0435.\n          \u0423\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0412\u0430\u043C \u043D\u0435 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432 \u043F\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0435 \u0441 \u0440\u0430\u0431\u043E\u0442\u044B \u0438\u043B\u0438 \u0443\u0442\u0440\u043E\u043C,\n          \u043F\u043E\u0441\u043B\u0435 \u0441\u043D\u0430. \u041F\u0440\u0438\u0431\u043E\u0440 \u0432\u043A\u043B\u044E\u0447\u0438\u0442 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u043F\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0438 \u0446\u0438\u043A\u043B\u0430 \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F.\n          \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0437\u0430\u0434\u0435\u0440\u0436\u043A\u0443 \u043D\u0430 7-9 \u0447\u0430\u0441\u043E\u0432, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0412\u0430\u0448\u0435\u0433\u043E\n          \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F \u0438\u043B\u0438 \u043D\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u043D\u0430. \u0422\u0430\u043A\u0436\u0435 \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0430\u0434\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u043D\u0438\u0436\u0435 5\u0421 \u043F\u0440\u0438\u0431\u043E\u0440 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\n          \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442 \u0440\u0435\u0436\u0438\u043C \"\u0410\u041D\u0422\u0418\u0417\u0410\u041C\u0415\u0420\u0417\u0410\u041D\u0418\u042F\", \u0442.\u0435. \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0438 \u043D\u0435 \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0441\u044F \u043D\u0438\u0436\u0435 5\u0421.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F :  \u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0412\u044B\u0441\u043E\u043A\u043E\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u044B\u0439 \u0421\u0435\u0433\u043C\u0435\u043D\u0442\u043D\u044B\u0439 LED  \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u043A\u0440\u0430\u0441\u043D\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430.\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 24\u043C\u043C.\n          </li>\n          <li>\n          \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u0445 \u0441\u043D\u0435\u0433\u043E\u0442\u0430\u044F\u043D\u0438\u044F.\n          </li>\n          <li>\n          \u0421\u0430\u043C\u043E\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430.\n          </li>\n          <li>\n          \u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u0435\u0437 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 <b>Schneider \u0441\u0435\u0440\u0438\u044F Unica, Simon \u0441\u0435\u0440\u0438\u044F 27 Neos</b>.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F...   +5...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3600W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   16\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13,5\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 10%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,180\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   85\u044580\u044538\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 24\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C... \u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0439\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP21\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <img src=\"assets/images/termostats/touchscreenWH900Digital/frames WARMEHAUS WH1000 2 s400(2)(1).jpg\"\n        alt=\"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\">\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/touchscreenWH900Digital/69694f87333efce45102c09a29cf00a7.jpg\"\n        style=\"padding-left: 5%; padding-right: 2%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/touchscreenWH900Digital/d15ff9d954aaf8e8e2e8f15857334bb9.jpg\"\n        style=\"padding-left: 2%; padding-right: 5%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n        <img src=\"assets/images/termostats/touchscreenWH900Digital/Thermostat WH900NEW.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 680px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/touchscreenWH900Digital/fb4ecb3b053f98d31a08002badfeb442.jpg',
        picAlt: 'Терморегулятор WÄRMEHAUS WH900 DIGITAL для теплых полов домой и на дачу'
    },
    // Терморегулятор WÄRMEHAUS WH300 WI-FI
    {
        id: 83,
        name: 'Терморегулятор WÄRMEHAUS WH300 WI-FI',
        nominal: 'WI-FI',
        price: 266.00, description: "\n    <div>\n    <hr>\n        <h4 align=\"center\">\n        \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n      </h4>\n      <div class=\"container text\">\n      <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH300 WIFI \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E\n       \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0441\u0443\u0442\u043E\u043A. \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u044B\u0439 LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0439.</i>\n      <style>\n      li{\n        text-align: left;\n      }\n      </style>\n      <ul>\n\t          <li>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \"\u0422\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430\".</li>\n\t          <li><strong>\u0423\u0434\u043E\u0431\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u043E\u043C \u043F\u0440\u044F\u043C\u043E \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438\u043B\u0438 \u0438\u0437 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.</strong></li>\n            <li>\u0426\u0438\u0444\u0440\u043E\u0432\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0442\u0435\u043F\u043B\u043E\u043C.</li>\n            <li>\u041F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u043F\u0440\u0438\u0431\u043E\u0440 \u0441 \u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C.</li>\n            <li>\u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0434\u043D\u0438\u043C \u043F\u0440\u0438\u043A\u043E\u0441\u043D\u043E\u0432\u0435\u043D\u0438\u0435\u043C \u043A \u044D\u043A\u0440\u0430\u043D\u0443 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0430 \u043F\u0440\u0435\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432\n            \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0438\u043B\u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E. \u0417\u0430\u0434\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0441\u0442\u0430\u0440\u0442\u0430.\n            \u041F\u0440\u0438 \u044D\u0442\u043E\u043C \u043F\u0440\u0438\u0431\u043E\u0440 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u043A\u043B\u044E\u0447\u0438\u0442 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u043F\u043E \u0438\u0441\u0442\u0435\u0447\u0435\u043D\u0438\u044E \u0437\u0430\u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438.\n            \u042D\u0442\u043E\u0442 \u0440\u0435\u0436\u0438\u043C \u0443\u0434\u043E\u0431\u0435\u043D, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0442\u043E\u0433\u0434\u0430 \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0443\u0435\u0437\u0436\u0430\u0435\u0442\u0435 \u0432 \u043E\u0442\u043F\u0443\u0441\u043A \u0438 \u0442\u043E\u0447\u043D\u043E \u0437\u043D\u0430\u0435\u0442\u0435 \u043A\u043E\u0433\u0434\u0430\n            \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0435\u0441\u044C \u0434\u043E\u043C\u043E\u0439. \u0410 \u043F\u043E\u043A\u0430 \u0412\u044B \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430 \u043D\u043E\u0447\u044C, \u043C\u043E\u0436\u043D\u043E \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043E\u0439\n            \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0443\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443. \u0423\u0434\u043E\u0431\u0441\u0442\u0432\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F\n            \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0412\u0430\u043C \u043D\u0435 \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u043D\u0430\u0433\u0440\u0435\u0432 \u043F\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0435 \u0441 \u0440\u0430\u0431\u043E\u0442\u044B \u0438\u043B\u0438 \u0443\u0442\u0440\u043E\u043C, \u043F\u043E\u0441\u043B\u0435 \u0441\u043D\u0430.\n            \u041F\u0440\u0438\u0431\u043E\u0440 \u0432\u043A\u043B\u044E\u0447\u0438\u0442 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043F\u0440\u043E\u0441\u043D\u0443\u043B\u0438\u0441\u044C \u0438 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u0442 \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u0443\u0445\u043E\u0434\u0438\u0442\u0435 \u0438\u0437 \u0434\u043E\u043C\u0430.\n            \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 \u0432 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0432\u0430\u0441 \u0434\u043E\u043C\u0430 \u043D\u0430 2-4 \u0433\u0440\u0430\u0434\u0443\u0441\u0430 \u043D\u0438\u0436\u0435 \u0447\u0435\u043C\n            \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u043F\u043E\u043A\u0430 \u0432\u044B \u0431\u043E\u0434\u0440\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C \u0434\u043E\u043C\u0430.</li>\n            <li>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u043E\u0441\u0442\u043E \u0438 \u0443\u0436\u0435 \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434\n            \u043F\u0440\u0438\u0431\u043E\u0440 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438. \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u043E\u043C \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0438\u0437\n            \u043B\u044E\u0431\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u041C\u0438\u0440\u0430 \u0433\u0434\u0435 \u0435\u0441\u0442\u044C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442.</li>\n            <li>\u0415\u0441\u043B\u0438 \u0441\u0435\u0442\u044C WiFi \u0432 \u0434\u043E\u043C\u0435 \u0433\u0434\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u043F\u0440\u0438\u0431\u043E\u0440 \u043F\u0440\u043E\u043F\u0430\u0434\u0435\u0442 \u043F\u043E \u043A\u0430\u043A\u0438\u043C \u043B\u0438\u0431\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C,\n            \u0442\u0435\u0440\u043C\u043E\u0441\u0442\u0430\u0442 W\u00C4RMEHAUS WH300 WIFI \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442 \u0441\u0432\u043E\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u043F\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u0430\n             \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u0442\u044C \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043E\u043D \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u043D\u043E\u0432\u0443\u044E \u0437\u0430\u0434\u0430\u0447\u0443 \u0435\u0441\u043B\u0438 \u0432\u044B \u0447\u0442\u043E \u043B\u0438\u0431\u043E \u043C\u0435\u043D\u044F\u043B\u0438 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435.</li>\n            <li>\u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430:</li>\n            <li>LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F :&nbsp; \u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043D\u0430\u0433\u0440\u0435\u0432\u0430.</li>\n            <li>LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0435\u0442\u0438 WIFI : &nbsp; \u0421\u0438\u043D\u0438\u0439 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u043F\u043E\u0438\u0441\u043A\u0430 \u0441\u0435\u0442\u0438 \u0438 \u0438\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043F\u0440\u0438\u0431\u043E\u0440\u0430.</li>\n            <li>\u0412\u044B\u0441\u043E\u043A\u043E\u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442\u043D\u044B\u0439 \u0421\u0435\u0433\u043C\u0435\u043D\u0442\u043D\u044B\u0439 LED&nbsp; \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0431\u0435\u043B\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0441 \u0444\u0443\u043D\u043A\u0446\u0438\u0435\u0439 \u0437\u0430\u0442\u0443\u0445\u0430\u043D\u0438\u044F \u044F\u0440\u043A\u043E\u0441\u0442\u0438.</li>\n            <li>\u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 24\u043C\u043C.</li>\n            <li>\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0441\u0430\u043C\u043E\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0438.</li>\n            <li>\u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.</li>\n            <li>\u0420\u0435\u0436\u0438\u043C \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u043A\u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438 \u0442\u0430\u0439\u043C\u0435\u0440\u043E\u043C \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u0435\u0437 \u0434\u0430\u0442\u0447\u0438\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</li>\n            <li>\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0431\u043E\u0440\u0430 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u0430 \u0434\u0430\u0442\u0447\u0438\u043A\u0430, \u044D\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u043E\u043B\u0435\u0437\u043D\u0430 \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043C\u0435\u043D\u044F\u0435\u0442\u0435\n            \u043F\u0440\u0438\u0431\u043E\u0440 \u043B\u044E\u0431\u043E\u0433\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0430 \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u043D\u043E\u0441\u043D\u043E\u0439 \u0434\u0430\u0442\u0447\u0438\u043A \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F\n            \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u043C,. \u041F\u0440\u043E\u0441\u0442\u043E \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u0442\u0435 \u043F\u0440\u0438\u0431\u043E\u0440 \u0430 \u0441\u0442\u0430\u0440\u044B\u0439 \u0434\u0430\u0442\u0447\u0438\u043A \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435, \u0432&nbsp;\n            \u043F\u0440\u0438\u0431\u043E\u0440\u0435 W\u00C4RMEHAUS WH300 WIFI \u043F\u0440\u043E\u0441\u0442\u043E \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0442\u043E\u0442 \u0434\u0430\u0442\u0447\u0438\u043A \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C.</li>\n            <li>\u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.</li>\n            <li>\u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 <span style=\"color: rgb(178, 34, 34); --darkreader-inline-color:#ffb0b0;\n            \" data-darkreader-inline-color=\"\">Schneider \u0441\u0435\u0440\u0438\u044F Unica, Simon \u0441\u0435\u0440\u0438\u044F 27 Neos.</span></li>\n            <li>\u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439,\n            \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.</li>\n            <li>\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.</li>\n          </ul>\n\n      <hr>\n      <h4 align=\"center\">\n        \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n      </h4>\n      <ul>\n\t<li><span dir=\"rtl\">\u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F...&nbsp;&nbsp; +5...+40<sup>\u043E</sup>\u0421 </span></li>\n  <li><span dir=\"rtl\">\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...&nbsp;&nbsp;\n  0,1</span><sup><span dir=\"rtl\">\u043E</span></sup><span dir=\"rtl\">\u0421</span></li>\n  <li><span dir=\"rtl\">\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...&nbsp;&nbsp;\n  1</span><span dir=\"rtl\"><sup><span dir=\"rtl\">\u043E</span></sup><span dir=\"rtl\">\u0421</span></span></li>\n\t<li><span dir=\"rtl\">\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...&nbsp;&nbsp; 3600W</span></li>\n\t<li><span dir=\"rtl\">\u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <strong>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</strong>...&nbsp;&nbsp; 3000W</span></li>\n\t<li><span dir=\"rtl\">\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...&nbsp;&nbsp; 16\u0410</span></li>\n\t<li><span dir=\"rtl\">\u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....&nbsp; 13,5\u0410</span></li>\n\t<li><span dir=\"rtl\">\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...&nbsp;&nbsp; 230V +10%...- 10%</span></li>\n\t<li><span dir=\"rtl\">\u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...&nbsp;&nbsp; 0,18\u043A\u0433</span></li>\n\t<li><span dir=\"rtl\">\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...&nbsp;&nbsp; 85\u044580\u044538</span></li>\n\t<li>\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 24\u043C\u043C</li>\n\t<li>\u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C</li>\n\t<li>\u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0432 \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043E\u0447\u043D\u044B\u0439 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 (\u043D\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435), \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.</li>\n\t<li><span dir=\"rtl\">\u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C. (\u0410\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439)</span></li>\n\t<li><span dir=\"rtl\">\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1</span><sup><span dir=\"rtl\">\u043E</span></sup><span dir=\"rtl\">\u0421</span></li>\n\t<li><span dir=\"rtl\">\u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...&nbsp;&nbsp; IP20</span></li>\n</ul>\n*\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n\u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n\n<p>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 Schneider \u0441\u0435\u0440\u0438\u044F Unica, Simon \u0441\u0435\u0440\u0438\u044F 27 Neos.</p>\n        </div>\n      <img src=\"assets/images/termostats/touchscreenWH900Digital/frames WARMEHAUS WH1000 2 s400(2)(1).jpg\"\n      alt=\"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\">\n      <hr>\n      </div>\n        <h4 align=\"center\">\n        \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n      </h4>\n      <p align=\"center\">\n        <i>\u0411\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n      </p>\n      <div id=\"container\" align=\"center\" class=\"imageCont\">\n\n      <img src=\"assets/images/termostats/wi-fiWH300WIFI/wi-fi-termostat.jpg\"\n       style=\"padding-left: 5%; padding-right: 2%; padding-top:15px; max-height: 240px\"\n       alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B wifi \u0411\u0435\u043B\u044B\u0439\">\n      <img src=\"assets/images/termostats/wi-fiWH300WIFI/0c2e17c9a1f5d0c869ce2dff1009050a.jpg\"\n      style=\"padding-left: 2%; padding-right: 5%; padding-top:15px; max-height: 240px\"\n      alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0432\u0430\u0439\u0444\u0430\u0439 \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n\n      </div>\n      <hr>\n      </div>\n    ",
        picPath: 'assets/images/termostats/wi-fiWH300WIFI/wi-fi-termostat.jpg',
        picAlt: 'Тепморегулятор WI-FI WH300WIFI для теплого пола в Минске.'
    },
    // Терморегулятор WÄRMEHAUS WH800 BASIC
    {
        id: 84,
        name: 'Терморегулятор WÄRMEHAUS WH800 BASIC',
        nominal: 'Аналоговый',
        price: 105.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH800 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 \u0441\u0443\u0442\u043E\u043A.\n        \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 \u043E\u0434\u043D\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n          <li>\n          \u041D\u0435\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C  \"\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n          </li>\n          <li>\n          \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B <b>\u0432 \u043E\u0434\u043D\u043E \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435</b>.\n          </li>\n          <li>\n          \u0420\u0443\u0447\u043D\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.\n          </li>\n          <li>\n          \u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0414\u0432\u0443\u0445\u0446\u0432\u0435\u0442\u043D\u044B\u0439 LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F : \u0417\u0435\u043B\u0435\u043D\u044B\u0439 - \u0440\u0435\u0436\u0438\u043C \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F, \u041A\u0440\u0430\u0441\u043D\u044B\u0439 - \u0440\u0435\u0436\u0438\u043C \u043D\u0430\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 24\u043C\u043C.\n          </li>\n          <li>\n          \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F...   +10...+40<sup><small>o</small></sup>\u0421\n          </li>\n          <li>\n          \u0421\u0430\u043C\u043E\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430.\n          </li>\n          <li>\n          \u0422\u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.\n          </li>\n          <li>\n          \u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.\n          </li>\n          <li>\n          \u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 <b>Schneider \u0441\u0435\u0440\u0438\u044F Unica, Simon \u0441\u0435\u0440\u0438\u044F 27 Neos</b>.\n          </li>\n          <li>\n          \u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00C4RMEHAUS PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439, \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.\n          </li>\n          <li>\n          \u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.\n          </li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n            <li>\n            \u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F...   +10...+40<sup><small>o</small></sup>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   0,5<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B...   1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   3600W\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F <b>\u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*</b>...   3000W\n            </li>\n            <li>\n            \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438...   16\u0410\n            </li>\n            <li>\n            \u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438....  13,5\u0410\n            </li>\n            <li>\n            \u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F...   230V +10%...- 10%\n            </li>\n            <li>\n            \u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438...   0,170\u043A\u0433\n            </li>\n            <li>\n            \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B...   85\u044580\u044538\n            </li>\n            <li>\n            \u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 24\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C\n            </li>\n            <li>\n            \u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK\n            </li>\n            <li>\n            \u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C...   10kOm/25<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1<sup><small>o</small>\u0421\n            </li>\n            <li>\n            \u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B...   IP20\n            </li>\n          </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <img src=\"assets/images/termostats/analogWH800Basic/frames WARMEHAUS WH1000 2 s40.jpg\"\n        alt=\"\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438\">\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0411\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/analogWH800Basic/6f507faf740c4999c67b71cfad220a16.jpg\"\n        style=\"padding-left: 5%; padding-right: 2%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH800Basic/2307bd7ff938c2039f8264ff9a1a1e8c.jpg\"\n        style=\"padding-left: 2%; padding-right: 5%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n        <img src=\"assets/images/termostats/analogWH800Basic/0e789451028da56e9fa0eeeda3183112.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 400px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH800Basic/fa54305814ef162e752c6ca9d462f19c.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 420px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        <img src=\"assets/images/termostats/analogWH800Basic/\u0422\u0415\u041F\u041B\u042B\u0419_\u041F\u041E\u041B_\u0422\u0415\u0420\u041C\u041E\u0420\u0415\u0413\u0423\u041B\u042F\u0422\u041E\u0420_WARMEHAUS_800_2_s10001.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 680px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/analogWH800Basic/95d4d01e3b520027bad3b33c5a331897.jpg',
        picAlt: 'Терморегулятор WÄRMEHAUS WH800 BASIC простой и дешевый'
    },
    // Терморегулятор WÄRMEHAUS WH700 CLASSIC
    {
        id: 85,
        name: 'Терморегулятор WÄRMEHAUS WH700 CLASSIC',
        nominal: 'Аналоговый',
        price: 105.00,
        description: "\n      <div>\n      <hr>\n          <h4 align=\"center\">\n          \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\n        </h4>\n        <div class=\"container text\">\n        <i>\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 W\u00C4RMEHAUS WH700 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0433\u043E \u0442\u0435\u043F\u043B\u043E\u0433\u043E \u043F\u043E\u043B\u0430.</i>\n        <style>\n        li{\n          text-align: left;\n        }\n        </style>\n        <ul>\n        <li>\n        \u041D\u0435\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C\u044B\u0439 \u0442\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C \"\u0422\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B\".\n        </li>\n        <li>\u0420\u0443\u0447\u043D\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B.</li>\n        <li>\u0418\u043D\u0434\u0438\u043A\u0430\u0446\u0438\u044F \u043D\u0430\u0433\u0440\u0435\u0432\u0430.</li>\n        <li>\u0414\u0432\u0443\u0445\u0446\u0432\u0435\u0442\u043D\u044B\u0439 LED \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F : \u0417\u0435\u043B\u0435\u043D\u044B\u0439 - \u0440\u0435\u0436\u0438\u043C \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F, \u041A\u0440\u0430\u0441\u043D\u044B\u0439 - \u0440\u0435\u0436\u0438\u043C \u043D\u0430\u0433\u0440\u0435\u0432\u0430.</li>\n        <li>\u0422\u043E\u043D\u043A\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C, \u0432\u0441\u0435\u0433\u043E 24\u043C\u043C.</li>\n        <li>\u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F... +10...+40<sup>\u043E</sup>\u0421</li>\n        <li>\u0421\u0430\u043C\u043E\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430.</li>\n        <li>\u0422\u0435\u0440\u043C\u043E\u0437\u0430\u0449\u0438\u0442\u0430. \u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u0437\u0430\u0449\u0438\u0442\u0430 \u043F\u0440\u0438\u0431\u043E\u0440\u0430 \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0435\u0432\u0430.</li>\n        <li>\u041D\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0434\u043E 16\u0410.</li>\n        <li>\u041F\u0440\u0438\u0431\u043E\u0440 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C \u0441 \u0440\u0430\u043C\u043A\u0430\u043C\u0438 Schneider \u0441\u0435\u0440\u0438\u044F Unica, Simon \u0441\u0435\u0440\u0438\u044F 27 Neos.</li>\n        <li>\u0412\u0441\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B W\u00E4rmehaus PREMIUM \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u043E\u0439 \u0442\u0440\u0435\u0445\u043B\u0435\u0442\u043D\u0435\u0439 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0435\u0439,\n        \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u043D\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439.</li>\n        <li>\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F - 3 \u0433\u043E\u0434\u0430.</li>\n        </ul>\n        <hr>\n        <h4 align=\"center\">\n          \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435\n        </h4>\n        <ul>\n      <li>\u041F\u0440\u0435\u0434\u0435\u043B\u044B \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F... +10...+40<sup>\u043E</sup>\u0421</li>\n      <li>\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B... 0,5<sup>\u043E</sup>\u0421</li>\n      <li>\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B... 1<sup>\u043E</sup>\u0421</li>\n      <li>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438... 3600W</li>\n      <li>\u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438*... 3000W</li>\n      <li>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438... 16\u0410</li>\n      <li>\u041D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438.... 13,5\u0410</li>\n      <li>\u041D\u0430\u043F\u0440\u044F\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u0442\u0430\u043D\u0438\u044F... 230V +10%...- 10%</li>\n      <li>\u041C\u0430\u0441\u0441\u0430 \u0432 \u043F\u043E\u043B\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u0438... 0,17\u043A\u0433</li>\n      <li>\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442\u043D\u044B\u0435 \u0440\u0430\u0437\u043C\u0435\u0440\u044B... 85\u044580\u044538</li>\n      <li>\u0413\u043B\u0443\u0431\u0438\u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438... 24\u043C\u043C</li>\n      <li>\u041F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0430\u044F \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u00D864\u043C\u043C, \u0433\u043B\u0443\u0431\u0438\u043D\u0430 40\u043C\u043C</li>\n      <li>\u041F\u0440\u0438 \u043D\u0430\u0440\u0443\u0436\u043D\u043E\u043C \u043C\u043E\u043D\u0442\u0430\u0436\u0435 \u043A\u043E\u0440\u043E\u0431\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0435\u0440 DK</li>\n      <li>\u0414\u0430\u0442\u0447\u0438\u043A \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B \u0432\u043D\u0435\u0448\u043D\u0438\u0439 3\u043C... 10kOm/25<sup>\u043E</sup>\u0421</li>\n      <li>\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0433\u0438\u0441\u0442\u0435\u0440\u0435\u0437\u0438\u0441 1<sup>\u043E</sup>\u0421</li>\n      <li>\u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0437\u0430\u0449\u0438\u0442\u044B... IP20</li>\n  </ul>\n          *\u041D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 \u043D\u043E\u043C\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0439.\n          \u041F\u0440\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u0434\u043E\u043B\u0433\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0441\u0432\u044B\u0448\u0435 3000 \u0412\u0442 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u043D\u0435\u0448\u043D\u0435\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0440\u0430.\n          </div>\n        <hr>\n        </div>\n          <h4 align=\"center\">\n          \u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430\n        </h4>\n        <p align=\"center\">\n          <i>\u0411\u0435\u043B\u044B\u0439 / \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C</i>\n        </p>\n        <div id=\"container\" align=\"center\" class=\"imageCont\">\n        <img src=\"assets/images/termostats/analogWH700Classic/a5d82f3e6f2c598c31f1d05f3e1b0455.jpg\"\n        style=\"padding-left: 5%; padding-right: 2%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0410\u043B\u044C\u043F\u0438\u0439\u0441\u043A\u0438\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH700Classic/df1f17e39a8e2c4e3f043426d3cfdbc0.jpg\"\n        style=\"padding-left: 2%; padding-right: 5%; padding-top:15px; max-height: 240px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0430\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0421\u043B\u043E\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0441\u0442\u044C\">\n        <img src=\"assets/images/termostats/analogWH700Classic/9b114f8623a0d6ce11f43b6bfe67a567.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 400px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439\">\n        <img src=\"assets/images/termostats/analogWH700Classic/ff03f0444a9ade882550abcf63d24765.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 420px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        <img src=\"assets/images/termostats/analogWH700Classic/\u0422\u0415\u041F\u041B\u042B\u0419 \u041F\u041E\u041B_\u0422\u0415\u0420\u041C\u041E\u0420\u0415\u0413\u0423\u041B\u042F\u0422\u041E\u0420_WARMEHAUS_CLASSIC WH700_s10001.jpg\"\n        style=\"padding-left: 5%; padding-right: 5%; padding-top:15px; max-height: 680px\"\n        alt=\"\u0422\u0435\u0440\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0442\u0435\u043F\u043B\u044B\u0439 \u043F\u043E\u043B \u0441\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430\">\n        </div>\n        <hr>\n        </div>\n      ",
        picPath: 'assets/images/termostats/analogWH700Classic/8160fefcd902745d5205765867e722ec.jpg',
        picAlt: 'Терморегулятор WÄRMEHAUS WH700 CLASSIC не дорогой'
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aleks\OneDrive\Documents\GitHub\Warmehaus\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map