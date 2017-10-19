"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var stream_chat_log_component_1 = require("./stream-chat-log.component");
describe('StreamChatLogComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [stream_chat_log_component_1.StreamChatLogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(stream_chat_log_component_1.StreamChatLogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLWNoYXQtbG9nLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtLWNoYXQtbG9nLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXlFO0FBRXpFLHlFQUFxRTtBQUVyRSxRQUFRLENBQUMsd0JBQXdCLEVBQUU7SUFDakMsSUFBSSxTQUFpQyxDQUFDO0lBQ3RDLElBQUksT0FBaUQsQ0FBQztJQUV0RCxVQUFVLENBQUMsZUFBSyxDQUFDO1FBQ2YsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUM3QixZQUFZLEVBQUUsQ0FBRSxrREFBc0IsQ0FBRTtTQUN6QyxDQUFDO2FBQ0QsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRUosVUFBVSxDQUFDO1FBQ1QsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLGtEQUFzQixDQUFDLENBQUM7UUFDMUQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3luYywgQ29tcG9uZW50Rml4dHVyZSwgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IFN0cmVhbUNoYXRMb2dDb21wb25lbnQgfSBmcm9tICcuL3N0cmVhbS1jaGF0LWxvZy5jb21wb25lbnQnO1xuXG5kZXNjcmliZSgnU3RyZWFtQ2hhdExvZ0NvbXBvbmVudCcsICgpID0+IHtcbiAgbGV0IGNvbXBvbmVudDogU3RyZWFtQ2hhdExvZ0NvbXBvbmVudDtcbiAgbGV0IGZpeHR1cmU6IENvbXBvbmVudEZpeHR1cmU8U3RyZWFtQ2hhdExvZ0NvbXBvbmVudD47XG5cbiAgYmVmb3JlRWFjaChhc3luYygoKSA9PiB7XG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGRlY2xhcmF0aW9uczogWyBTdHJlYW1DaGF0TG9nQ29tcG9uZW50IF1cbiAgICB9KVxuICAgIC5jb21waWxlQ29tcG9uZW50cygpO1xuICB9KSk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KFN0cmVhbUNoYXRMb2dDb21wb25lbnQpO1xuICAgIGNvbXBvbmVudCA9IGZpeHR1cmUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgY3JlYXRlZCcsICgpID0+IHtcbiAgICBleHBlY3QoY29tcG9uZW50KS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=