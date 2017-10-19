"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var friends_list_component_1 = require("./friends-list.component");
describe('FriendsListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [friends_list_component_1.FriendsListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(friends_list_component_1.FriendsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJpZW5kcy1saXN0LmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnJpZW5kcy1saXN0LmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXlFO0FBRXpFLG1FQUFnRTtBQUVoRSxRQUFRLENBQUMsc0JBQXNCLEVBQUU7SUFDL0IsSUFBSSxTQUErQixDQUFDO0lBQ3BDLElBQUksT0FBK0MsQ0FBQztJQUVwRCxVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2YsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBRSw2Q0FBb0IsQ0FBRTtTQUN2QyxDQUFDO2FBQ0QsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDO1FBQ1QsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDZDQUFvQixDQUFDLENBQUM7UUFDeEQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IEZyaWVuZHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mcmllbmRzLWxpc3QuY29tcG9uZW50JztcblxuZGVzY3JpYmUoJ0ZyaWVuZHNMaXN0Q29tcG9uZW50JywgKCkgPT4ge1xuICBsZXQgY29tcG9uZW50OiBGcmllbmRzTGlzdENvbXBvbmVudDtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8RnJpZW5kc0xpc3RDb21wb25lbnQ+O1xuXG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBkZWNsYXJhdGlvbnM6IFsgRnJpZW5kc0xpc3RDb21wb25lbnQgXVxuICAgIH0pXG4gICAgLmNvbXBpbGVDb21wb25lbnRzKCk7XG4gIH0pKTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBmaXh0dXJlID0gVGVzdEJlZC5jcmVhdGVDb21wb25lbnQoRnJpZW5kc0xpc3RDb21wb25lbnQpO1xuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgY3JlYXRlZCcsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=