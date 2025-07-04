import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Bienvenu chez CFITECH';
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
  // paysSelectionne = "";

  // title = 'test';

  // estPresent = false;// par defaut l'etudiant est absent

  // marquePresent() {
  //   this.estPresent = true; // on marque l'etudiant present
  // }
  // marqueAbsent() {
  //   this.estPresent = false; // on marque l'etudiant absent
  // }

  // formateurs = [
  //   "jean",
  //   "Aimable",
  //   "Julien",
  //   "Charles",
  //   "Pierre"
  // ];

  // role = "admin";// change cette valeur pour tester différents rôles

  // title = 'Bienvenu chez CFITECH';
  // role:string ="";

  // title = "test";
  // role="";// change cette valeur pour tester différents rôles

  // title = 'Bienvenu chez CFITECH';
  // // classCss:string="carte-formateur-stagiaire";
  // classCss:string[]=["carte-stg-forme", "carte-stg-visuel"];

  // title = 'Bienvenu chez CFITECH';
  // estPresent = true;
  // estAbsent = false;

  title = "test";
  couleur = "";
}
