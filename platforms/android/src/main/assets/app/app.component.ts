import { Component } from '@angular/core';
import { AuthService } from './services/auth.services';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  template: `    <StackLayout>
  <TextField hint="Email Address" keyboardType="email"
    autocorrect="false" autocapitalizationType="none"></TextField>
  <TextField hint="Password" secure="true"></TextField>

  <Button text="Sign in" (tap)="checkAuth()"></Button>
  <Button text="Sign up for Groceries"></Button>
</StackLayout>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {
  }
  title = 'app';

  checkAuth() {
    this.authService.facebookLogin()
  }
}
