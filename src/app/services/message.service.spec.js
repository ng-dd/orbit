"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var message_service_1 = require("./message.service");
describe('MessageService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [message_service_1.MessageService]
        });
    });
    it('should be created', testing_1.inject([message_service_1.MessageService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlLnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF3RDtBQUV4RCxxREFBbUQ7QUFFbkQsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLFVBQVUsQ0FBQztRQUNULGlCQUFPLENBQUMsc0JBQXNCLENBQUM7WUFDN0IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM1QixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBTSxDQUFDLENBQUMsZ0NBQWMsQ0FBQyxFQUFFLFVBQUMsT0FBdUI7UUFDdkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RCZWQsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnTWVzc2FnZVNlcnZpY2UnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG4gICAgICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBjcmVhdGVkJywgaW5qZWN0KFtNZXNzYWdlU2VydmljZV0sIChzZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgPT4ge1xuICAgIGV4cGVjdChzZXJ2aWNlKS50b0JlVHJ1dGh5KCk7XG4gIH0pKTtcbn0pO1xuIl19