import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  template: `    <StackLayout>
  <TextField hint="Email Address" keyboardType="email"
    autocorrect="false" autocapitalizationType="none"></TextField>
  <TextField hint="Password" secure="true"></TextField>

  <Button text="Sign in"></Button>
  <Button text="Sign up for Groceries"></Button>
</StackLayout>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app';
}
