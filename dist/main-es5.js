(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkstarwars"] = self["webpackChunkstarwars"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _movies_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./movies/movie-detail/movie-detail.component */
      4318);
      /* harmony import */


      var _characters_characters_list_characters_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./characters/characters-list/characters-list.component */
      6127);
      /* harmony import */


      var _characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./characters/character-details/character-details.component */
      8385);
      /* harmony import */


      var _movies_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./movies/movies-list/movies-list.component */
      8582);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: 'movies',
        component: _movies_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__.MoviesListComponent
      }, {
        path: 'movies/:movieId',
        component: _movies_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_0__.MovieDetailComponent
      }, {
        path: 'mov',
        component: _movies_movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_0__.MovieDetailComponent
      }, {
        path: 'characters',
        component: _characters_characters_list_characters_list_component__WEBPACK_IMPORTED_MODULE_1__.CharactersListComponent
      }, {
        path: 'characters/:characterId',
        component: _characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_2__.CharacterDetailsComponent
      }, {
        path: '**',
        redirectTo: '/movies',
        pathMatch: 'full'
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      2522);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895); // import { LoadingService } from './loading/loading.service';


      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent() {
          _classCallCheck(this, _AppComponent);
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {}
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [["color", "primary"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Star wars");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["body {\n    margin: 0;\n}\n\nmain[_ngcontent-%COMP%] {\n    margin: 30px;\n}\n\n.user-avatar[_ngcontent-%COMP%] {\n  max-height: 35px;\n  border-radius: 4px;\n\n}\n\n.toolbar-tools[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n.filler[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4+Pj4gYm9keSB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5tYWluIHtcbiAgICBtYXJnaW46IDMwcHg7XG59XG5cbi51c2VyLWF2YXRhciB7XG4gIG1heC1oZWlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxufVxuXG4udG9vbGJhci10b29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5maWxsZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    3962:
    /*!********************************!*\
      !*** ./src/app/app.effects.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppEffects": function AppEffects() {
          return (
            /* binding */
            _AppEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      3399);

      var _AppEffects = function _AppEffects(actions$) {
        _classCallCheck(this, _AppEffects);

        this.actions$ = actions$;
      };

      _AppEffects.ɵfac = function AppEffects_Factory(t) {
        return new (t || _AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions));
      };

      _AppEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AppEffects,
        factory: _AppEffects.ɵfac
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      6627);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      2091);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      2522);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ngrx/store */
      5758);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ngrx/effects */
      3399);
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      1144);
      /* harmony import */


      var _movies_movies_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./movies/movies.module */
      1832);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../environments/environment */
      2340);
      /* harmony import */


      var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reducers */
      1697);
      /* harmony import */


      var _app_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.effects */
      3962);
      /* harmony import */


      var _characters_characters_list_characters_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./characters/characters-list/characters-list.component */
      6127);
      /* harmony import */


      var _characters_characters_list_table_characters_list_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./characters/characters-list-table/characters-list-table.component */
      4543);
      /* harmony import */


      var _characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./characters/character-details/character-details.component */
      8385);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_4__.reducers, {
          metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_4__.metaReducers
        }), !_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule.instrument() : [], _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_5__.AppEffects]), _movies_movies_module__WEBPACK_IMPORTED_MODULE_2__.MoviesModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _characters_characters_list_characters_list_component__WEBPACK_IMPORTED_MODULE_6__.CharactersListComponent, _characters_characters_list_table_characters_list_table_component__WEBPACK_IMPORTED_MODULE_7__.CharactersListTableComponent, _characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_8__.CharacterDetailsComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_17__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsRootModule, _movies_movies_module__WEBPACK_IMPORTED_MODULE_2__.MoviesModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__.StoreDevtoolsModule]
        });
      })();
      /***/

    },

    /***/
    8385:
    /*!*****************************************************************************!*\
      !*** ./src/app/characters/character-details/character-details.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharacterDetailsComponent": function CharacterDetailsComponent() {
          return (
            /* binding */
            _CharacterDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../reducers */
      1697);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      5758);
      /* harmony import */


      var _movies_movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../movies/movies.actions */
      342);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _movies_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../movies/movie.service */
      4383);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _characters_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../characters.service */
      4551);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      6627);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      3738);

      function CharacterDetailsComponent_mat_card_4_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CharacterDetailsComponent_mat_card_4_div_23_Template_span_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var item_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r4.openfilm(item_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("item", item_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.title);
        }
      }

      function CharacterDetailsComponent_mat_card_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-grid-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Films:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, CharacterDetailsComponent_mat_card_4_div_23_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chac_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", chac_r1.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Gender :", chac_r1.gender, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" hair color: ", chac_r1.hair_color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" height: ", chac_r1.height, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" mass: ", chac_r1.mass, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" skin color: ", chac_r1.skin_color, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 16, ctx_r0.films$))("ngForTrackBy", ctx_r0.trackByUrl);
        }
      }

      var _c0 = function _c0() {
        return ["/movies"];
      };

      var _CharacterDetailsComponent = /*#__PURE__*/function () {
        function _CharacterDetailsComponent(movieService, router, charactersService, store) {
          _classCallCheck(this, _CharacterDetailsComponent);

          this.movieService = movieService;
          this.router = router;
          this.charactersService = charactersService;
          this.store = store;
          this.films$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers__WEBPACK_IMPORTED_MODULE_0__.getCharacterMovies));
          this.character$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_reducers__WEBPACK_IMPORTED_MODULE_0__.getCharacter));
        }

        _createClass(_CharacterDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.character = this.charactersService.selectedCharacter;
            // console.log("CharacterDetailsComponent");
            this.store.dispatch(new _movies_movies_actions__WEBPACK_IMPORTED_MODULE_1__.FetchCharacter());
            this.store.dispatch(new _movies_movies_actions__WEBPACK_IMPORTED_MODULE_1__.FetchCharacterMovies()); // console.log("---------this.film:-----------", this.films$);
          }
        }, {
          key: "openfilm",
          value: function openfilm(movie) {
            // console.log("openMoviesDetails:", movie);
            this.movieService.selectedFilm = movie; // console.log("movie.id:", movie.id);

            this.router.navigate(['/movies', movie.id]);
          }
        }]);

        return _CharacterDetailsComponent;
      }();

      _CharacterDetailsComponent.ɵfac = function CharacterDetailsComponent_Factory(t) {
        return new (t || _CharacterDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_movies_movie_service__WEBPACK_IMPORTED_MODULE_2__.MovieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_characters_service__WEBPACK_IMPORTED_MODULE_3__.CharactersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
      };

      _CharacterDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _CharacterDetailsComponent,
        selectors: [["app-character-details"]],
        decls: 6,
        vars: 5,
        consts: [["mat-button", "", 1, "backButton", 3, "routerLink"], [4, "ngIf"], ["cols", "5", "rowHeight", "100px"], [3, "colspan", "rowspan"], [1, "mat-body-strong"], [1, "mat-h3"], [1, "table-container"], [3, "item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "item"], [1, "filmsHover", 3, "click"]],
        template: function CharacterDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "arrow_back");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Back To Films List\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CharacterDetailsComponent_mat_card_4_Template, 25, 18, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, ctx.character$));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
        styles: [".mat-card[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin: 0 auto;\n}\n\n.backButton[_ngcontent-%COMP%] {\n  margin: 20px;\n  border: 2px solid black;\n  border-radius: 125px;\n}\n\n.filmsHover[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  line-height: 35px;\n}\n\n.filmsHover[_ngcontent-%COMP%]:hover {\n  color: rebeccapurple;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBTEY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFIRiIsImZpbGUiOiJjaGFyYWN0ZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDo6bmctZGVlcC5tYXQtZ3JpZC10aWxlIHtcbi8vICAgLm1hdC1maWd1cmUge1xuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbi8vICAgfVxuLy8gfVxuXG4ubWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5iYWNrQnV0dG9ue1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMjVweDtcbn0gXG4uZmlsbXNIb3ZlcntcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG4uZmlsbXNIb3Zlcjpob3ZlcntcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    4543:
    /*!*************************************************************************************!*\
      !*** ./src/app/characters/characters-list-table/characters-list-table.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharactersListTableComponent": function CharactersListTableComponent() {
          return (
            /* binding */
            _CharactersListTableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _characters_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../characters.service */
      4551);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      2091);

      function CharactersListTableComponent_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CharactersListTableComponent_td_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r16.name, "");
        }
      }

      function CharactersListTableComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Birth Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CharactersListTableComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r17.birth_year);
        }
      }

      function CharactersListTableComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Height");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CharactersListTableComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r18.height);
        }
      }

      function CharactersListTableComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mass");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CharactersListTableComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r19.mass);
        }
      }

      function CharactersListTableComponent_th_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hair Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CharactersListTableComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r20.hair_color);
        }
      }

      function CharactersListTableComponent_th_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Skin Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CharactersListTableComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r21.skin_color);
        }
      }

      function CharactersListTableComponent_th_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Eye Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function CharactersListTableComponent_td_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r22.eye_color);
        }
      }

      function CharactersListTableComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
        }
      }

      function CharactersListTableComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CharactersListTableComponent_tr_23_Template_tr_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var myRowData_r23 = restoredCtx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.showDetails(myRowData_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _CharactersListTableComponent = /*#__PURE__*/function () {
        function _CharactersListTableComponent(charactersService, router) {
          _classCallCheck(this, _CharactersListTableComponent);

          // console.log("CharactersListTableComponent");
          this.charactersService = charactersService;
          this.router = router;
          this.tableColumns = ['name', 'birth_year', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color'];
        }

        _createClass(_CharactersListTableComponent, [{
          key: "showDetails",
          value: function showDetails(character) {
            // console.log("-00000---character----00000---:", character);
            this.charactersService.selectedCharacter = character; // console.log(" this.charactersService.selectedCharacter :", this.charactersService.selectedCharacter );

            this.router.navigate(['/characters', character.id]);
          }
        }]);

        return _CharactersListTableComponent;
      }();

      _CharactersListTableComponent.ɵfac = function CharactersListTableComponent_Factory(t) {
        return new (t || _CharactersListTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_characters_service__WEBPACK_IMPORTED_MODULE_0__.CharactersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _CharactersListTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CharactersListTableComponent,
        selectors: [["app-characters-list-table"]],
        inputs: {
          characters: "characters"
        },
        decls: 24,
        vars: 3,
        consts: [["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "birth_year"], ["matColumnDef", "height"], ["matColumnDef", "mass"], ["matColumnDef", "hair_color"], ["matColumnDef", "skin_color"], ["matColumnDef", "eye_color"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
        template: function CharactersListTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CharactersListTableComponent_th_2_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CharactersListTableComponent_td_3_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CharactersListTableComponent_th_5_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CharactersListTableComponent_td_6_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CharactersListTableComponent_th_8_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CharactersListTableComponent_td_9_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CharactersListTableComponent_th_11_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CharactersListTableComponent_td_12_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CharactersListTableComponent_th_14_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CharactersListTableComponent_td_15_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CharactersListTableComponent_th_17_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CharactersListTableComponent_td_18_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CharactersListTableComponent_th_20_Template, 2, 0, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CharactersListTableComponent_td_21_Template, 2, 1, "td", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CharactersListTableComponent_tr_22_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CharactersListTableComponent_tr_23_Template, 1, 0, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.characters);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.tableColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.tableColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\ntable[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3RlcnMtbGlzdC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFDSiIsImZpbGUiOiJjaGFyYWN0ZXJzLWxpc3QtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuXG4gIC5tYXQtcm93OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    6127:
    /*!*************************************************************************!*\
      !*** ./src/app/characters/characters-list/characters-list.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharactersListComponent": function CharactersListComponent() {
          return (
            /* binding */
            _CharactersListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _characters_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../characters.service */
      4551);
      /* harmony import */


      var _characters_list_table_characters_list_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../characters-list-table/characters-list-table.component */
      4543);

      var _CharactersListComponent = /*#__PURE__*/function () {
        function _CharactersListComponent(charactersService) {
          _classCallCheck(this, _CharactersListComponent);

          this.charactersService = charactersService;
        }

        _createClass(_CharactersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subscription = this.charactersService.getCharactersList().subscribe(function (data) {// this.characters = data.results;
              // this.charactersCount = data.count;
            });
          }
        }, {
          key: "pageData",
          value: function pageData(event) {
            this.subscription = this.charactersService.getCharactersList(event.pageIndex + 1).subscribe(function (data) {// console.log("data:",data);
              // this.characters = data;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }]);

        return _CharactersListComponent;
      }();

      _CharactersListComponent.ɵfac = function CharactersListComponent_Factory(t) {
        return new (t || _CharactersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_characters_service__WEBPACK_IMPORTED_MODULE_0__.CharactersService));
      };

      _CharactersListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CharactersListComponent,
        selectors: [["app-characters-list"]],
        decls: 2,
        vars: 1,
        consts: [[1, "container"], [3, "characters"]],
        template: function CharactersListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-characters-list-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("characters", ctx.characters);
          }
        },
        directives: [_characters_list_table_characters_list_table_component__WEBPACK_IMPORTED_MODULE_1__.CharactersListTableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXJzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    4551:
    /*!**************************************************!*\
      !*** ./src/app/characters/characters.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CharactersService": function CharactersService() {
          return (
            /* binding */
            _CharactersService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      9100);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8939);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _loader_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../loader/loader.service */
      184);

      var CHARACTER_HTTP_URL_LENGTH = "https://swapi.dev/api/people/".length;

      var _CharactersService = /*#__PURE__*/function () {
        function _CharactersService(http, loaderService) {
          _classCallCheck(this, _CharactersService);

          this.http = http;
          this.loaderService = loaderService;
        }

        _createClass(_CharactersService, [{
          key: "getCharactersList",
          value: function getCharactersList() {
            var _this = this;

            var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            this.loaderService.startLoading();
            return this.http.get("https://swapi.dev/api/people/?page=".concat(pageNumber)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (characters) {
              // console.log("--characters--:",characters);
              // characters.forEach(character => {
              //   character.id = this.getCharacterId(character.url);
              // });
              return characters;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(function () {
              return _this.loaderService.finishLoading();
            }));
          }
        }, {
          key: "getCharactersByFilm",
          value: function getCharactersByFilm(film) {
            var _this2 = this;

            // console.log("getCharactersByFilm");
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(film.characters.map(function (characterUrl) {
              _this2.loaderService.startLoading(); // console.log("loaderService");


              return _this2.http.get(characterUrl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (character) {
                character.id = _this2.getCharacterId(character.url); // console.log("get character",character);

                return character;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(function () {
                return _this2.loaderService.finishLoading();
              }));
            }));
          }
        }, {
          key: "getCharacter",
          value: function getCharacter(characterId) {
            var _this3 = this;

            this.loaderService.startLoading();
            return this.http.get("https://swapi.dev/api/people/".concat(characterId)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (character) {
              character.id = _this3.getCharacterId(character.url);
              return character;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(function () {
              return _this3.loaderService.finishLoading();
            }));
          }
        }, {
          key: "getCharacterId",
          value: function getCharacterId(characterUrl) {
            return parseInt(characterUrl.substring(CHARACTER_HTTP_URL_LENGTH, characterUrl.length - 1), 10);
          }
        }]);

        return _CharactersService;
      }();

      _CharactersService.ɵfac = function CharactersService_Factory(t) {
        return new (t || _CharactersService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
      };

      _CharactersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _CharactersService,
        factory: _CharactersService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    184:
    /*!******************************************!*\
      !*** ./src/app/loader/loader.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoaderService": function LoaderService() {
          return (
            /* binding */
            _LoaderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _LoaderService = /*#__PURE__*/function () {
        function _LoaderService() {
          _classCallCheck(this, _LoaderService);

          this.loadingCounter = 0;
        }

        _createClass(_LoaderService, [{
          key: "startLoading",
          value: function startLoading() {
            this.loadingCounter++;
          }
        }, {
          key: "finishLoading",
          value: function finishLoading() {
            this.loadingCounter--;
          }
        }]);

        return _LoaderService;
      }();

      _LoaderService.ɵfac = function LoaderService_Factory(t) {
        return new (t || _LoaderService)();
      };

      _LoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LoaderService,
        factory: _LoaderService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4318:
    /*!***************************************************************!*\
      !*** ./src/app/movies/movie-detail/movie-detail.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MovieDetailComponent": function MovieDetailComponent() {
          return (
            /* binding */
            _MovieDetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      5758);
      /* harmony import */


      var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../reducers */
      1697);
      /* harmony import */


      var _movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../movies.actions */
      342);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../movie.service */
      4383);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      6627);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      3738);

      function MovieDetailComponent_mat_card_4_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieDetailComponent_mat_card_4_div_38_Template_span_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var item_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r4.openCharacterDetail(item_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.name);
        }
      }

      function MovieDetailComponent_mat_card_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-grid-list", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Episode: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Release Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Director: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Producer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-grid-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " # of Characters: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Characters:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, MovieDetailComponent_mat_card_4_div_38_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var film_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", film_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](film_r1.director);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](film_r1.opening_crawl);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](film_r1.episode_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](film_r1.release_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](film_r1.director);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](film_r1.producer);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("colspan", 1)("rowspan", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](film_r1.characters.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 19, ctx_r0.characters$));
        }
      }

      var _c0 = function _c0() {
        return ["/movies"];
      };

      var _MovieDetailComponent = /*#__PURE__*/function () {
        function _MovieDetailComponent(movieService, store, router) {
          _classCallCheck(this, _MovieDetailComponent);

          this.movieService = movieService;
          this.store = store;
          this.router = router;
          this.film$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_reducers__WEBPACK_IMPORTED_MODULE_0__.getMovie));
          this.characters$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_reducers__WEBPACK_IMPORTED_MODULE_0__.getMovieCharacters));
        }

        _createClass(_MovieDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch(new _movies_actions__WEBPACK_IMPORTED_MODULE_1__.FetchMovie());
            this.store.dispatch(new _movies_actions__WEBPACK_IMPORTED_MODULE_1__.FetchMovieCharacters()); // console.log("---------this.film:-----------", this.film$);

            this.characters$.forEach(function (element) {//  console.log("characters:",element);
            });
          }
        }, {
          key: "openCharacterDetail",
          value: function openCharacterDetail(character) {
            console.log("character:", character);
            this.movieService.selectedCharacter = character;
            this.router.navigate(['/characters/', character.id]);
          }
        }]);

        return _MovieDetailComponent;
      }();

      _MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) {
        return new (t || _MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_2__.MovieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _MovieDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MovieDetailComponent,
        selectors: [["movie-detail"]],
        decls: 6,
        vars: 5,
        consts: [["mat-button", "", 1, "backButton", 3, "routerLink"], [4, "ngIf"], [1, "mat-body"], ["cols", "5", "rowHeight", "100px"], [3, "colspan", "rowspan"], [1, "mat-body-strong"], [1, "mat-h3"], [1, "table-container"], [4, "ngFor", "ngForOf"], [1, "characterHover", 3, "click"]],
        template: function MovieDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "arrow_back");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Back To Films List\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MovieDetailComponent_mat_card_4_Template, 40, 21, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, ctx.film$));
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
        styles: [".table-container[_ngcontent-%COMP%] {\n  max-height: 40vh;\n  overflow: auto;\n}\n\n .mat-grid-tile .mat-figure {\n  flex-direction: column !important;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin: 0 auto;\n}\n\n.backButton[_ngcontent-%COMP%] {\n  margin: 20px;\n  border: 2px solid black;\n  border-radius: 125px;\n}\n\n.characterHover[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  line-height: 30px;\n}\n\n.characterHover[_ngcontent-%COMP%]:hover {\n  color: rebeccapurple;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUdJO0VBQ0UsaUNBQUE7QUFBTjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUM7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQURIOztBQUdDO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUFIOztBQUVDO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBQ0giLCJmaWxlIjoibW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogNDB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgOjpuZy1kZWVwLm1hdC1ncmlkLXRpbGUge1xuICAgIC5tYXQtZmlndXJlIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgXG4gIC5tYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgXG4gLmJhY2tCdXR0b257XG4gICBtYXJnaW46IDIwcHg7XG4gICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgIGJvcmRlci1yYWRpdXM6IDEyNXB4O1xuIH0gXG4gLmNoYXJhY3RlckhvdmVye1xuICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuIH1cbiAuY2hhcmFjdGVySG92ZXI6aG92ZXJ7XG4gICBjb2xvcjogcmViZWNjYXB1cnBsZTtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiB9Il19 */"]
      });
      /***/
    },

    /***/
    4383:
    /*!*****************************************!*\
      !*** ./src/app/movies/movie.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MovieService": function MovieService() {
          return (
            /* binding */
            _MovieService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      9100);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      8307);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      8939);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _loader_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../loader/loader.service */
      184);

      var FILM_HTTP_URL_LENGTH = "'https://swapi.dev/api/films/".length;

      var _MovieService = /*#__PURE__*/function () {
        function _MovieService(http, loaderService) {
          _classCallCheck(this, _MovieService);

          this.http = http;
          this.loaderService = loaderService;
          this.baseUrl = 'https://swapi.dev/api';
        }

        _createClass(_MovieService, [{
          key: "getMovies",
          value: function getMovies() {
            var _this4 = this;

            var options = {
              params: {}
            }; // const link = `${this.baseUrl}films/`;
            // if (page) {
            //   options.params = { page };
            // };
            // return this.http.get<MoviesResponse>(link, options);

            if (this.filmsList) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.filmsList);
            } else {
              // this.loaderService.startLoading();
              return this.http.get("".concat(this.baseUrl, "/films"), options).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (films) {
                return films.results.map(function (film) {
                  film.id = _this4.getFilmId(film.url);
                  return film;
                });
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (films) {
                return _this4.filmsList = films;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(function () {
                return _this4.loaderService.finishLoading();
              }));
            }
          } // searchForMovie(lookup: string): Observable<MoviesResponse> {
          //   const link = `${this.baseUrl}films/`;
          //   const options = {
          //     params: {
          //       search: lookup
          //     }
          //   };
          //   return this.http.get<MoviesResponse>(link, options);
          // }

        }, {
          key: "getFilmsByCharacter",
          value: function getFilmsByCharacter(character) {
            var _this5 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(character.films.map(function (filmUrl) {
              _this5.loaderService.startLoading();

              return _this5.http.get(filmUrl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (film) {
                film.id = _this5.getFilmId(film.url);
                return film;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(function () {
                return _this5.loaderService.finishLoading();
              }));
            }));
          }
        }, {
          key: "getFilm",
          value: function getFilm(movieId) {
            var _this6 = this;

            this.loaderService.startLoading(); // console.log("getFilm filmId:",movieId);

            return this.http.get("".concat(this.baseUrl, "/films/").concat(movieId)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (film) {
              film.id = _this6.getFilmId(film.url);
              return film;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(function () {
              return _this6.loaderService.finishLoading();
            }));
          }
        }, {
          key: "getFilmId",
          value: function getFilmId(filmUrl) {
            return parseInt(filmUrl.substring(FILM_HTTP_URL_LENGTH, filmUrl.length - 2), 10);
          }
        }]);

        return _MovieService;
      }();

      _MovieService.ɵfac = function MovieService_Factory(t) {
        return new (t || _MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_loader_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
      };

      _MovieService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _MovieService,
        factory: _MovieService.ɵfac
      });
      /***/
    },

    /***/
    8358:
    /*!*************************************************!*\
      !*** ./src/app/movies/movie/movie.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MovieComponent": function MovieComponent() {
          return (
            /* binding */
            _MovieComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _movie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../movie.service */
      4383);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      3738);

      var _MovieComponent = /*#__PURE__*/function () {
        function _MovieComponent(MovieService, router) {
          _classCallCheck(this, _MovieComponent);

          this.MovieService = MovieService;
          this.router = router;
        }

        _createClass(_MovieComponent, [{
          key: "openMoviesDetails",
          value: function openMoviesDetails(movie) {
            // console.log("openMoviesDetails:",movie);
            this.MovieService.selectedFilm = movie; // console.log("movie.id:",movie.id);

            this.router.navigate(['/movies', movie.id]);
          }
        }]);

        return _MovieComponent;
      }();

      _MovieComponent.ɵfac = function MovieComponent_Factory(t) {
        return new (t || _MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_0__.MovieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _MovieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _MovieComponent,
        selectors: [["swapi-movie"]],
        inputs: {
          movie: "movie"
        },
        decls: 6,
        vars: 3,
        consts: [[2, "margin", "10px", 3, "click"]],
        template: function MovieComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieComponent_Template_mat_card_click_0_listener() {
              return ctx.openMoviesDetails(ctx.movie);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("Movie: \"", ctx.movie.title, "---Episodio: ", ctx.movie.episode_id, "-- Director: ", ctx.movie.director, "\"");
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent],
        styles: ["[_nghost-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n[_nghost-%COMP%]   .mat-icon.blue[_ngcontent-%COMP%] {\n  color: #2196F3;\n}\n[_nghost-%COMP%]   .mat-icon.blue-gray[_ngcontent-%COMP%] {\n  color: #607D8B;\n}\n[_nghost-%COMP%]   .mat-icon.yellow[_ngcontent-%COMP%] {\n  color: #FFEB3B;\n}\n[_nghost-%COMP%]   .mat-icon.red[_ngcontent-%COMP%] {\n  color: #F44336;\n}\n[_nghost-%COMP%]   .mat-icon.brown[_ngcontent-%COMP%] {\n  color: #795548;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usc0JBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0FBRE47QUFJSTtFQUNFLGNBQUE7QUFGTjtBQUtJO0VBQ0UsY0FBQTtBQUhOO0FBTUk7RUFDRSxjQUFBO0FBSk4iLCJmaWxlIjoibW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5tYXQtaWNvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICYuYmx1ZSB7XG4gICAgICBjb2xvcjogIzIxOTZGMztcbiAgICB9XG5cbiAgICAmLmJsdWUtZ3JheSB7XG4gICAgICBjb2xvcjogIzYwN0Q4QjtcbiAgICB9XG5cbiAgICAmLnllbGxvdyB7XG4gICAgICBjb2xvcjogI0ZGRUIzQjtcbiAgICB9XG5cbiAgICAmLnJlZCB7XG4gICAgICBjb2xvcjogI0Y0NDMzNjtcbiAgICB9XG5cbiAgICAmLmJyb3duIHtcbiAgICAgIGNvbG9yOiAjNzk1NTQ4O1xuICAgIH1cbiAgfVxufVxuIl19 */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    8582:
    /*!*************************************************************!*\
      !*** ./src/app/movies/movies-list/movies-list.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MoviesListComponent": function MoviesListComponent() {
          return (
            /* binding */
            _MoviesListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      5758);
      /* harmony import */


      var _movies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../movies.actions */
      342);
      /* harmony import */


      var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../reducers/index */
      1697);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _movie_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../movie/movie.component */
      8358);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);

      function MoviesListComponent_swapi_movie_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "swapi-movie", 2);
        }

        if (rf & 2) {
          var movie_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("movie", movie_r2);
        }
      }

      function MoviesListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 40)("value", 25);
        }
      }

      var _MoviesListComponent = /*#__PURE__*/function () {
        function _MoviesListComponent(store) {
          _classCallCheck(this, _MoviesListComponent);

          this.store = store;
          this.movies$ = this.store.pipe((0, _ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.getMovies));
        }

        _createClass(_MoviesListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // console.log("---movies---:",this.movies$);
            // this.isFirst$ = this.store.select(getIsFirstPage);
            // this.isLast$ = this.store.select(getIsLastPage);
            this.isLoading$ = this.store.select(_reducers_index__WEBPACK_IMPORTED_MODULE_1__.getIsLoading);
            this.store.dispatch(new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMovies());
          }
        }, {
          key: "trackByUrl",
          value: function trackByUrl(index, hero) {
            return hero.title;
          }
        }]);

        return _MoviesListComponent;
      }();

      _MoviesListComponent.ɵfac = function MoviesListComponent_Factory(t) {
        return new (t || _MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
      };

      _MoviesListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MoviesListComponent,
        selectors: [["swapi-movies-list"]],
        decls: 4,
        vars: 7,
        consts: [["class", "flex-container", 3, "movie", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "loader__bg", 4, "ngIf"], [1, "flex-container", 3, "movie"], [1, "loader__bg"], ["color", "accent", "mode", "indeterminate", 1, "loader", 3, "diameter", "value"]],
        template: function MoviesListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MoviesListComponent_swapi_movie_0_Template, 1, 1, "swapi-movie", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MoviesListComponent_div_2_Template, 2, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx.movies$))("ngForTrackBy", ctx.trackByUrl);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, ctx.isLoading$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _movie_movie_component__WEBPACK_IMPORTED_MODULE_2__.MovieComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatSpinner],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
        styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FBQUYiLCJmaWxlIjoibW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1jb250YWluZXJcbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    342:
    /*!******************************************!*\
      !*** ./src/app/movies/movies.actions.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FetchMovies": function FetchMovies() {
          return (
            /* binding */
            _FetchMovies
          );
        },

        /* harmony export */
        "FetchMoviesSuccess": function FetchMoviesSuccess() {
          return (
            /* binding */
            _FetchMoviesSuccess
          );
        },

        /* harmony export */
        "FetchMoviesError": function FetchMoviesError() {
          return (
            /* binding */
            _FetchMoviesError
          );
        },

        /* harmony export */
        "FetchMovie": function FetchMovie() {
          return (
            /* binding */
            _FetchMovie
          );
        },

        /* harmony export */
        "FetchCharacterSuccess": function FetchCharacterSuccess() {
          return (
            /* binding */
            _FetchCharacterSuccess
          );
        },

        /* harmony export */
        "FetchCharacterError": function FetchCharacterError() {
          return (
            /* binding */
            _FetchCharacterError
          );
        },

        /* harmony export */
        "FetchCharacter": function FetchCharacter() {
          return (
            /* binding */
            _FetchCharacter
          );
        },

        /* harmony export */
        "FetchCharacterMoviesSuccess": function FetchCharacterMoviesSuccess() {
          return (
            /* binding */
            _FetchCharacterMoviesSuccess
          );
        },

        /* harmony export */
        "FetchCharacterMoviesError": function FetchCharacterMoviesError() {
          return (
            /* binding */
            _FetchCharacterMoviesError
          );
        },

        /* harmony export */
        "FetchCharacterMovies": function FetchCharacterMovies() {
          return (
            /* binding */
            _FetchCharacterMovies
          );
        },

        /* harmony export */
        "FetchMovieSuccess": function FetchMovieSuccess() {
          return (
            /* binding */
            _FetchMovieSuccess
          );
        },

        /* harmony export */
        "FetchMovieError": function FetchMovieError() {
          return (
            /* binding */
            _FetchMovieError
          );
        },

        /* harmony export */
        "FetchMovieCharacters": function FetchMovieCharacters() {
          return (
            /* binding */
            _FetchMovieCharacters
          );
        },

        /* harmony export */
        "FetchMovieCharactersSuccess": function FetchMovieCharactersSuccess() {
          return (
            /* binding */
            _FetchMovieCharactersSuccess
          );
        },

        /* harmony export */
        "FetchMovieCharactersError": function FetchMovieCharactersError() {
          return (
            /* binding */
            _FetchMovieCharactersError
          );
        },

        /* harmony export */
        "ChangePage": function ChangePage() {
          return (
            /* binding */
            _ChangePage
          );
        }
        /* harmony export */

      });

      var _FetchMovies = function _FetchMovies() {
        _classCallCheck(this, _FetchMovies);

        this.type = "[Movies] Fetch Movies"
        /* FetchMovies */
        ;
      };

      var _FetchMoviesSuccess = function _FetchMoviesSuccess(payload) {
        _classCallCheck(this, _FetchMoviesSuccess);

        this.payload = payload;
        this.type = "[Movies] Load Movies Success"
        /* FetchMoviesSuccess */
        ;
      };

      var _FetchMoviesError = function _FetchMoviesError(payload) {
        _classCallCheck(this, _FetchMoviesError);

        this.payload = payload;
        this.type = "[Movies] Load Movies Error"
        /* FetchMoviesError */
        ;
      };

      var _FetchMovie = function _FetchMovie() {
        _classCallCheck(this, _FetchMovie);

        // console.log("*************FetchMovie*************");
        this.type = "[Movie] Fetch Movie "
        /* FetchMovie */
        ;
      };

      var _FetchCharacterSuccess = function _FetchCharacterSuccess(payload) {
        _classCallCheck(this, _FetchCharacterSuccess);

        // console.log("FetchMovieSuccess");
        this.payload = payload;
        this.type = "[Character] Load Character Success"
        /* FetchCharacterSuccess */
        ;
      };

      var _FetchCharacterError = function _FetchCharacterError(payload) {
        _classCallCheck(this, _FetchCharacterError);

        this.payload = payload;
        this.type = "[Character] Load Character Error"
        /* FetchCharacterError */
        ;
      };

      var _FetchCharacter = function _FetchCharacter() {
        _classCallCheck(this, _FetchCharacter);

        // console.log("*************FetchCharacter*************");
        this.type = "[Character] Fetch Character "
        /* FetchCharacter */
        ;
      };

      var _FetchCharacterMoviesSuccess = function _FetchCharacterMoviesSuccess(payload) {
        _classCallCheck(this, _FetchCharacterMoviesSuccess);

        // console.log("```````````````FetchCharacterMoviesSuccess````````````````");
        this.payload = payload;
        this.type = "[Character] Load Character Movies Success"
        /* FetchCharacterMoviesSuccess */
        ;
      };

      var _FetchCharacterMoviesError = function _FetchCharacterMoviesError(payload) {
        _classCallCheck(this, _FetchCharacterMoviesError);

        this.payload = payload;
        this.type = "[Character] Load Character Movies Error"
        /* FetchCharacterMoviesError */
        ;
      };

      var _FetchCharacterMovies = function _FetchCharacterMovies() {
        _classCallCheck(this, _FetchCharacterMovies);

        // console.log("*************FetchCharacter*************");
        this.type = "[Character] Fetch Character Movies "
        /* FetchCharacterMovies */
        ;
      };

      var _FetchMovieSuccess = function _FetchMovieSuccess(payload) {
        _classCallCheck(this, _FetchMovieSuccess);

        // console.log("FetchMovieSuccess");
        this.payload = payload;
        this.type = "[Movie] Load Movie Success"
        /* FetchMovieSuccess */
        ;
      };

      var _FetchMovieError = function _FetchMovieError(payload) {
        _classCallCheck(this, _FetchMovieError);

        this.payload = payload;
        this.type = "[Movie] Load Movie Error"
        /* FetchMovieError */
        ;
      };

      var _FetchMovieCharacters = function _FetchMovieCharacters() {
        _classCallCheck(this, _FetchMovieCharacters);

        this.type = "[Movie] Fetch Movie Characters"
        /* FetchMovieCharacters */
        ;
      };

      var _FetchMovieCharactersSuccess = function _FetchMovieCharactersSuccess(payload) {
        _classCallCheck(this, _FetchMovieCharactersSuccess);

        this.payload = payload;
        this.type = "[Movie] Load Movie Characters Success"
        /* FetchMovieCharactersSuccess */
        ; // console.log("FetchMovieCharactersSuccess");
      };

      var _FetchMovieCharactersError = function _FetchMovieCharactersError(payload) {
        _classCallCheck(this, _FetchMovieCharactersError);

        this.payload = payload;
        this.type = "[Movie] Load Movie Characters Error"
        /* FetchMovieCharactersError */
        ;
      };

      var _ChangePage = function _ChangePage(payload) {
        _classCallCheck(this, _ChangePage);

        this.payload = payload;
        this.type = "[Movies] Change page"
        /* ChangePage */
        ;
      };
      /***/

    },

    /***/
    9402:
    /*!******************************************!*\
      !*** ./src/app/movies/movies.effects.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MoviesEffects": function MoviesEffects() {
          return (
            /* binding */
            _MoviesEffects
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      3399);
      /* harmony import */


      var _movies_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./movies.actions */
      342);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      7057);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store */
      5758);
      /* harmony import */


      var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./movie.service */
      4383);
      /* harmony import */


      var _characters_characters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../characters/characters.service */
      4551);

      var _MoviesEffects = function _MoviesEffects(actions$, store, service, charactersService) {
        var _this7 = this;

        _classCallCheck(this, _MoviesEffects);

        this.actions$ = actions$;
        this.store = store;
        this.service = service;
        this.charactersService = charactersService;
        this.fetch$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(function () {
          return _this7.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)("[Movies] Fetch Movies"
          /* FetchMovies */
          ), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(_this7.store), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                action = _ref2[0],
                state = _ref2[1];

            return _this7.service.getMovies().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (data) {
              return new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMoviesSuccess(data);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (err) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMoviesError(err));
            }));
          }));
        });
        this.fetchCharacters$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(function () {
          return _this7.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)("[Movie] Fetch Movie Characters"
          /* FetchMovieCharacters */
          ), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(_this7.store), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                action = _ref4[0],
                state = _ref4[1];

            return _this7.charactersService.getCharactersByFilm(_this7.service.selectedFilm).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (err) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMovieCharactersError(err));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (data) {
              return new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMovieCharactersSuccess(data);
            } // (characters: Movie['charactersData']) => {
            // console.log("characters:", characters);
            // // this.movieService.selectedFilm.charactersData=[];
            // console.log("this.movieService.selectedFilm.charactersData:", this.movieService.selectedFilm.charactersData);
            // //  this.movieService.selectedFilm.charactersData = characters;
            // return true;
            // }
            ));
          }));
        });
        this.fetchCharacterMovies$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(function () {
          return _this7.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)("[Character] Fetch Character Movies "
          /* FetchCharacterMovies */
          ), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(_this7.store), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                action = _ref6[0],
                state = _ref6[1];

            return _this7.service.getFilmsByCharacter(_this7.service.selectedCharacter).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (err) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchCharacterMoviesError(err));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (data) {
              return new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchCharacterMoviesSuccess(data);
            } // (characters: Movie['charactersData']) => {
            // console.log("characters:", characters);
            // // this.movieService.selectedFilm.charactersData=[];
            // console.log("this.movieService.selectedFilm.charactersData:", this.movieService.selectedFilm.charactersData);
            // //  this.movieService.selectedFilm.charactersData = characters;
            // return true;
            // }
            ));
          }));
        });
        this.fetchMovie$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(function () {
          return _this7.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)("[Movie] Fetch Movie "
          /* FetchMovie */
          ), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(_this7.store), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                action = _ref8[0],
                state = _ref8[1];

            return _this7.service.getFilm(_this7.service.selectedFilm.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (err) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMovieError(err));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (data) {
              return new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMovieSuccess(data);
            } // (characters: Movie['charactersData']) => {
            // console.log("characters:", characters);
            // // this.movieService.selectedFilm.charactersData=[];
            // console.log("this.movieService.selectedFilm.charactersData:", this.movieService.selectedFilm.charactersData);
            // //  this.movieService.selectedFilm.charactersData = characters;
            // return true;
            // }
            ));
          }));
        }); // this.service.getMovies().pipe(
        //   map(data =>
        //     new FetchMovieCharactersSuccess(data)
        //   ),
        //   catchError(err => of(new FetchMovieCharactersError(err)))
        // )
        //   )
        // );

        this.fetchCharacter$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(function () {
          return _this7.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)("[Character] Fetch Character "
          /* FetchCharacter */
          ), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.withLatestFrom)(_this7.store), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
                action = _ref10[0],
                state = _ref10[1];

            return _this7.charactersService.getCharacter(_this7.service.selectedCharacter.id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (err) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchCharacterError(err));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function (data) {
              return new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchCharacterSuccess(data);
            }));
          }));
        });
        this.paginate$ = (0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(function () {
          return _this7.actions$.pipe((0, _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)("[Movies] Change page"
          /* ChangePage */
          ), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(function () {
            return new _movies_actions__WEBPACK_IMPORTED_MODULE_0__.FetchMovies();
          }));
        });
      };

      _MoviesEffects.ɵfac = function MoviesEffects_Factory(t) {
        return new (t || _MoviesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_movie_service__WEBPACK_IMPORTED_MODULE_1__.MovieService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_characters_characters_service__WEBPACK_IMPORTED_MODULE_2__.CharactersService));
      };

      _MoviesEffects.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: _MoviesEffects,
        factory: _MoviesEffects.ɵfac
      });
      /***/
    },

    /***/
    1832:
    /*!*****************************************!*\
      !*** ./src/app/movies/movies.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MoviesModule": function MoviesModule() {
          return (
            /* binding */
            _MoviesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      6627);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./movies-list/movies-list.component */
      8582);
      /* harmony import */


      var _movie_movie_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./movie/movie.component */
      8358);
      /* harmony import */


      var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./movie.service */
      4383);
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngrx/effects */
      3399);
      /* harmony import */


      var _movies_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./movies.effects */
      9402);
      /* harmony import */


      var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./movie-detail/movie-detail.component */
      4318);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _MoviesModule = function _MoviesModule() {
        _classCallCheck(this, _MoviesModule);
      };

      _MoviesModule.ɵfac = function MoviesModule_Factory(t) {
        return new (t || _MoviesModule)();
      };

      _MoviesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _MoviesModule
      });
      _MoviesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_movie_service__WEBPACK_IMPORTED_MODULE_2__.MovieService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forFeature([_movies_effects__WEBPACK_IMPORTED_MODULE_3__.MoviesEffects])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_MoviesModule, {
          declarations: [_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_0__.MoviesListComponent, _movie_movie_component__WEBPACK_IMPORTED_MODULE_1__.MovieComponent, _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_4__.MovieDetailComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsFeatureModule],
          exports: [_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_0__.MoviesListComponent]
        });
      })();
      /***/

    },

    /***/
    1464:
    /*!******************************************!*\
      !*** ./src/app/movies/movies.reducer.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "initialState": function initialState() {
          return (
            /* binding */
            _initialState
          );
        },

        /* harmony export */
        "reducer": function reducer() {
          return (
            /* binding */
            _reducer
          );
        }
        /* harmony export */

      });

      var _initialState = {
        isLoading: false,
        error: null,
        data: [],
        selectedMovieCharacters: [],
        selectedMovie: null,
        selectedCharacter: null,
        selectedCharacterMovies: [] // next: null,
        // previous: null,

      };

      function _reducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case "[Movies] Fetch Movies"
          /* FetchMovies */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: true,
              error: null
            });

          case "[Movies] Load Movies Success"
          /* FetchMoviesSuccess */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              data: action.payload
            });

          case "[Movies] Load Movies Error"
          /* FetchMoviesError */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              error: action.payload
            });

          case "[Movie] Fetch Movie "
          /* FetchMovie */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: true,
              error: null
            });

          case "[Movie] Load Movie Success"
          /* FetchMovieSuccess */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              selectedMovie: action.payload
            });

          case "[Movie] Load Movie Error"
          /* FetchMovieError */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              error: action.payload
            });

          case "[Character] Fetch Character "
          /* FetchCharacter */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: true,
              error: null
            });

          case "[Character] Load Character Success"
          /* FetchCharacterSuccess */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              selectedCharacter: action.payload
            });

          case "[Character] Load Character Error"
          /* FetchCharacterError */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              error: action.payload
            });

          case "[Character] Fetch Character Movies "
          /* FetchCharacterMovies */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: true,
              error: null
            });

          case "[Character] Load Character Movies Success"
          /* FetchCharacterMoviesSuccess */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              selectedCharacterMovies: action.payload
            });

          case "[Character] Load Character Movies Error"
          /* FetchCharacterMoviesError */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              error: action.payload
            });

          case "[Movie] Fetch Movie Characters"
          /* FetchMovieCharacters */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: true,
              error: null
            });

          case "[Movie] Load Movie Characters Success"
          /* FetchMovieCharactersSuccess */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              selectedMovieCharacters: action.payload
            });

          case "[Movie] Load Movie Characters Error"
          /* FetchMovieCharactersError */
          :
            return Object.assign(Object.assign({}, state), {
              isLoading: false,
              error: action.payload
            });
          // case MoviesActionTypes.ChangePage:
          //   return {
          //     ...state,
          //     page: action.payload === Pagination.NEXT ? ++state.page : --state.page
          //   };

          default:
            return state;
        }
      }
      /***/

    },

    /***/
    1697:
    /*!***********************************!*\
      !*** ./src/app/reducers/index.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "reducers": function reducers() {
          return (
            /* binding */
            _reducers
          );
        },

        /* harmony export */
        "metaReducers": function metaReducers() {
          return (
            /* binding */
            _metaReducers
          );
        },

        /* harmony export */
        "getMoviesState": function getMoviesState() {
          return (
            /* binding */
            _getMoviesState
          );
        },

        /* harmony export */
        "getMovies": function getMovies() {
          return (
            /* binding */
            _getMovies
          );
        },

        /* harmony export */
        "getIsLoading": function getIsLoading() {
          return (
            /* binding */
            _getIsLoading
          );
        },

        /* harmony export */
        "getMovieCharacters": function getMovieCharacters() {
          return (
            /* binding */
            _getMovieCharacters
          );
        },

        /* harmony export */
        "getMovie": function getMovie() {
          return (
            /* binding */
            _getMovie
          );
        },

        /* harmony export */
        "getCharacterMovies": function getCharacterMovies() {
          return (
            /* binding */
            _getCharacterMovies
          );
        },

        /* harmony export */
        "getCharacter": function getCharacter() {
          return (
            /* binding */
            _getCharacter
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      5758);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      2340);
      /* harmony import */


      var _movies_movies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../movies/movies.reducer */
      1464);

      var _reducers = {
        movies: _movies_movies_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer
      };

      var _metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];

      var _getMoviesState = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)('movies');

      var _getMovies = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getMoviesState, function (state) {
        return state.data;
      });

      var _getIsLoading = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getMoviesState, function (state) {
        return state.isLoading;
      });

      var _getMovieCharacters = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getMoviesState, function (state) {
        return state.selectedMovieCharacters;
      });

      var _getMovie = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getMoviesState, function (state) {
        return state.selectedMovie;
      });

      var _getCharacterMovies = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getMoviesState, function (state) {
        return state.selectedCharacterMovies;
      });

      var _getCharacter = (0, _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(_getMoviesState, function (state) {
        return state.selectedCharacter;
      }); // export const getCurrentPage = createSelector(getMoviesState, state => state.page);
      // export const getIsFirstPage = createSelector(getMoviesState, state => !state.previous);
      // export const getIsLastPage = createSelector(getMoviesState, state => !state.next);

      /***/

    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        production: false
      };
      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map