"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var auth_1 = require("angularfire2/auth");
var firebase_config_1 = require("./environments/firebase.config");
var angularfire2_1 = require("angularfire2");
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
var auth_services_1 = require("./services/auth.services");
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
            routing_module_1.RoutingModule,
            angularfire2_1.AngularFireModule.initializeApp(firebase_config_1.firebaseConfig),
            auth_1.AngularFireAuthModule,
        ],
        providers: [
            auth_services_1.AuthService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBMEQ7QUFDMUQsc0NBQTJEO0FBQzNELGdGQUE4RTtBQUU5RSwwQ0FBMEQ7QUFDMUQsa0VBQStEO0FBQy9ELDZDQUFpRDtBQUVqRCwyREFBeUQ7QUFDekQsaURBQStDO0FBQy9DLGdGQUFnRjtBQUNoRixnRkFBNkU7QUFDN0UsZ0ZBQTZFO0FBQzdFLG1GQUFnRjtBQUNoRiw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELGdGQUE2RTtBQUM3RSwwRUFBdUU7QUFDdkUsbUZBQWlGO0FBQ2pGLDZFQUEwRTtBQUMxRSx5RkFBcUY7QUFDckYsK0ZBQTJGO0FBRTNGLFVBQVU7QUFDVix3REFBcUQ7QUFDckQsd0RBQXFEO0FBQ3JELDBEQUF1RDtBQUN2RCw4REFBMkQ7QUFDM0QsNERBQXlEO0FBQ3pELGdFQUE2RDtBQUM3RCxnRUFBNkQ7QUFDN0QsMERBQXNEO0FBdUN0RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFyQ3JCLGVBQVEsQ0FBQztRQUNSLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWiw2Q0FBb0I7WUFDcEIsNkNBQW9CO1lBQ3BCLCtDQUFxQjtZQUNyQixrQ0FBZTtZQUNmLGtDQUFlO1lBQ2YsNkNBQW9CO1lBQ3BCLHlDQUFrQjtZQUNsQixnREFBc0I7WUFDdEIsMkNBQW1CO1lBQ25CLGtEQUFzQjtZQUN0QixzREFBd0I7U0FDekI7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQ0FBYTtZQUNiLHdDQUFrQjtZQUNsQiw4QkFBYTtZQUNiLGdDQUFpQixDQUFDLGFBQWEsQ0FBQyxnQ0FBYyxDQUFDO1lBQy9DLDRCQUFxQjtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNULDJCQUFXO1lBQ1gsMEJBQVc7WUFDWCwwQkFBVztZQUNYLDRCQUFZO1lBQ1osZ0NBQWM7WUFDZCw4QkFBYTtZQUNiLGtDQUFlO1lBQ2Ysa0NBQWU7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUCx1QkFBZ0I7U0FDakI7S0FDRixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZUF1dGhNb2R1bGUgfSBmcm9tICdhbmd1bGFyZmlyZTIvYXV0aCc7XG5pbXBvcnQgeyBmaXJlYmFzZUNvbmZpZyB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2ZpcmViYXNlLmNvbmZpZydcbmltcG9ydCB7IEFuZ3VsYXJGaXJlTW9kdWxlIH0gZnJvbSAnYW5ndWxhcmZpcmUyJztcblxuaW1wb3J0IHsgUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JvdXRpbmcvcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG4vLyBpbXBvcnQgeyBDb250ZW50SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC1pdGVtL2NvbnRlbnQtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudEZlZWRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQtZmVlZC9jb250ZW50LWZlZWQuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2ZpbGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcm9maWxlLXZpZXcvcHJvZmlsZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZyaWVuZHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mcmllbmRzLWxpc3QvZnJpZW5kcy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hCYXJDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJlYW1WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9zdHJlYW0tdmlldy9zdHJlYW0tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RyZWFtQ2hhdExvZ0NvbXBvbmVudCB9IGZyb20gJy4vc3RyZWFtLWNoYXQtbG9nL3N0cmVhbS1jaGF0LWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2luZ2xlQ2VsZWJGZWVkQ29tcG9uZW50IH0gZnJvbSAnLi9zaW5nbGUtY2VsZWItZmVlZC9zaW5nbGUtY2VsZWItZmVlZC5jb21wb25lbnQnO1xuXG4vL3NlcnZpY2VzXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJ1xuaW1wb3J0IHsgUG9zdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Bvc3Quc2VydmljZSdcbmltcG9ydCB7IExpa2VzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbGlrZXMuc2VydmljZSdcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnXG5pbXBvcnQgeyBGcmllbmRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mcmllbmQuc2VydmljZSdcbmltcG9ydCB7IENhdGVnb3J5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2F0ZWdvcnkuc2VydmljZSdcbmltcG9ydCB7IFJvb21zdGF0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcm9vbXN0YXQuc2VydmljZSdcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VzJ1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgQ29udGVudEZlZWRDb21wb25lbnQsXG4gICAgUHJvZmlsZVZpZXdDb21wb25lbnQsXG4gICAgVXNlclNldHRpbmdzQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgRnJpZW5kc0xpc3RDb21wb25lbnQsXG4gICAgU2VhcmNoQmFyQ29tcG9uZW50LFxuICAgIE5vdGlmaWNhdGlvbnNDb21wb25lbnQsXG4gICAgU3RyZWFtVmlld0NvbXBvbmVudCxcbiAgICBTdHJlYW1DaGF0TG9nQ29tcG9uZW50LFxuICAgIFNpbmdsZUNlbGViRmVlZENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgUm91dGluZ01vZHVsZSxcbiAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSwgLy8gaW1wb3J0cyBmaXJlYmFzZS9hcHAgbmVlZGVkIGZvciBldmVyeXRoaW5nXG4gICAgQW5ndWxhckZpcmVBdXRoTW9kdWxlLCAvLyBpbXBvcnRzIGZpcmViYXNlL2F1dGgsIG9ubHkgbmVlZGVkIGZvciBhdXRoIGZlYXR1cmVzXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGhTZXJ2aWNlLFxuICAgIFVzZXJTZXJ2aWNlLFxuICAgIFBvc3RTZXJ2aWNlLFxuICAgIExpa2VzU2VydmljZSxcbiAgICBNZXNzYWdlU2VydmljZSxcbiAgICBGcmllbmRTZXJ2aWNlLFxuICAgIENhdGVnb3J5U2VydmljZSxcbiAgICBSb29tc3RhdFNlcnZpY2UsXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==