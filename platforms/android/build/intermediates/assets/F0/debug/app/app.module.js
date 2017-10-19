"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var content_item_component_1 = require("./content-item/content-item.component");
var content_feed_component_1 = require("./content-feed/content-feed.component");
var profile_view_component_1 = require("./profile-view/profile-view.component");
var user_settings_component_1 = require("./user-settings/user-settings.component");
var search_component_1 = require("./search/search.component");
var navbar_component_1 = require("./navbar/navbar.component");
var friends_list_component_1 = require("./friends-list/friends-list.component");
var search_bar_component_1 = require("./search-bar/search-bar.component");
var notifications_component_1 = require("./notifications/notifications.component");
var stream_view_component_1 = require("./stream-view/stream-view.component");
var stream_chat_log_component_1 = require("./stream-chat-log/stream-chat-log.component");
var single_celeb_feed_component_1 = require("./single-celeb-feed/single-celeb-feed.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            content_item_component_1.ContentItemComponent,
            content_feed_component_1.ContentFeedComponent,
            profile_view_component_1.ProfileViewComponent,
            user_settings_component_1.UserSettingsComponent,
            search_component_1.SearchComponent,
            navbar_component_1.NavbarComponent,
            friends_list_component_1.FriendsListComponent,
            search_bar_component_1.SearchBarComponent,
            notifications_component_1.NotificationsComponent,
            stream_view_component_1.StreamViewComponent,
            stream_chat_log_component_1.StreamChatLogComponent,
            single_celeb_feed_component_1.SingleCelebFeedComponent
        ],
        imports: [
            platform_browser_1.BrowserModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQXlDO0FBR3pDLGlEQUErQztBQUMvQyxnRkFBNkU7QUFDN0UsZ0ZBQTZFO0FBQzdFLGdGQUE2RTtBQUM3RSxtRkFBZ0Y7QUFDaEYsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCxnRkFBNkU7QUFDN0UsMEVBQXVFO0FBQ3ZFLG1GQUFpRjtBQUNqRiw2RUFBMEU7QUFDMUUseUZBQXFGO0FBQ3JGLCtGQUEyRjtBQXdCM0YsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBdEJyQixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLDZDQUFvQjtZQUNwQiw2Q0FBb0I7WUFDcEIsNkNBQW9CO1lBQ3BCLCtDQUFxQjtZQUNyQixrQ0FBZTtZQUNmLGtDQUFlO1lBQ2YsNkNBQW9CO1lBQ3BCLHlDQUFrQjtZQUNsQixnREFBc0I7WUFDdEIsMkNBQW1CO1lBQ25CLGtEQUFzQjtZQUN0QixzREFBd0I7U0FDekI7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQ0FBYTtTQUNkO1FBQ0QsU0FBUyxFQUFFLEVBQUU7UUFDYixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtaXRlbS9jb250ZW50LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRGZWVkQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LWZlZWQvY29udGVudC1mZWVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9maWxlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZS12aWV3L3Byb2ZpbGUtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlclNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyLXNldHRpbmdzL3VzZXItc2V0dGluZ3MuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmllbmRzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vZnJpZW5kcy1saXN0L2ZyaWVuZHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyZWFtVmlld0NvbXBvbmVudCB9IGZyb20gJy4vc3RyZWFtLXZpZXcvc3RyZWFtLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cmVhbUNoYXRMb2dDb21wb25lbnQgfSBmcm9tICcuL3N0cmVhbS1jaGF0LWxvZy9zdHJlYW0tY2hhdC1sb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbmdsZUNlbGViRmVlZENvbXBvbmVudCB9IGZyb20gJy4vc2luZ2xlLWNlbGViLWZlZWQvc2luZ2xlLWNlbGViLWZlZWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIENvbnRlbnRJdGVtQ29tcG9uZW50LFxuICAgIENvbnRlbnRGZWVkQ29tcG9uZW50LFxuICAgIFByb2ZpbGVWaWV3Q29tcG9uZW50LFxuICAgIFVzZXJTZXR0aW5nc0NvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIEZyaWVuZHNMaXN0Q29tcG9uZW50LFxuICAgIFNlYXJjaEJhckNvbXBvbmVudCxcbiAgICBOb3RpZmljYXRpb25zQ29tcG9uZW50LFxuICAgIFN0cmVhbVZpZXdDb21wb25lbnQsXG4gICAgU3RyZWFtQ2hhdExvZ0NvbXBvbmVudCxcbiAgICBTaW5nbGVDZWxlYkZlZWRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=