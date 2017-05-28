import { Component, OnInit } from '@angular/core';
import { Perso } from "../model/perso";
import { PersoService } from "../services/perso.service";

@Component({
  selector: 'app-rechercher-perso',
  templateUrl: './rechercher-perso.component.html',
  styleUrls: ['./rechercher-perso.component.css']
})
export class RechercherPersoComponent implements OnInit {

  public recherche: String = "";
  public isRechercheOnce = false;
  public resultats: Perso[] = [];
  public listeFilms: Perso[] = [];
  public pages: number = 0;
  public pageCourante: number = 0;

  public error: String = "";

  constructor(private persoSvc: PersoService) { }

  ngOnInit() {
    this.persoSvc.rechercherHistorique()
    .then((recherche) => {
      //this.pageCourante = recherche.page;
      //this.pages = recherche.pages;
      this.resultats = recherche.persos;
    })
    .catch((error) => {
      console.log("Pas d'historique");
    })
  }

  rechercher() {
    this.error = "";
    if (this.recherche.length < 3) {
      this.error = "Veuillez saisir un titre";
    } else {
      this.isRechercheOnce = true;
      this.resultats = [];
      this.persoSvc.rechercherFilms(this.recherche)
        .then((recherche) => {
         // this.pageCourante = recherche.page;
          //this.pages = recherche.pages;
          this.resultats = recherche.persos;
        })
        .catch((err) => {
          this.error = err;
        });
    }
  }

  changerPage(numeroPage: number) {
    this.persoSvc.rechercherFilms(this.recherche)
        .then((recherche) => {
          //this.pageCourante = recherche.page;
          //this.pages = recherche.pages;
          this.resultats = recherche.persos;
        })
        .catch((err) => {
          this.error = err;
        });
  }

}
