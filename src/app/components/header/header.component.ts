import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from "../home/home.component";


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //title=signal("HOME");
}
