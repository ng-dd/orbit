import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { RoutingModule } from "./routing/routing.module";
import { AppComponent } from './app.component';
// import { ContentItemComponent } from './content-item/content-item.component';
import { ContentFeedComponent } from './content-feed/content-feed.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { StreamViewComponent } from './stream-view/stream-view.component';
import { StreamChatLogComponent } from './stream-chat-log/stream-chat-log.component';
import { SingleCelebFeedComponent } from './single-celeb-feed/single-celeb-feed.component';

//services
import { UserService } from './services/user.service'
import { PostService } from './services/post.service'
import { LikesService } from './services/likes.service'
import { MessageService } from './services/message.service'
import { FriendService } from './services/friend.service'
import { CategoryService } from './services/category.service'
import { RoomstatService } from './services/roomstat.service'

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ContentFeedComponent,
    ProfileViewComponent,
    UserSettingsComponent,
    SearchComponent,
    NavbarComponent,
    FriendsListComponent,
    SearchBarComponent,
    NotificationsComponent,
    StreamViewComponent,
    StreamChatLogComponent,
    SingleCelebFeedComponent
  ],
  imports: [
    BrowserModule,
    NativeScriptModule,
    RoutingModule
  ],
  providers: [
    UserService,
    PostService,
    LikesService,
    MessageService,
    FriendService,
    CategoryService,
    RoomstatService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class AppModule { }
