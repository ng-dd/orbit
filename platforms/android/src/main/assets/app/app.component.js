"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        moduleId: module.id,
        template: "    <StackLayout>\n  <TextField hint=\"Email Address\" keyboardType=\"email\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n  <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n  <Button text=\"Sign in\"></Button>\n  <Button text=\"Sign up for Groceries\"></Button>\n</StackLayout>",
        styleUrls: ['app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFlMUMsSUFBYSxZQUFZO0lBYnpCO1FBY0UsVUFBSyxHQUFHLEtBQUssQ0FBQztJQUNoQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFlBQVk7SUFieEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZ1VBT0c7UUFDYixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUNqQyxDQUFDO0dBQ1csWUFBWSxDQUV4QjtBQUZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGU6IGAgICAgPFN0YWNrTGF5b3V0PlxuICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIlxuICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cblxuICA8QnV0dG9uIHRleHQ9XCJTaWduIGluXCI+PC9CdXR0b24+XG4gIDxCdXR0b24gdGV4dD1cIlNpZ24gdXAgZm9yIEdyb2Nlcmllc1wiPjwvQnV0dG9uPlxuPC9TdGFja0xheW91dD5gLFxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdhcHAnO1xufVxuIl19