"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_services_1 = require("./services/auth.services");
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.checkAuth = function () {
        this.authService.facebookLogin();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        moduleId: module.id,
        template: "    <StackLayout>\n  <TextField hint=\"Email Address\" keyboardType=\"email\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n  <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n  <Button text=\"Sign in\" (click)=\"checkAuth()\"></Button>\n  <Button text=\"Sign up for Groceries\"></Button>\n</StackLayout>",
        styleUrls: ['app.component.css']
    }),
    __metadata("design:paramtypes", [auth_services_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMERBQXVEO0FBZXZELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFNUMsVUFBSyxHQUFHLEtBQUssQ0FBQztJQURkLENBQUM7SUFHRCxnQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLFlBQVk7SUFieEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsd1ZBT0c7UUFDYixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUNqQyxDQUFDO3FDQUVpQywyQkFBVztHQURqQyxZQUFZLENBUXhCO0FBUlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZTogYCAgICA8U3RhY2tMYXlvdXQ+XG4gIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuXG4gIDxCdXR0b24gdGV4dD1cIlNpZ24gaW5cIiAoY2xpY2spPVwiY2hlY2tBdXRoKClcIj48L0J1dHRvbj5cbiAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiB1cCBmb3IgR3JvY2VyaWVzXCI+PC9CdXR0b24+XG48L1N0YWNrTGF5b3V0PmAsXG4gIHN0eWxlVXJsczogWydhcHAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gIH1cbiAgdGl0bGUgPSAnYXBwJztcblxuICBjaGVja0F1dGgoKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5mYWNlYm9va0xvZ2luKClcbiAgfVxufVxuIl19