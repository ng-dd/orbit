"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var friend_service_1 = require("./friend.service");
describe('FriendService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [friend_service_1.FriendService]
        });
    });
    it('should be created', testing_1.inject([friend_service_1.FriendService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kLnNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZyaWVuZC5zZXJ2aWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBd0Q7QUFFeEQsbURBQWlEO0FBRWpELFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDeEIsVUFBVSxDQUFDO1FBQ1QsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1NBQzNCLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFNLENBQUMsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsVUFBQyxPQUFzQjtRQUNyRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgRnJpZW5kU2VydmljZSB9IGZyb20gJy4vZnJpZW5kLnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnRnJpZW5kU2VydmljZScsICgpID0+IHtcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIHByb3ZpZGVyczogW0ZyaWVuZFNlcnZpY2VdXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgY3JlYXRlZCcsIGluamVjdChbRnJpZW5kU2VydmljZV0sIChzZXJ2aWNlOiBGcmllbmRTZXJ2aWNlKSA9PiB7XG4gICAgZXhwZWN0KHNlcnZpY2UpLnRvQmVUcnV0aHkoKTtcbiAgfSkpO1xufSk7XG4iXX0=