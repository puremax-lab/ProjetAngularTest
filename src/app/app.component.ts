import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenu chez CFITECH';
  // imageUrl = "https://png.pngtree.com/png-clipart/20191027/ourmid/pngtree-view-icon-png-image_1869829.jpg";

  // siteUrl = "https://cfitech.be/";

  // linkText = "Visitez le site officiel de CFITECH";

  // isDisabled = false;

  // isChecked = false;

  // changeTitle(){
  //   this.title = "Bienvenu chez koekeltech";
  // }

  // prenom=""

  // email=""
  // envoyer(){
  //   alert("Envoyez en email : "+this.email);
  // }

  // belgique = false;
  // france = false;
  // allemagne = false;
  // espagne = false;
  // italie = false;
  // paysBas = false;
  paysSelectionne = "";
}
