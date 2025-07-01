import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenu chez CFITECH';
  // imageUrl = "https://png.pngtree.com/png-clipart/20191027/ourmid/pngtree-view-icon-png-image_1869829.jpg";
  siteUrl = "https://cfitech.be/";
  linkText = "Visitez le site officiel de CFITECH";
}
