"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var routing_module_1 = require("./routing/routing.module");
var app_component_1 = require("./app.component");
// import { ContentItemComponent } from './content-item/content-item.component';
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
//services
var user_service_1 = require("./services/user.service");
var post_service_1 = require("./services/post.service");
var likes_service_1 = require("./services/likes.service");
var message_service_1 = require("./services/message.service");
var friend_service_1 = require("./services/friend.service");
var category_service_1 = require("./services/category.service");
var roomstat_service_1 = require("./services/roomstat.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            app_component_1.AppComponent,
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
            platform_browser_1.BrowserModule,
            nativescript_module_1.NativeScriptModule,
            routing_module_1.RoutingModule
        ],
        providers: [
            user_service_1.UserService,
            post_service_1.PostService,
            likes_service_1.LikesService,
            message_service_1.MessageService,
            friend_service_1.FriendService,
            category_service_1.CategoryService,
            roomstat_service_1.RoomstatService,
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUc5RSwyREFBeUQ7QUFDekQsaURBQStDO0FBQy9DLGdGQUFnRjtBQUNoRixnRkFBNkU7QUFDN0UsZ0ZBQTZFO0FBQzdFLG1GQUFnRjtBQUNoRiw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELGdGQUE2RTtBQUM3RSwwRUFBdUU7QUFDdkUsbUZBQWlGO0FBQ2pGLDZFQUEwRTtBQUMxRSx5RkFBcUY7QUFDckYsK0ZBQTJGO0FBRTNGLFVBQVU7QUFDVix3REFBcUQ7QUFDckQsd0RBQXFEO0FBQ3JELDBEQUF1RDtBQUN2RCw4REFBMkQ7QUFDM0QsNERBQXlEO0FBQ3pELGdFQUE2RDtBQUM3RCxnRUFBNkQ7QUFvQzdELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQWxDckIsZUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLDZDQUFvQjtZQUNwQiw2Q0FBb0I7WUFDcEIsK0NBQXFCO1lBQ3JCLGtDQUFlO1lBQ2Ysa0NBQWU7WUFDZiw2Q0FBb0I7WUFDcEIseUNBQWtCO1lBQ2xCLGdEQUFzQjtZQUN0QiwyQ0FBbUI7WUFDbkIsa0RBQXNCO1lBQ3RCLHNEQUF3QjtTQUN6QjtRQUNELE9BQU8sRUFBRTtZQUNQLGdDQUFhO1lBQ2Isd0NBQWtCO1lBQ2xCLDhCQUFhO1NBQ2Q7UUFDRCxTQUFTLEVBQUU7WUFDVCwwQkFBVztZQUNYLDBCQUFXO1lBQ1gsNEJBQVk7WUFDWixnQ0FBYztZQUNkLDhCQUFhO1lBQ2Isa0NBQWU7WUFDZixrQ0FBZTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtLQUNGLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JvdXRpbmcvcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBDb250ZW50SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC1pdGVtL2NvbnRlbnQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudEZlZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtZmVlZC9jb250ZW50LWZlZWQuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZyaWVuZHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mcmllbmRzLWxpc3QvZnJpZW5kcy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hCYXJDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJlYW1WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9zdHJlYW0tdmlldy9zdHJlYW0tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyZWFtQ2hhdExvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RyZWFtLWNoYXQtbG9nL3N0cmVhbS1jaGF0LWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2luZ2xlQ2VsZWJGZWVkQ29tcG9uZW50IH0gZnJvbSAnLi9zaW5nbGUtY2VsZWItZmVlZC9zaW5nbGUtY2VsZWItZmVlZC5jb21wb25lbnQnO1xuXG4vL3NlcnZpY2VzXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJ1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Bvc3Quc2VydmljZSdcbmltcG9ydCB7IExpa2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGlrZXMuc2VydmljZSdcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBGcmllbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mcmllbmQuc2VydmljZSdcbmltcG9ydCB7IENhdGVnb3J5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2F0ZWdvcnkuc2VydmljZSdcbmltcG9ydCB7IFJvb21zdGF0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm9vbXN0YXQuc2VydmljZSdcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIENvbnRlbnRGZWVkQ29tcG9uZW50LFxuICAgIFByb2ZpbGVWaWV3Q29tcG9uZW50LFxuICAgIFVzZXJTZXR0aW5nc0NvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIEZyaWVuZHNMaXN0Q29tcG9uZW50LFxuICAgIFNlYXJjaEJhckNvbXBvbmVudCxcbiAgICBOb3RpZmljYXRpb25zQ29tcG9uZW50LFxuICAgIFN0cmVhbVZpZXdDb21wb25lbnQsXG4gICAgU3RyZWFtQ2hhdExvZ0NvbXBvbmVudCxcbiAgICBTaW5nbGVDZWxlYkZlZWRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVXNlclNlcnZpY2UsXG4gICAgUG9zdFNlcnZpY2UsXG4gICAgTGlrZXNTZXJ2aWNlLFxuICAgIE1lc3NhZ2VTZXJ2aWNlLFxuICAgIEZyaWVuZFNlcnZpY2UsXG4gICAgQ2F0ZWdvcnlTZXJ2aWNlLFxuICAgIFJvb21zdGF0U2VydmljZSxcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUEsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19