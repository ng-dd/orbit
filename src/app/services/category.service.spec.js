"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var category_service_1 = require("./category.service");
describe('CategoryService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [category_service_1.CategoryService]
        });
    });
    it('should be created', testing_1.inject([category_service_1.CategoryService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcnkuc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXdEO0FBRXhELHVEQUFxRDtBQUVyRCxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFDMUIsVUFBVSxDQUFDO1FBQ1QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFNLENBQUMsQ0FBQyxrQ0FBZSxDQUFDLEVBQUUsVUFBQyxPQUF3QjtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSAnLi9jYXRlZ29yeS5zZXJ2aWNlJztcblxuZGVzY3JpYmUoJ0NhdGVnb3J5U2VydmljZScsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIHByb3ZpZGVyczogW0NhdGVnb3J5U2VydmljZV1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBjcmVhdGVkJywgaW5qZWN0KFtDYXRlZ29yeVNlcnZpY2VdLCAoc2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlKSA9PiB7XG4gICAgZXhwZWN0KHNlcnZpY2UpLnRvQmVUcnV0aHkoKTtcbiAgfSkpO1xufSk7XG4iXX0=