import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "../Shared/Models/User";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-assignment';
  name :string= 'first';
  address:string = 'first-assignment';
}
