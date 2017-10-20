"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var likes_service_1 = require("./likes.service");
describe('LikesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [likes_service_1.LikesService]
        });
    });
    it('should be created', testing_1.inject([likes_service_1.LikesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZXMuc2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlrZXMuc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXdEO0FBRXhELGlEQUErQztBQUUvQyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3ZCLFVBQVUsQ0FBQztRQUNULGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBTSxDQUFDLENBQUMsNEJBQVksQ0FBQyxFQUFFLFVBQUMsT0FBcUI7UUFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IExpa2VzU2VydmljZSB9IGZyb20gJy4vbGlrZXMuc2VydmljZSc7XG5cbmRlc2NyaWJlKCdMaWtlc1NlcnZpY2UnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBwcm92aWRlcnM6IFtMaWtlc1NlcnZpY2VdXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgY3JlYXRlZCcsIGluamVjdChbTGlrZXNTZXJ2aWNlXSwgKHNlcnZpY2U6IExpa2VzU2VydmljZSkgPT4ge1xuICAgIGV4cGVjdChzZXJ2aWNlKS50b0JlVHJ1dGh5KCk7XG4gIH0pKTtcbn0pO1xuIl19