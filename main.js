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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kmitc_kmitc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kmitc/kmitc.component */ "./src/app/kmitc/kmitc.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");







var routes = [
    { path: 'kmitc', component: _kmitc_kmitc_component__WEBPACK_IMPORTED_MODULE_4__["KmitcComponent"] },
    { path: 'home', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"] },
    { path: '', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_6__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _folder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.service */ "./src/app/folder.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(folderSerive, db, toastr) {
        this.folderSerive = folderSerive;
        this.db = db;
        this.toastr = toastr;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this.folderSerive.getEmployees().subscribe(function (res) {
            _this.list = res.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    AppComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        this.folderSerive.formData = {
            fullName: '',
            id: null,
            empCode: '',
            position: '',
            mobile: ''
        };
    };
    AppComponent.prototype.onSubmit = function (form) {
        var data = Object.assign({}, form.value);
        delete data.id;
        console.log(data);
        if (form.value.id == null) {
            this.db.collection('Employees').add(data);
            this.toastr.success('Form Submitted Successfully', 'Employee' + data.name);
        }
        else {
            this.db.doc('Employees/' + form.value.id).update(data);
            this.toastr.success('Form Updated Successfully', 'Employee' + data.name);
        }
        this.resetForm(form);
    };
    AppComponent.prototype.onEdit = function (emp) {
        this.folderSerive.formData = Object.assign({}, emp);
    };
    AppComponent.prototype.onDelete = function (id) {
        if (confirm('Are Your Sure! ,Do you Want to Delete the Item?')) {
            this.db.doc('Employees/' + id).delete();
            this.toastr.warning('Employee Deleted Successfully', 'Employee table');
            this.resetForm();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_folder_service__WEBPACK_IMPORTED_MODULE_3__["FolderService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _kmitc_kmitc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kmitc/kmitc.component */ "./src/app/kmitc/kmitc.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var angular_secret_click__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-secret-click */ "./node_modules/angular-secret-click/fesm5/angular-secret-click.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _kmitc_kmitc_component__WEBPACK_IMPORTED_MODULE_13__["KmitcComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_16__["NotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                angular_secret_click__WEBPACK_IMPORTED_MODULE_17__["SecretClickModule"]
            ],
            providers: [
                { provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["FirestoreSettingsToken"], useValue: {} }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DatabaseService = /** @class */ (function () {
    function DatabaseService(http) {
        this.http = http;
    }
    DatabaseService.prototype.getUsers = function () {
        return this.http.get('../assets/database.json');
    };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid{\r\n  border-color: #DC3545;\r\n}\r\ndiv.validation-error{\r\n  width: 100%;\r\n  margin-top: .25rem;\r\n  font-size: 80%;\r\n  color: #DC3545;\r\n}\r\n.cursor:hover{\r\n  cursor: pointer;\r\n  border-color: lightskyblue ;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWR7XHJcbiAgYm9yZGVyLWNvbG9yOiAjREMzNTQ1O1xyXG59XHJcbmRpdi52YWxpZGF0aW9uLWVycm9ye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC4yNXJlbTtcclxuICBmb250LXNpemU6IDgwJTtcclxuICBjb2xvcjogI0RDMzU0NTtcclxufVxyXG4uY3Vyc29yOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItY29sb3I6IGxpZ2h0c2t5Ymx1ZSA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <h1 class=\"display-4\">Enter Form Data</h1>\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n        <input type=\"hidden\" [(ngModel)]=\"folderSerive.formData.id\" class=\"form-control\" name=\"id\" #id=\"ngModel\"\n        >\n        <div class=\"form-group\">\n          <input [(ngModel)]=\"folderSerive.formData.fullName\" class=\"form-control\" name=\"fullName\" #fullName=\"ngModel\"\n                 placeholder=\"Full Name\" required>\n          <div *ngIf=\"fullName.invalid && fullName.touched\" class=\"validation-error\">This Field is Required</div>\n        </div>\n        <div class=\"form-group\">\n          <input [(ngModel)]=\"folderSerive.formData.position\" class=\"form-control\" name=\"position\" #position=\"ngModel\"\n                 placeholder=\"Position\">\n        </div>\n        <div class=\"form-row \">\n          <div class=\"form-group col-md-6\">\n            <input [(ngModel)]=\"folderSerive.formData.empCode\" class=\"form-control\" name=\"empCode\" #empCode=\"ngModel\"\n                   placeholder=\"Emp Code\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <input [(ngModel)]=\"folderSerive.formData.mobile\" class=\"form-control\" name=\"mobile\" #mobile=\"ngModel\"\n                   placeholder=\"Phone\" required>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-lg btn-block btn-info\">SUBMIT</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-6\">\n      <mat-list>\n        <mat-form-field>\n          <mat-label>Search Here</mat-label>\n          <input #search matInput (keyup)=\"filterme(search.value)\" name=\"search\" type=\"text\">\n        </mat-form-field>\n        <h3 jlSecretClick (jlSecretProgress)=\"onProgress($event)\"\n            (jlSecretReset)=\"onReset()\" (jlSecretComplete)=\"opensusa()\" mat-subheader>List of Employees</h3>\n        <mat-divider></mat-divider>\n        <mat-list-item class=\"w-100 m-2   cursor\" *ngFor=\"let emp of showList\">\n          <mat-icon (click)=\"onEdit(emp)\" mat-list-icon>edit</mat-icon>\n          <h3 class=\"text-capitalize\" mat-line>{{emp.fullName}}</h3>\n          <p mat-line>Phone: {{emp.mobile}}</p>\n          <p mat-line>Position: {{emp.position}}</p>\n          <p mat-line>Code: {{emp.empCode}}</p>\n          <mat-icon (click)=\"onDelete(emp.id)\">close</mat-icon>\n          <mat-divider [inset]=\"true\"></mat-divider>\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _folder_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../folder.service */ "./src/app/folder.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(_folderSerive, _db, _router, _toastr) {
        this._folderSerive = _folderSerive;
        this._db = _db;
        this._router = _router;
        this._toastr = _toastr;
        this.showList = [];
    }
    Object.defineProperty(EmployeeComponent.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "folderSerive", {
        get: function () {
            return this._folderSerive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "db", {
        get: function () {
            return this._db;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "toastr", {
        get: function () {
            return this._toastr;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetForm();
        this._folderSerive.getEmployees().subscribe(function (res) {
            _this._list = res.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
            _this.showList = _this._list;
        });
    };
    EmployeeComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        this._folderSerive.formData = {
            fullName: '',
            id: null,
            empCode: '',
            position: '',
            mobile: ''
        };
    };
    EmployeeComponent.prototype.onSubmit = function (form) {
        var data = Object.assign({}, form.value);
        delete data.id;
        console.log(data);
        if (form.value.id == null) {
            this._db.collection('Employees').add(data);
            this._toastr.success('Form Submitted Successfully', 'Employee' + data.name);
        }
        else {
            this._db.doc('Employees/' + form.value.id).update(data);
            this._toastr.success('Form Updated Successfully', 'Employee' + data.name);
        }
        this.resetForm(form);
    };
    EmployeeComponent.prototype.onEdit = function (emp) {
        this._folderSerive.formData = Object.assign({}, emp);
    };
    EmployeeComponent.prototype.onDelete = function (id) {
        if (confirm('Are Your Sure! ,Do you Want to Delete the Item?')) {
            this._db.collection('AndroidApps').doc(id).delete();
            this._toastr.warning('Employee Deleted Successfully', 'Employee table');
            this.resetForm();
        }
    };
    EmployeeComponent.prototype.onProgress = function ($event) {
        console.log('Procress', event.preventDefault());
    };
    EmployeeComponent.prototype.onReset = function () {
        console.log('Reset');
    };
    EmployeeComponent.prototype.opensusa = function () {
        console.log('Complete');
        this._router.navigate(['/kmitc']);
    };
    EmployeeComponent.prototype.filterme = function (search) {
        console.log(search);
        this.showList = this._list.filter(function (value) {
            console.log(value.fullName, value.fullName.toLowerCase().includes(search));
            if (value.fullName.toLowerCase().includes(search.toLowerCase())) {
                console.log(value.fullName.includes(search));
                return value;
            }
            if (value.position.toLowerCase().includes(search.toLowerCase())) {
                console.log(value.position.includes(search));
                return value;
            }
            if (value.mobile.toLowerCase().includes(search.toLowerCase())) {
                console.log(value.mobile.includes(search));
                return value;
            }
            if (value.empCode.toLowerCase().includes(search.toLowerCase())) {
                console.log(value.empCode.includes(search));
                return value;
            }
        });
        console.log(this.showList);
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_folder_service__WEBPACK_IMPORTED_MODULE_2__["FolderService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/folder.service.ts":
/*!***********************************!*\
  !*** ./src/app/folder.service.ts ***!
  \***********************************/
/*! exports provided: FolderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderService", function() { return FolderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var FolderService = /** @class */ (function () {
    function FolderService(afs) {
        this.afs = afs;
    }
    FolderService.prototype.getEmployees = function () {
        return this.afs.collection('Employees').snapshotChanges();
    };
    FolderService.prototype.addFolder = function (folder) {
        this.afs.collection('/Folders').add(folder);
    };
    FolderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FolderService);
    return FolderService;
}());



/***/ }),

/***/ "./src/app/kmitc/kmitc.component.css":
/*!*******************************************!*\
  !*** ./src/app/kmitc/kmitc.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid,.jumbotron,.btn-info,body {\r\n  background: #232526;\r\n  /* fallback for old browsers */\r\n  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to bottom, #414345, #232526);\r\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}\r\nh1,h2{\r\n  color: white;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {}\r\n.holder {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n}\r\n.card {\r\n  margin-top: 25px;\r\n\r\n}\r\nbody {}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva21pdGMva21pdGMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFFOUIsK0JBQStCO0VBQy9CLHdEQUF3RDtFQUN4RCxxRUFBcUU7O0FBRXZFO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTs7Ozs7SUFLSTtBQUVKO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGdCQUFnQjs7QUFFbEI7QUFDQSxNQUFNIiwiZmlsZSI6InNyYy9hcHAva21pdGMva21pdGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQsLmp1bWJvdHJvbiwuYnRuLWluZm8sYm9keSB7XHJcbiAgYmFja2dyb3VuZDogIzIzMjUyNjtcclxuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0MTQzNDUsICMyMzI1MjYpO1xyXG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQxNDM0NSwgIzIzMjUyNik7XHJcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxufVxyXG5oMSxoMntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge31cclxuXHJcbi5ob2xkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbn1cclxuYm9keSB7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/kmitc/kmitc.component.html":
/*!********************************************!*\
  !*** ./src/app/kmitc/kmitc.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"jumbotron\">\n    <h1 class=\"text-center\"> {{title}} </h1>\n    <mat-form-field class=\"w-100\" *ngIf=\"giveAccess\">\n      <mat-label>\n        Search...\n      </mat-label>\n      <input #search (keyup)=\"filter(search.value)\" matInput type=\"text\">\n    </mat-form-field>\n    <div class=\" form-group text-center\" *ngIf=\"!giveAccess\">\n      <h2 class=\"bg-danger\">Enter the ViewAccess Password</h2>\n      <input (keyup.enter)=\"check(text)\" class=\"form-control\" #text type=\"password\">\n      <button class=\"btn btn-primary\" (click)=\"check(text)\">Check</button>\n    </div>\n  </div>\n  <div *ngIf=\"giveAccess\" class=\"holder\">\n    <div class=\"row\">\n    </div>\n    <div class=\"card\" *ngFor=\"let u of fusers\">\n      <div class=\"card-header\">\n        <h3> {{u.firstname}} {{u.lastname}}</h3>\n      </div>\n      <div class=\"card-body\">\n        <ul class=\"list-group list-group-flush\">\n          <li (click)=\"href(u['@contextid'])\" class=\"list-group-item\">Context ID: {{u['@contextid']}} </li>\n          <li class=\"list-group-item\">ID: {{u['@id']}} </li>\n          <li class=\"list-group-item\">Email: {{u.email}} </li>\n          <li *ngIf=\"phone\" #phone class=\"list-group-item\">Phone: {{u.phone1}} </li>\n          <li class=\"list-group-item\">Roll No: {{u.custom_fields.custom_field[1].field_data}}</li>\n          <li class=\"list-group-item\">Section: {{u.custom_fields.custom_field[3].field_data}} </li>\n          <li class=\"list-group-item\">Passcode : {{u.custom_fields.custom_field[12].field_data}} </li>\n          <li class=\"list-group-item\">First Access: {{u.firstaccess}} </li>\n        </ul>\n\n      </div>\n    </div>\n    <button class=\" btn btn-darkfooter\" (click)=\"phone=!phone\">----------</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/kmitc/kmitc.component.ts":
/*!******************************************!*\
  !*** ./src/app/kmitc/kmitc.component.ts ***!
  \******************************************/
/*! exports provided: KmitcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmitcComponent", function() { return KmitcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var KmitcComponent = /** @class */ (function () {
    function KmitcComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.giveAccess = false;
        this.kmit = [];
        this.fusers = [];
        this.title = 'Keshav Memorial Institute of Technology';
        this.abcdef = 'Kmit123$%^';
    }
    KmitcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getUsers().subscribe(function (response) {
            // console.log("Response:",response);
            _this.users = response;
            _this.kmit = _this.users.user;
            _this.fusers = _this.kmit;
        });
    };
    KmitcComponent.prototype.check = function (e) {
        if (e.value === this.abcdef) {
            this.giveAccess = true;
            this.toastr.success('Congrats Unlocked All the Users', 'KMIT All Users Unlocked');
        }
        else {
            this.toastr.error('You have entered wrong password', 'Don\'t try Again');
            alert('Wrong Place Boii');
        }
    };
    KmitcComponent.prototype.filter = function (value) {
        this.fusers = this.kmit.filter(function (user) {
            if ((user.firstname + user.lastname + user.username + user.email).toLowerCase().includes(value.toLowerCase())) {
                return user;
            }
        });
    };
    KmitcComponent.prototype.href = function (uElement) {
        window.open('https://teleuniv.net/pluginfile.php/' + uElement + '/user/icon/universo/f3');
    };
    KmitcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kmitc',
            template: __webpack_require__(/*! ./kmitc.component.html */ "./src/app/kmitc/kmitc.component.html"),
            styles: [__webpack_require__(/*! ./kmitc.component.css */ "./src/app/kmitc/kmitc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], KmitcComponent);
    return KmitcComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.error-template {\r\n  padding: 40px 15px;\r\n  text-align: center;\r\n}\r\n\r\n.error-actions {\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.error-actions .btn {\r\n  margin-right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZXJyb3ItdGVtcGxhdGUge1xyXG4gIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvci1hY3Rpb25zIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5lcnJvci1hY3Rpb25zIC5idG4ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"error-template\">\r\n        <h1>\r\n          Wrong URL Boii</h1>\r\n        <h2>\r\n          People call it Four O Four Error</h2>\r\n        <div class=\"error-details\">\r\n          So Shut up and get out of here!!\r\n        </div>\r\n        <div class=\"error-actions\">\r\n          <a routerLink=\"\" class=\"btn btn-primary btn-block btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\r\n            Take Me Home </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



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
    production: false,
    firebase: {
        apiKey: 'AIzaSyDySUSG238MOReree5FAH587iD1Eao3Ba0',
        authDomain: 'fir-demo-fe9e8.firebaseapp.com',
        databaseURL: 'https://fir-demo-fe9e8.firebaseio.com',
        projectId: 'fir-demo-fe9e8',
        storageBucket: 'fir-demo-fe9e8.appspot.com',
        messagingSenderId: '481169014996'
    }
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

module.exports = __webpack_require__(/*! C:\Users\Anon\Favorites\_Angular\Messenger\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map