(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Rajat\Angulars\latestPortfolio\Portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "JL6K":
/*!****************************************!*\
  !*** ./src/app/httpService.service.ts ***!
  \****************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class HttpService {
    constructor(http) {
        this.http = http;
        this.test = "How r u?";
    }
    httpGet(url) {
        return this.http.get(url);
    }
    httpPost(url, {}) {
        return this.http.post(url, { name: "Subrat" });
    }
    sendEmail(url, data) {
        return this.http.post(url, data);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var _app_httpService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/httpService.service */ "JL6K");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");









function AppComponent_div_275_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Put proper mailId.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_275_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_275_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors == null ? null : ctx_r0.f.email.errors.email);
} }
function AppComponent_div_278_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Mobile Number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_278_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please, Enter 10 digit Mobile Number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_278_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_278_div_1_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_278_div_2_Template, 2, 0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.mobile.errors == null ? null : ctx_r1.f.mobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.mobile.errors == null ? null : ctx_r1.f.mobile.errors.pattern);
} }
const _c0 = function (a0) { return { "limitTextHeight": a0 }; };
// import * as $ from 'jquery';
class AppComponent {
    constructor(notifierService, fb, http, spinner) {
        this.notifierService = notifierService;
        this.fb = fb;
        this.http = http;
        this.spinner = spinner;
        this.title = 'Portfolio';
        this.loader = false;
        this.FormData = this.fb.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email])]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.isReadMore = true;
    }
    get f() {
        return this.FormData.controls;
    }
    Send(FormData) {
        this.spinner.start();
        if (FormData.status == "VALID") {
            console.log("yes works submit", FormData);
            this.http.sendEmail("http://127.0.0.1:2806/sendmail", FormData.value).subscribe(data => {
                let res = data;
                this.spinner.stop();
                swal.fire({
                    html: 'Your mail and message has been sent to <b>Rajat</b> ',
                    showConfirmButton: false,
                    imageUrl: 'assets/images/thanks.PNG',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
                console.log(`👏 > 👏 > 👏 > 👏 ${FormData.value.name} is successfully register and mail has been sent and the message id is ${res.messageId}`);
            }, err => {
                console.log(err);
                this.spinner.stop();
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Some Technical Error, work in progress',
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonColor: '#d33',
                });
            }, () => {
                // this.loading = false;
                // this.buttionText = "Submit";
            });
        }
        else {
            this.spinner.stop();
            swal.fire({
                icon: 'info',
                text: 'Please enter all fields',
                showCancelButton: false,
                cancelButtonColor: '#d33',
            });
        }
    }
    ngOnInIt() {
        $(document).ready(function () {
            $(window).scroll(function () {
                // sticky navbar on scroll script
                if (scrollY > 20) {
                    $('.navbar').addClass("sticky");
                }
                else {
                    $('.navbar').removeClass("sticky");
                }
                // scroll-up button show/hide script
                if (scrollY > 500) {
                    $('.scroll-up-btn').addClass("show");
                }
                else {
                    $('.scroll-up-btn').removeClass("show");
                }
            });
            // slide-up script
            $('.scroll-up-btn').click(function () {
                $('html').animate({ scrollTop: 0 });
                // removing smooth scroll on slide-up button click
                $('html').css("scrollBehavior", "auto");
            });
            $('.navbar .menu li a').click(function () {
                // applying again smooth scroll on menu items click
                $('html').css("scrollBehavior", "smooth");
            });
            // toggle menu/navbar script
            $('.menu-btn').click(function () {
                $('.navbar .menu').toggleClass("active");
                $('.menu-btn i').toggleClass("active");
            });
            // typing text animation script
            // Typed:any
            var typed = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a(".typing", {
                strings: ["Developer", "Web Designer", "Engineer", "Designer", "Freelancer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
            var typed = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a(".typing-2", {
                strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
            // owl carousel script
            $('.carousel').owlCarousel({
                margin: 20,
                loop: true,
                autoplayTimeOut: 2000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false
                    }
                }
            });
        });
    }
    hireMe() {
        console.log("Hire me func");
        this.notifierService.notify("info", "This section is in progress");
    }
    showText() {
        this.isReadMore = !this.isReadMore;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_httpService_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 287, vars: 85, consts: [["fgsColor", "#fff", "fgsType", "ball-spin-clockwise-fade-rotating", "text", "As we loading..Keep relax your eyes", 1, "loader"], [1, "scroll-up-btn"], [1, "fas", "fa-angle-up"], [1, "navbar"], [1, "max-width"], [1, "logo"], ["href", "#"], [1, "menu"], ["href", "#home", 1, "menu-btn"], ["href", "#about", 1, "menu-btn"], ["href", "#education", 1, "menu-btn"], ["href", "#skills", 1, "menu-btn"], ["href", "#technology", 1, "menu-btn"], ["href", "#contact", 1, "menu-btn"], [1, "menu-btn"], [1, "fas", "fa-bars"], ["id", "home", 1, "home"], [1, "row"], [1, "home-content"], [1, "text-1"], [1, "text-2"], [1, "text-3"], [1, "typing"], [3, "click"], ["id", "about", 1, "about"], [1, "title"], [1, "about-content"], [1, "column", "left"], ["src", "assets/images/self.JPG", "alt", ""], [1, "column", "right"], [1, "text"], [1, "typing-2"], ["href", "#contact", 1, "link"], ["id", "education", 1, "education"], [1, "h4", "text-center", "mb-4", "title"], [1, "card"], ["data-aos", "fade-right", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-3", "bg-danger"], [1, "card-body", "cc-education-header"], [2, "padding-top", "55px", "padding-left", "80px"], [2, "padding-top", "18px", "padding-left", "35px"], ["data-aos", "fade-left", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-9"], [1, "card-body"], [1, "subject"], [1, "category"], [2, "padding-top", "18px", "padding-left", "54px"], ["id", "skills", 1, "skills"], [1, "skills-content"], [3, "ngClass"], ["href", "#contact", 1, "simpleText"], [1, "bars"], [1, "info"], [1, "line", "html"], [1, "line", "css"], [1, "line", "js"], [1, "line", "php"], [1, "line", "mysql"], [1, "line", "daml"], ["id", "technology", 1, "technology"], [1, "circleProgress"], [3, "percent", "radius", "outerStrokeWidth", "innerStrokeWidth", "outerStrokeColor", "innerStrokeColor", "animation", "animationDuration", "lazy", "showImage", "imageSrc", "imageHeight", "imageWidth"], ["id", "contact", 1, "contact"], [1, "contact-content"], [1, "icons"], [1, "fas", "fa-user"], [1, "head"], [1, "sub-title"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-envelope"], [1, "contact-form", 3, "formGroup"], [1, "fields"], [1, "field", "name"], ["type", "text", "placeholder", "Name", "required", "", "formControlName", "fullName", 1, "fullname"], [1, "field", "email"], ["type", "text", "placeholder", "Email", "required", "", "formControlName", "email", 1, "email-input"], ["class", "alert alert-danger", 4, "ngIf"], [1, "field"], ["type", "text", "placeholder", "Mobile", "required", "", "formControlName", "mobile", 1, "subject"], [1, "field", "textarea"], ["cols", "30", "rows", "10", "placeholder", "Message..", "formControlName", "comment", "name", "comment", 1, "message"], [1, "button-area"], ["type", "submit", "name", "send", 1, "send-msg", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "notifier-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngx-ui-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Portfo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "lio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Hello, my name is");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Rajat Srivastava");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "And I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_43_listener() { return ctx.hireMe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Hire me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Hey I'm Rajat and I'm a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " I am an allround web developer, I am a programmer with good knowledge of frontend as well as backend. I am working in Infosys limited with experience of 3 years as a Senior System Engineer, where I worked on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Blockchain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " projects with different clients. I love spending time to developing creative UI designs, prototyping and framework. I specialized in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Angular 6+");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " version with Angular material, Bootstrap, ReactJs. Beside this also have knowlege of NodeJs, Python, JAVA with good hands on different tools like Jira, Jenkins, Postman etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Always enthusiast to learn new and latest technologies. For other details and CV please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "2014 - 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Bachelor's Degree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Bachelor of Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "PSIT College of Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " PSIT College of Engineering is Dr.APJAKTU Affiliated and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "ranks 1st");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " in Kanpur, Uttar Pradesh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Completed B.Tech. in Mechanical Engineering. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Won the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Best Project Award");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "ignite startup contest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " 2 times. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " Made a Project like Automation of cooler which is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Patent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " and low cost Air Conditioner Project. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "2012 - 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " Bachelor's Degree ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Vishwanath Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " Vishwanath Academy is CBSE Affiliated having good rank in Lucknow, Uttar Pradesh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " Completed Intermediate with good percentage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "2010 - 2011");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, " High School ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "High School");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "h4", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Vishwanath Academy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " Vishwanath Academy is CBSE Affiliated having good rank in Lucknow, Uttar Pradesh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, " Completed High School with good CGPA. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "section", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "My skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "My creative skills & experiences.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " As a part of different projects I specialised in Angular, having good knowledge of HTML as well as HTML 5, also having skilled in CSS, Material UI, Angular Material, Bootstrap,Responsive Web designing. Also have idea of UI prototyping. As a frontend end developer I am updating with latest technologies like React Js in which I am in learning Phase. Also have knowledge of backend so that having understanding of backend frontend both. Backend technologies like Python, Node Js, JAVA, DAML. Beside these technical languages have worked in different tools like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Visual Studio, Eclipse, Jira, Jenkins, Postman, Putty, AWS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, " For more details please");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_161_listener() { return ctx.showText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "90%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "60%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "DBMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "DAML");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "section", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "circle-progress", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "1. Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "circle-progress", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "2. Node Js");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "circle-progress", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "3. Hyperledger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](223, "circle-progress", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "4. Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "circle-progress", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "5. Jira");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "circle-progress", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "6. Jenkins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, " I hope you like my portfolio. For other details or for Resume please contact in below E-mail id. If you have any query feel free to message with section given in right. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "Rajat Srivastava");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "Lucknow,U.P., India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "rajatsripsit@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "Message me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "form", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](272, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](275, AppComponent_div_275_Template, 2, 1, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](277, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](278, AppComponent_div_278_Template, 3, 2, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](280, "textarea", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "button", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_282_listener() { return ctx.Send(ctx.FormData); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, " Send message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "Created By Rajat Srivastava.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](83, _c0, ctx.isReadMore));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isReadMore ? "Read More" : "Read Less", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percent", 85)("radius", 100)("outerStrokeWidth", 16)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 300)("lazy", true)("showImage", true)("imageSrc", "/assets/images/angularIcon.svg")("imageHeight", 50)("imageWidth", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percent", 75)("radius", 100)("outerStrokeWidth", 16)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 300)("lazy", true)("showImage", true)("imageSrc", "/assets/images/nodeJs.png")("imageHeight", 60)("imageWidth", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percent", 65)("radius", 100)("outerStrokeWidth", 16)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 300)("lazy", true)("showImage", true)("imageSrc", "/assets/images/hyper.png")("imageHeight", 60)("imageWidth", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percent", 80)("radius", 100)("outerStrokeWidth", 16)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 300)("lazy", true)("showImage", true)("imageSrc", "/assets/images/boot.png")("imageHeight", 60)("imageWidth", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percent", 75)("radius", 100)("outerStrokeWidth", 16)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 300)("lazy", true)("showImage", true)("imageSrc", "/assets/images/jira.png")("imageHeight", 50)("imageWidth", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("percent", 60)("radius", 100)("outerStrokeWidth", 16)("innerStrokeWidth", 8)("outerStrokeColor", "#78C000")("innerStrokeColor", "#C7E596")("animation", true)("animationDuration", 300)("lazy", true)("showImage", true)("imageSrc", "/assets/images/jenkins.png")("imageHeight", 50)("imageWidth", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.FormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.email.touched && ctx.f.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.mobile.touched && ctx.f.mobile.invalid);
    } }, directives: [angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierContainerComponent"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["CircleProgressComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');\n\n*[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    text-decoration: none;\r\n}\nhtml[_ngcontent-%COMP%]{\r\n    scroll-behavior: smooth;\r\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    width: 10px;\r\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\n\nsection[_ngcontent-%COMP%]{\r\n    padding: 100px 0;\r\n}\n.max-width[_ngcontent-%COMP%]{\r\n    max-width: 1300px;\r\n    padding: 0 80px;\r\n    margin: auto;\r\n}\n.about[_ngcontent-%COMP%], .education[_ngcontent-%COMP%], .services[_ngcontent-%COMP%], .skills[_ngcontent-%COMP%], .technology[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins', sans-serif;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%], .services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%], .skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\nsection[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    text-align: center;\r\n    font-size: 40px;\r\n    font-weight: 500;\r\n    margin-bottom: 60px;\r\n    padding-bottom: 20px;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\nsection[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 50%;\r\n    width: 180px;\r\n    height: 3px;\r\n    background: #111;\r\n    transform: translateX(-50%);\r\n}\nsection[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after{\r\n    position: absolute;\r\n    bottom: -8px;\r\n    left: 50%;\r\n    font-size: 20px;\r\n    color: crimson;\r\n    padding: 0 5px;\r\n    background: #fff;\r\n    transform: translateX(-50%);\r\n}\n\n.navbar[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    z-index: 999;\r\n    padding: 30px 0;\r\n    font-family: 'Ubuntu', sans-serif;\r\n    transition: all 0.3s ease;\r\n}\n.navbar.sticky[_ngcontent-%COMP%]{\r\n    padding: 15px 0;\r\n    background: crimson;\r\n}\n.navbar[_ngcontent-%COMP%]   .max-width[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 35px;\r\n    font-weight: 600;\r\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n    transition: all 0.3s ease;\r\n}\n.navbar.sticky[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n}\n.navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    display: inline-block;\r\n}\n.navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: block;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    margin-left: 25px;\r\n    transition: color 0.3s ease;\r\n}\n.navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: crimson;\r\n}\n.navbar.sticky[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: #fff;\r\n}\n\n.menu-btn[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 23px;\r\n    cursor: pointer;\r\n    display: none;\r\n}\n.scroll-up-btn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    height: 45px;\r\n    width: 42px;\r\n    background: crimson;\r\n    right: 30px;\r\n    bottom: 10px;\r\n    text-align: center;\r\n    line-height: 45px;\r\n    color: #fff;\r\n    z-index: 9999;\r\n    font-size: 30px;\r\n    border-radius: 6px;\r\n    border-bottom-width: 2px;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: all 0.3s ease;\r\n}\n.scroll-up-btn.show[_ngcontent-%COMP%]{\r\n    bottom: 30px;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n}\n.scroll-up-btn[_ngcontent-%COMP%]:hover{\r\n    filter: brightness(90%);\r\n}\n\n.home[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background: url('banner.jpg') no-repeat center;\r\n    height: 100vh;\r\n    color: #fff;\r\n    min-height: 500px;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\n.home[_ngcontent-%COMP%]   .max-width[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  display: flex;\r\n}\n.home[_ngcontent-%COMP%]   .max-width[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  margin-right: 0;\r\n}\n.home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-1[_ngcontent-%COMP%]{\r\n    font-size: 27px;\r\n}\n.home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%]{\r\n    font-size: 75px;\r\n    font-weight: 600;\r\n    margin-left: -3px;\r\n}\n.home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    margin: 5px 0;\r\n}\n.home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n    font-weight: 500;\r\n}\n.home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    background: crimson;\r\n    color: #fff;\r\n    font-size: 25px;\r\n    padding: 12px 36px;\r\n    margin-top: 20px;\r\n    font-weight: 400;\r\n    border-radius: 6px;\r\n    border: 2px solid crimson;\r\n    transition: all 0.3s ease;\r\n}\n.home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: crimson;\r\n    background: none;\r\n}\n\n.about[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after{\r\n    content: \"who i am\";\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n    width: 400px;\r\n    object-fit: cover;\r\n    border-radius: 6px;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    background: crimson;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n    padding: 10px 30px;\r\n    margin-top: 20px;\r\n    border-radius: 6px;\r\n    border: 2px solid crimson;\r\n    transition: all 0.3s ease;\r\n}\n.about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: crimson;\r\n    background: none;\r\n}\n\n.services[_ngcontent-%COMP%], .technology[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n    background: #111;\r\n}\n.services[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before, .technology[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before{\r\n    background: #fff;\r\n}\n.services[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after, .technology[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after{\r\n    background: #111;\r\n    content: \"what i provide\";\r\n}\n.services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    width: calc(33% - 20px);\r\n    background: #222;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 35px 25px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n}\n.services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{\r\n    background: crimson;\r\n}\n.services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\r\n    transition: all 0.3s ease;\r\n}\n.services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .box[_ngcontent-%COMP%]{\r\n    transform: scale(1.05);\r\n}\n.services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    color: crimson;\r\n    transition: color 0.3s ease;\r\n}\n.services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n}\n.services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    margin: 10px 0 7px 0;\r\n}\n\n.education[_ngcontent-%COMP%], .technology[_ngcontent-%COMP%]{\r\n    color:#fff;\r\n    background: #111;\r\n}\n.education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before, .technology[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::before{\r\n    background: #fff;\r\n}\n.education[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after, .technology[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after{\r\n    background: #111;\r\n}\nh4[_ngcontent-%COMP%]{\r\n    color:#4a4843;\r\nfont-size: 20px;\r\nmargin-bottom: 10px;\r\nmargin-top:2px;\r\n}\n.subject[_ngcontent-%COMP%]{\r\n    color: #111;\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin: 8px 0 7px 0;\r\n    padding: 8px 0 0px 30px\r\n}\n.category[_ngcontent-%COMP%] {\r\n    margin: 10px 0 7px 0;\r\n    padding: 0px 0 0px 30px\r\n}\n.card[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 0.1875rem;\r\n    display: inline-block;\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);\r\n  }\n.card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    color: #222;\r\n    padding: 0px 0 0px 65px\r\n}\n.card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    color: #222;\r\n    \r\n}\n\n.skills[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after{\r\n    content: \"what i know\";\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{\r\n    width: calc(50% - 30px);\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n}\n.limitTextHeight[_ngcontent-%COMP%] {\r\n    height: 87px;\r\n    overflow: hidden;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    background: crimson;\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    padding: 8px 16px;\r\n    margin-top: 20px;\r\n    border-radius: 6px;\r\n    border: 2px solid crimson;\r\n    transition: all 0.3s ease;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: crimson;\r\n    background: none;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .bars[_ngcontent-%COMP%]{\r\n    margin-bottom: 15px;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-bottom: 5px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{\r\n    height: 5px;\r\n    width: 100%;\r\n    background: lightgrey;\r\n    position: relative;\r\n}\n.skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    background: crimson;\r\n}\n.skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .html[_ngcontent-%COMP%]::before{\r\n    width: 90%;\r\n}\n.skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .css[_ngcontent-%COMP%]::before{\r\n    width: 60%;\r\n}\n.skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .js[_ngcontent-%COMP%]::before{\r\n    width: 80%;\r\n}\n.skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .php[_ngcontent-%COMP%]::before{\r\n    width: 50%;\r\n}\n.skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .mysql[_ngcontent-%COMP%]::before{\r\n    width: 70%;\r\n}\n.skills-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .daml[_ngcontent-%COMP%]::before{\r\n    width: 50%;\r\n}\n\n.circleProgress[_ngcontent-%COMP%]{\r\n    margin-bottom: 10% !important;\r\n    margin-left: 40px !important;\r\n}\n.circleProgress[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n   margin-bottom: 10% !important;\r\n    margin-right: 5px !important;\r\n}\n\n.technology[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after{\r\n    content: \"expertise\";\r\n}\n.technology[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n    background: #222;\r\n    border-radius: 6px;\r\n    padding: 25px 35px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n}\n.technology[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{\r\n    background: crimson;\r\n}\n.technology[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: all 0.3s ease;\r\n}\n.technology[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .box[_ngcontent-%COMP%]{\r\n    transform: scale(1.05);\r\n}\n.technology[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-weight: 500;\r\n    margin: 10px 0 7px 0;\r\n}\n.technology[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    width: 150px;\r\n    object-fit: cover;\r\n    border-radius: 50%;\r\n    border: 5px solid crimson;\r\n    transition: all 0.3s ease;\r\n}\n.technology[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    border-color: #fff;\r\n}\n.owl-dots[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\n.owl-dot[_ngcontent-%COMP%]{\r\n    height: 13px;\r\n    width: 13px;\r\n    margin: 0 5px;\r\n    outline: none!important;\r\n    border-radius: 50%;\r\n    border: 2px solid crimson!important;\r\n    transition: all 0.3s ease;\r\n}\n.owl-dot.active[_ngcontent-%COMP%]{\r\n    width: 35px;\r\n    border-radius: 14px;\r\n}\n.owl-dot.active[_ngcontent-%COMP%], .owl-dot[_ngcontent-%COMP%]:hover{\r\n    background: crimson!important;\r\n}\n\n.contact[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]::after{\r\n    content: \"get in touch\";\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{\r\n    width: calc(50% - 30px);\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 10px;\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{\r\n    margin: 10px 0;\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    height: 65px;\r\n    align-items: center;\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{\r\n    margin-left: 30px;\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    color: crimson;\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n}\n.contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{\r\n    color: #333;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{\r\n    height: 45px;\r\n    width: 100%;\r\n    margin-bottom: 35px;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n    width: 100%;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\r\n    margin-right: 10px;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 1px solid lightgrey;\r\n    border-radius: 6px;\r\n    outline: none;\r\n    padding: 0 15px;\r\n    font-size: 17px;\r\n    font-family: 'Poppins', sans-serif;\r\n    transition: all 0.3s ease;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{\r\n    border-color: #b3b3b3;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n  padding-top: 10px;\r\n  resize: none;\r\n}\n.contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button-area[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n}\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  display: block;\r\n  width: 160px!important;\r\n  height: 45px;\r\n  outline: none;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  flex-wrap: nowrap;\r\n  background: crimson;\r\n  border: 2px solid crimson;\r\n  transition: all 0.3s ease;\r\n}\n.right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .button-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n  color: crimson;\r\n  background: none;\r\n}\n\nfooter[_ngcontent-%COMP%]{\r\n    background: #111;\r\n    padding: 15px 23px;\r\n    color: #fff;\r\n    text-align: center;\r\n}\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: crimson;\r\n    text-decoration: none;\r\n}\nfooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-decoration: underline;\r\n}\n\n@media (max-width: 1104px) {\r\n    .about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 350px;\r\n        width: 350px;\r\n    }\r\n}\n@media (max-width: 991px) {\r\n    .max-width[_ngcontent-%COMP%]{\r\n        padding: 0 50px;\r\n    }\r\n}\n@media (max-width: 947px){\r\n    .menu-btn[_ngcontent-%COMP%]{\r\n        display: block;\r\n        z-index: 999;\r\n    }\r\n    .menu-btn[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%]:before{\r\n        content: \"\\f00d\";\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        height: 100vh;\r\n        width: 100%;\r\n        left: -100%;\r\n        top: 0;\r\n        background: #111;\r\n        text-align: center;\r\n        padding-top: 80px;\r\n        transition: all 0.3s ease;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .menu.active[_ngcontent-%COMP%]{\r\n        left: 0;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        margin: 20px 0;\r\n        font-size: 25px;\r\n    }\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%]{\r\n        font-size: 70px;\r\n    }\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]{\r\n        font-size: 35px;\r\n    }\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 23px;\r\n        padding: 10px 30px;\r\n    }\r\n    .max-width[_ngcontent-%COMP%]{\r\n        max-width: 930px;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        justify-content: center;\r\n        margin: 0 auto 60px;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{\r\n        flex: 100%;\r\n    }\r\n    .services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n        width: calc(50% - 10px);\r\n        margin-bottom: 20px;\r\n    }\r\n    .skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .contact-content[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin-bottom: 35px;\r\n    }\r\n}\n@media (max-width: 690px) {\r\n    .max-width[_ngcontent-%COMP%]{\r\n        padding: 0 23px;\r\n    }\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%]{\r\n        font-size: 60px;\r\n    }\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]{\r\n        font-size: 32px;\r\n    }\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n    }\r\n    .services[_ngcontent-%COMP%]   .serv-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n}\n@media (max-width: 500px) {\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-2[_ngcontent-%COMP%]{\r\n        font-size: 50px;\r\n    }\r\n    .home[_ngcontent-%COMP%]   .home-content[_ngcontent-%COMP%]   .text-3[_ngcontent-%COMP%]{\r\n        font-size: 27px;\r\n    }\r\n    .about[_ngcontent-%COMP%]   .about-content[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .skills[_ngcontent-%COMP%]   .skills-content[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{\r\n        font-size: 19px;\r\n    }\r\n    .contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n    }\r\n    .contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{\r\n        margin: 0;\r\n    }\r\n    .right[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error-box[_ngcontent-%COMP%]{\r\n       width: 150px;\r\n    }\r\n    .scroll-up-btn[_ngcontent-%COMP%]{\r\n        right: 15px;\r\n        bottom: 15px;\r\n        height: 38px;\r\n        width: 35px;\r\n        font-size: 23px;\r\n        line-height: 38px;\r\n    }\r\n}\nspan[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 35px;\r\n    font-weight: 600;\r\n}\n.simpleText[_ngcontent-%COMP%] {\r\n    border: none !important;\r\n    color: blue !important;\r\n    background: none !important;\r\n    font-weight: small !important;\r\n    font-size: 14px !important;\r\n    margin-top: 0px !important;\r\n    padding: 8px 8px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnSUFBZ0k7QUFEaEkseUJBQXlCO0FBR3pCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7Ozs7SUFJSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFHQSx5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2IsOENBQStEO0lBQy9ELGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsaUNBQWlDO0FBQ3JDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsY0FBYztBQUNkO0FBSUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxtQkFBbUI7SUFFWCwrQ0FBK0M7RUFDekQ7QUFDRjtJQUNJLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxXQUFXOztBQUVmO0FBQ0EsMkJBQTJCO0FBRTNCO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0EscUJBQXFCO0FBQ3JCO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQztBQUVBO0dBQ0csNkJBQTZCO0lBQzVCLDRCQUE0QjtBQUNoQztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksNkJBQTZCO0FBQ2pDO0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLHlCQUF5QjtBQUM3QjtBQUNBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0EsMkJBQTJCO0FBQzNCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFHQSxpQ0FBaUM7QUFDakM7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGNBQWM7UUFDZCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixhQUFhO1FBQ2IsV0FBVztRQUNYLFdBQVc7UUFDWCxNQUFNO1FBQ04sZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixtQkFBbUI7SUFDdkI7SUFDQTs7UUFFSSxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBOztRQUVJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBOztRQUVJLFNBQVM7SUFDYjtJQUNBO09BQ0csWUFBWTtJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogIGltcG9ydCBnb29nbGUgZm9udHMgKi9cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9VWJ1bnR1OndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuaHRtbHtcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4vKiBjdXN0b20gc2Nyb2xsIGJhciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzU1NTtcclxufVxyXG5cclxuLyogYWxsIHNpbWlsYXIgY29udGVudCBzdHlsaW5nIGNvZGVzICovXHJcbnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG59XHJcbi5tYXgtd2lkdGh7XHJcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICAgIHBhZGRpbmc6IDAgODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uYWJvdXQsIC5lZHVjYXRpb24sIC5zZXJ2aWNlcywgLnNraWxscywgLnRlY2hub2xvZ3ksIC5jb250YWN0LCBmb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCxcclxuLnNlcnZpY2VzIC5zZXJ2LWNvbnRlbnQsXHJcbi5za2lsbHMgLnNraWxscy1jb250ZW50LFxyXG4uY29udGFjdCAuY29udGFjdC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuc2VjdGlvbiAudGl0bGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xyXG59XHJcbnNlY3Rpb24gLnRpdGxlOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMTE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuc2VjdGlvbiAudGl0bGU6OmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtOHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi8qIG5hdmJhciBzdHlsaW5nICovXHJcbi5uYXZiYXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLm5hdmJhci5zdGlja3l7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xyXG59XHJcbi5uYXZiYXIgLm1heC13aWR0aHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5uYXZiYXIgLmxvZ28gYXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubmF2YmFyIC5sb2dvIGEgc3BhbntcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4ubmF2YmFyLnN0aWNreSAubG9nbyBhIHNwYW57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2YmFyIC5tZW51IGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2YmFyIC5tZW51IGxpIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xyXG59XHJcbi5uYXZiYXIgLm1lbnUgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbi5uYXZiYXIuc3RpY2t5IC5tZW51IGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyogbWVudSBidG4gc3R5bGluZyAqL1xyXG4ubWVudS1idG57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNjcm9sbC11cC1idG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uc2Nyb2xsLXVwLWJ0bi5zaG93e1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcbi5zY3JvbGwtdXAtYnRuOmhvdmVye1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XHJcbn1cclxuXHJcblxyXG4vKiBob21lIHNlY3Rpb24gc3R5bGluZyAqL1xyXG4uaG9tZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmhvbWUgLm1heC13aWR0aHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5ob21lIC5tYXgtd2lkdGggLnJvd3tcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmhvbWUgLmhvbWUtY29udGVudCAudGV4dC0xe1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbi5ob21lIC5ob21lLWNvbnRlbnQgLnRleHQtMntcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxufVxyXG4uaG9tZSAuaG9tZS1jb250ZW50IC50ZXh0LTN7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcbi5ob21lIC5ob21lLWNvbnRlbnQgLnRleHQtMyBzcGFue1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5ob21lIC5ob21lLWNvbnRlbnQgYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMzZweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLmhvbWUgLmhvbWUtY29udGVudCBhOmhvdmVye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4vKiBhYm91dCBzZWN0aW9uIHN0eWxpbmcgKi9cclxuLmFib3V0IC50aXRsZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIndobyBpIGFtXCI7XHJcbn1cclxuLmFib3V0IC5hYm91dC1jb250ZW50IC5sZWZ0e1xyXG4gICAgd2lkdGg6IDQ1JTtcclxufVxyXG4uYWJvdXQgLmFib3V0LWNvbnRlbnQgLmxlZnQgaW1ne1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAucmlnaHR7XHJcbiAgICB3aWR0aDogNTUlO1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAucmlnaHQgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYWJvdXQgLmFib3V0LWNvbnRlbnQgLnJpZ2h0IC50ZXh0IHNwYW57XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG4uYWJvdXQgLmFib3V0LWNvbnRlbnQgLnJpZ2h0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5hYm91dCAuYWJvdXQtY29udGVudCAucmlnaHQgYXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgY3JpbXNvbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLmFib3V0IC5hYm91dC1jb250ZW50IC5yaWdodCBhOmhvdmVye1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4vKiBzZXJ2aWNlcyBzZWN0aW9uIHN0eWxpbmcgKi9cclxuLnNlcnZpY2VzLCAudGVjaG5vbG9neXtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xyXG59XHJcbi5zZXJ2aWNlcyAudGl0bGU6OmJlZm9yZSxcclxuLnRlY2hub2xvZ3kgLnRpdGxlOjpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5zZXJ2aWNlcyAudGl0bGU6OmFmdGVyLFxyXG4udGVjaG5vbG9neSAudGl0bGU6OmFmdGVye1xyXG4gICAgYmFja2dyb3VuZDogIzExMTtcclxuICAgIGNvbnRlbnQ6IFwid2hhdCBpIHByb3ZpZGVcIjtcclxufVxyXG4uc2VydmljZXMgLnNlcnYtY29udGVudCAuY2FyZHtcclxuICAgIHdpZHRoOiBjYWxjKDMzJSAtIDIwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDM1cHggMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLnNlcnZpY2VzIC5zZXJ2LWNvbnRlbnQgLmNhcmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xyXG59XHJcbi5zZXJ2aWNlcyAuc2Vydi1jb250ZW50IC5jYXJkIC5ib3h7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5zZXJ2aWNlcyAuc2Vydi1jb250ZW50IC5jYXJkOmhvdmVyIC5ib3h7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbi5zZXJ2aWNlcyAuc2Vydi1jb250ZW50IC5jYXJkIGl7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG4uc2VydmljZXMgLnNlcnYtY29udGVudCAuY2FyZDpob3ZlciBpe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNlcnZpY2VzIC5zZXJ2LWNvbnRlbnQgLmNhcmQgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgN3B4IDA7XHJcbn1cclxuXHJcbi8qIGVkdWNhdGlvbiBzZWN0aW9uICovXHJcbi5lZHVjYXRpb24sIC50ZWNobm9sb2d5e1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMxMTE7XHJcbn1cclxuLmVkdWNhdGlvbiAudGl0bGU6OmJlZm9yZSxcclxuLnRlY2hub2xvZ3kgLnRpdGxlOjpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5lZHVjYXRpb24gLnRpdGxlOjphZnRlcixcclxuLnRlY2hub2xvZ3kgLnRpdGxlOjphZnRlcntcclxuICAgIGJhY2tncm91bmQ6ICMxMTE7XHJcbn1cclxuaDR7XHJcbiAgICBjb2xvcjojNGE0ODQzO1xyXG5mb250LXNpemU6IDIwcHg7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7XHJcbm1hcmdpbi10b3A6MnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5zdWJqZWN0e1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogOHB4IDAgN3B4IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMCAwcHggMzBweFxyXG59XHJcbi5jYXRlZ29yeSB7XHJcbiAgICBtYXJnaW46IDEwcHggMCA3cHggMDtcclxuICAgIHBhZGRpbmc6IDBweCAwIDBweCAzMHB4XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuLmNhcmQtYm9keSB1bHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgcGFkZGluZzogMHB4IDAgMHB4IDY1cHhcclxufVxyXG4uY2FyZC1ib2R5IHVsIGxpe1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBcclxufVxyXG4vKiBza2lsbHMgc2VjdGlvbiBzdHlsaW5nICovXHJcblxyXG4uc2tpbGxzIC50aXRsZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIndoYXQgaSBrbm93XCI7XHJcbn1cclxuLnNraWxscyAuc2tpbGxzLWNvbnRlbnQgLmNvbHVtbntcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDMwcHgpO1xyXG59XHJcbi5za2lsbHMgLnNraWxscy1jb250ZW50IC5sZWZ0IC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5saW1pdFRleHRIZWlnaHQge1xyXG4gICAgaGVpZ2h0OiA4N3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2tpbGxzIC5za2lsbHMtY29udGVudCAubGVmdCBwe1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uc2tpbGxzIC5za2lsbHMtY29udGVudCAubGVmdCBhe1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGNyaW1zb247XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5za2lsbHMgLnNraWxscy1jb250ZW50IC5sZWZ0IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLnNraWxscyAuc2tpbGxzLWNvbnRlbnQgLnJpZ2h0IC5iYXJze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uc2tpbGxzIC5za2lsbHMtY29udGVudCAucmlnaHQgLmluZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uc2tpbGxzIC5za2lsbHMtY29udGVudCAucmlnaHQgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnNraWxscyAuc2tpbGxzLWNvbnRlbnQgLnJpZ2h0IC5saW5le1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2tpbGxzIC5za2lsbHMtY29udGVudCAucmlnaHQgLmxpbmU6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxufVxyXG4uc2tpbGxzLWNvbnRlbnQgLnJpZ2h0IC5odG1sOjpiZWZvcmV7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbi5za2lsbHMtY29udGVudCAucmlnaHQgLmNzczo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG4uc2tpbGxzLWNvbnRlbnQgLnJpZ2h0IC5qczo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4uc2tpbGxzLWNvbnRlbnQgLnJpZ2h0IC5waHA6OmJlZm9yZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLnNraWxscy1jb250ZW50IC5yaWdodCAubXlzcWw6OmJlZm9yZXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGVudCAucmlnaHQgLmRhbWw6OmJlZm9yZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLyogVGVjaG5pY2FsIHNraWxscyAqL1xyXG4uY2lyY2xlUHJvZ3Jlc3N7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaXJjbGVQcm9ncmVzcyBhe1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIHRlY2hub2xvZ3kgc2VjdGlvbiBzdHlsaW5nICovXHJcbi50ZWNobm9sb2d5IC50aXRsZTo6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcImV4cGVydGlzZVwiO1xyXG59XHJcbi50ZWNobm9sb2d5IC5jYXJvdXNlbCAub3dsLWNhcm91c2VsIC5jYXJke1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDI1cHggMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi50ZWNobm9sb2d5IC5jYXJvdXNlbCAuY2FyZDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGNyaW1zb247XHJcbn1cclxuLnRlY2hub2xvZ3kgLmNhcm91c2VsIC5jYXJkIC5ib3h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLnRlY2hub2xvZ3kgLmNhcm91c2VsIC5jYXJkOmhvdmVyIC5ib3h7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbi50ZWNobm9sb2d5IC5jYXJvdXNlbCAuY2FyZCAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDEwcHggMCA3cHggMDtcclxufVxyXG4udGVjaG5vbG9neSAuY2Fyb3VzZWwgLmNhcmQgaW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgY3JpbXNvbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLnRlY2hub2xvZ3kgLmNhcm91c2VsIC5jYXJkOmhvdmVyIGltZ3tcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG4ub3dsLWRvdHN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5vd2wtZG90e1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLm93bC1kb3QuYWN0aXZle1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbi5vd2wtZG90LmFjdGl2ZSxcclxuLm93bC1kb3Q6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBjcmltc29uIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogY29udGFjdCBzZWN0aW9uIHN0eWxpbmcgKi9cclxuLmNvbnRhY3QgLnRpdGxlOjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiZ2V0IGluIHRvdWNoXCI7XHJcbn1cclxuLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAuY29sdW1ue1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMzBweCk7XHJcbn1cclxuLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLmxlZnQgcHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCAubGVmdCAuaWNvbnN7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4uY29udGFjdCAuY29udGFjdC1jb250ZW50IC5yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY29udGFjdCAuY29udGFjdC1jb250ZW50IC5yb3cgLmluZm97XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uY29udGFjdCAuY29udGFjdC1jb250ZW50IC5yb3cgaXtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLmluZm8gLmhlYWR7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLmluZm8gLnN1Yi10aXRsZXtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5jb250YWN0IC5yaWdodCBmb3JtIC5maWVsZHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250YWN0IC5yaWdodCBmb3JtIC5maWVsZCxcclxuLmNvbnRhY3QgLnJpZ2h0IGZvcm0gLmZpZWxkcyAuZmllbGR7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuLmNvbnRhY3QgLnJpZ2h0IGZvcm0gLnRleHRhcmVhe1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhY3QgLnJpZ2h0IGZvcm0gLm5hbWV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLmNvbnRhY3QgLnJpZ2h0IGZvcm0gLmZpZWxkIGlucHV0LFxyXG4uY29udGFjdCAucmlnaHQgZm9ybSAudGV4dGFyZWEgdGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uY29udGFjdCAucmlnaHQgZm9ybSAuZmllbGQgaW5wdXQ6Zm9jdXMsXHJcbi5jb250YWN0IC5yaWdodCBmb3JtIC50ZXh0YXJlYSB0ZXh0YXJlYTpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjogI2IzYjNiMztcclxufVxyXG4uY29udGFjdCAucmlnaHQgZm9ybSAudGV4dGFyZWEgdGV4dGFyZWF7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbi5jb250YWN0IC5yaWdodCBmb3JtIC5idXR0b24tYXJlYXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJpZ2h0IGZvcm0gLmJ1dHRvbi1hcmVhIGJ1dHRvbntcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTYwcHghaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYmFja2dyb3VuZDogY3JpbXNvbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBjcmltc29uO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLnJpZ2h0IGZvcm0gLmJ1dHRvbi1hcmVhIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi8qIGZvb3RlciBzZWN0aW9uIHN0eWxpbmcgKi9cclxuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogIzExMTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjNweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmZvb3RlciBzcGFuIGF7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5mb290ZXIgc3BhbiBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG4vKiByZXNwb25zaXZlIG1lZGlhIHF1ZXJ5IHN0YXJ0ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTA0cHgpIHtcclxuICAgIC5hYm91dCAuYWJvdXQtY29udGVudCAubGVmdCBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLm1heC13aWR0aHtcclxuICAgICAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk0N3B4KXtcclxuICAgIC5tZW51LWJ0bntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB9XHJcbiAgICAubWVudS1idG4gaS5hY3RpdmU6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5tZW51e1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTExO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubWVudS5hY3RpdmV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm1lbnUgbGl7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5tZW51IGxpIGF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuICAgIC5ob21lIC5ob21lLWNvbnRlbnQgLnRleHQtMntcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZSAuaG9tZS1jb250ZW50IC50ZXh0LTN7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUgLmhvbWUtY29udGVudCBhe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICB9XHJcbiAgICAubWF4LXdpZHRoe1xyXG4gICAgICAgIG1heC13aWR0aDogOTMwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLmNvbHVtbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5hYm91dCAuYWJvdXQtY29udGVudCAubGVmdHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLnJpZ2h0e1xyXG4gICAgICAgIGZsZXg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VydmljZXMgLnNlcnYtY29udGVudCAuY2FyZHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNraWxscyAuc2tpbGxzLWNvbnRlbnQgLmNvbHVtbixcclxuICAgIC5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgLmNvbHVtbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjkwcHgpIHtcclxuICAgIC5tYXgtd2lkdGh7XHJcbiAgICAgICAgcGFkZGluZzogMCAyM3B4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUgLmhvbWUtY29udGVudCAudGV4dC0ye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuICAgIC5ob21lIC5ob21lLWNvbnRlbnQgLnRleHQtM3tcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZSAuaG9tZS1jb250ZW50IGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlcnZpY2VzIC5zZXJ2LWNvbnRlbnQgLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmhvbWUgLmhvbWUtY29udGVudCAudGV4dC0ye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIH1cclxuICAgIC5ob21lIC5ob21lLWNvbnRlbnQgLnRleHQtM3tcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLnJpZ2h0IC50ZXh0LFxyXG4gICAgLnNraWxscyAuc2tpbGxzLWNvbnRlbnQgLmxlZnQgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QgLnJpZ2h0IGZvcm0gLmZpZWxkc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QgLnJpZ2h0IGZvcm0gLm5hbWUsXHJcbiAgICAuY29udGFjdCAucmlnaHQgZm9ybSAuZW1haWx7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IGZvcm0gLmVycm9yLWJveHtcclxuICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuICAgIC5zY3JvbGwtdXAtYnRue1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgfVxyXG59XHJcbnNwYW4gLmxpbmsge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc2ltcGxlVGV4dCB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogc21hbGwgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNlcnZpY2VzIGZvciBleHBlcmllbmNlICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "VO+5");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _httpService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./httpService.service */ "JL6K");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");














const customNotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 200,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_httpService_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierModule"].withConfig(customNotifierOptions),
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"].forRoot({
                // set defaults here
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#78C000",
                innerStrokeColor: "#C7E596",
                animationDuration: 300,
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_10__["NgxUiLoaderModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_5__["NgCircleProgressModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
