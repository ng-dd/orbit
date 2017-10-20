"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var post_service_1 = require("./post.service");
describe('PostService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [post_service_1.PostService]
        });
    });
    it('should be created', testing_1.inject([post_service_1.PostService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0LnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF3RDtBQUV4RCwrQ0FBNkM7QUFFN0MsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUN0QixVQUFVLENBQUM7UUFDVCxpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsZ0JBQU0sQ0FBQyxDQUFDLDBCQUFXLENBQUMsRUFBRSxVQUFDLE9BQW9CO1FBQ2pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0QmVkLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBQb3N0U2VydmljZSB9IGZyb20gJy4vcG9zdC5zZXJ2aWNlJztcblxuZGVzY3JpYmUoJ1Bvc3RTZXJ2aWNlJywgKCkgPT4ge1xuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBUZXN0QmVkLmNvbmZpZ3VyZVRlc3RpbmdNb2R1bGUoe1xuICAgICAgcHJvdmlkZXJzOiBbUG9zdFNlcnZpY2VdXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgY3JlYXRlZCcsIGluamVjdChbUG9zdFNlcnZpY2VdLCAoc2VydmljZTogUG9zdFNlcnZpY2UpID0+IHtcbiAgICBleHBlY3Qoc2VydmljZSkudG9CZVRydXRoeSgpO1xuICB9KSk7XG59KTtcbiJdfQ==