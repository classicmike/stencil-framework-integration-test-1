import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentLibraryModule} from "component-library";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentLibraryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app-standalone';
}
