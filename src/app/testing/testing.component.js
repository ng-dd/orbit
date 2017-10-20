"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var TestingComponent = (function () {
    function TestingComponent(userService) {
        this.userService = userService;
    }
    TestingComponent.prototype.ngOnInit = function () {
        console.log('hi');
        console.log(this.userService.addUser({ username: "someone" }));
    };
    return TestingComponent;
}());
TestingComponent = __decorate([
    core_1.Component({
        selector: 'app-testing',
        templateUrl: './testing.component.html',
        styleUrls: ['./testing.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], TestingComponent);
exports.TestingComponent = TestingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx5REFBdUQ7QUFPdkQsSUFBYSxnQkFBZ0I7SUFFM0IsMEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUVqRCxtQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztLQUN2QyxDQUFDO3FDQUdpQywwQkFBVztHQUZqQyxnQkFBZ0IsQ0FTNUI7QUFUWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdGVzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXN0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGVzdGluZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGVzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdoaScpXG4gICAgY29uc29sZS5sb2codGhpcy51c2VyU2VydmljZS5hZGRVc2VyKHt1c2VybmFtZTogXCJzb21lb25lXCJ9KSlcbiAgfVxuXG59XG4iXX0=