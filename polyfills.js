"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/
require("core-js/es6/reflect");
require("core-js/es7/reflect");
/**
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDs7R0FFRztBQUVILG1FQUFtRTtBQUNuRSwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1QixpQ0FBaUM7QUFDakMsNEJBQTRCO0FBRTVCLCtFQUErRTtBQUMvRSxvRUFBb0U7QUFFcEUseUNBQXlDO0FBQ3pDLCtCQUE2QjtBQUM3QiwrQkFBNkI7QUFHN0I7OztJQUdJO0FBQ0osOEVBQThFO0FBSTlFOztHQUVHO0FBQ0gsNkJBQTJCLENBQUUsNkJBQTZCO0FBSTFEOztHQUVHO0FBRUg7OztHQUdHO0FBQ0gsb0RBQW9EO0FBQ3BEOztHQUVHO0FBQ0gsc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXG4gKiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBkaXZpZGVkIGludG8gMiBzZWN0aW9uczpcbiAqICAgMS4gQnJvd3NlciBwb2x5ZmlsbHMuIFRoZXNlIGFyZSBhcHBsaWVkIGJlZm9yZSBsb2FkaW5nIFpvbmVKUyBhbmQgYXJlIHNvcnRlZCBieSBicm93c2Vycy5cbiAqICAgMi4gQXBwbGljYXRpb24gaW1wb3J0cy4gRmlsZXMgaW1wb3J0ZWQgYWZ0ZXIgWm9uZUpTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgeW91ciBtYWluXG4gKiAgICAgIGZpbGUuXG4gKlxuICogVGhlIGN1cnJlbnQgc2V0dXAgaXMgZm9yIHNvLWNhbGxlZCBcImV2ZXJncmVlblwiIGJyb3dzZXJzOyB0aGUgbGFzdCB2ZXJzaW9ucyBvZiBicm93c2VycyB0aGF0XG4gKiBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB0aGVtc2VsdmVzLiBUaGlzIGluY2x1ZGVzIFNhZmFyaSA+PSAxMCwgQ2hyb21lID49IDU1IChpbmNsdWRpbmcgT3BlcmEpLFxuICogRWRnZSA+PSAxMyBvbiB0aGUgZGVza3RvcCwgYW5kIGlPUyAxMCBhbmQgQ2hyb21lIG9uIG1vYmlsZS5cbiAqXG4gKiBMZWFybiBtb3JlIGluIGh0dHBzOi8vYW5ndWxhci5pby9kb2NzL3RzL2xhdGVzdC9ndWlkZS9icm93c2VyLXN1cHBvcnQuaHRtbFxuICovXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEJST1dTRVIgUE9MWUZJTExTXG4gKi9cblxuLyoqIElFOSwgSUUxMCBhbmQgSUUxMSByZXF1aXJlcyBhbGwgb2YgdGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMuICoqL1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0Jztcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3dlYWstbWFwJztcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcblxuLyoqIElFMTAgYW5kIElFMTEgcmVxdWlyZXMgdGhlIGZvbGxvd2luZyBmb3IgTmdDbGFzcyBzdXBwb3J0IG9uIFNWRyBlbGVtZW50cyAqL1xuLy8gaW1wb3J0ICdjbGFzc2xpc3QuanMnOyAgLy8gUnVuIGBucG0gaW5zdGFsbCAtLXNhdmUgY2xhc3NsaXN0LmpzYC5cblxuLyoqIEV2ZXJncmVlbiBicm93c2VycyByZXF1aXJlIHRoZXNlLiAqKi9cbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xuXG5cbi8qKlxuICogUmVxdWlyZWQgdG8gc3VwcG9ydCBXZWIgQW5pbWF0aW9ucyBgQGFuZ3VsYXIvYW5pbWF0aW9uYC5cbiAqIE5lZWRlZCBmb3I6IEFsbCBidXQgQ2hyb21lLCBGaXJlZm94IGFuZCBPcGVyYS4gaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PXdlYi1hbmltYXRpb25cbiAqKi9cbi8vIGltcG9ydCAnd2ViLWFuaW1hdGlvbnMtanMnOyAgLy8gUnVuIGBucG0gaW5zdGFsbCAtLXNhdmUgd2ViLWFuaW1hdGlvbnMtanNgLlxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWm9uZSBKUyBpcyByZXF1aXJlZCBieSBBbmd1bGFyIGl0c2VsZi5cbiAqL1xuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQVBQTElDQVRJT04gSU1QT1JUU1xuICovXG5cbi8qKlxuICogRGF0ZSwgY3VycmVuY3ksIGRlY2ltYWwgYW5kIHBlcmNlbnQgcGlwZXMuXG4gKiBOZWVkZWQgZm9yOiBBbGwgYnV0IENocm9tZSwgRmlyZWZveCwgRWRnZSwgSUUxMSBhbmQgU2FmYXJpIDEwXG4gKi9cbi8vIGltcG9ydCAnaW50bCc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSBpbnRsYC5cbi8qKlxuICogTmVlZCB0byBpbXBvcnQgYXQgbGVhc3Qgb25lIGxvY2FsZS1kYXRhIHdpdGggaW50bC5cbiAqL1xuLy8gaW1wb3J0ICdpbnRsL2xvY2FsZS1kYXRhL2pzb25wL2VuJztcbiJdfQ==