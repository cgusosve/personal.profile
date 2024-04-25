import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, ContentComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal.profile';
}
