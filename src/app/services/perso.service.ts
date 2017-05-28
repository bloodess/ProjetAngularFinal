import { Injectable } from '@angular/core';
import { Perso } from "../model/perso";
import { Http } from "@angular/http";
import 'rxjs';
import { Recherche } from "app/model/recherche";

@Injectable()
export class PersoService {

  private titreRecherche: String = "";
  private page: number = 0;

  constructor(private http : Http) { }

  rechercherHistorique(): Promise<Recherche> {
     if (this.titreRecherche === "") {
        return Promise.reject("Pas de recherche historique");
      } else {
        //return this.rechercherFilms(this.titreRecherche, this.page);
        return this.rechercherFilms(this.titreRecherche);
      }
  }

  rechercherFilms(titre: String): Promise<Recherche> {
    this.titreRecherche = titre;
   // this.page = page;
    return new Promise((resolve, reject) => {
      this.http.get("https://swapi.co/api/people/?search=" + titre )
      .toPromise()
      .then((response) => {
        let resultat = response.json();
      //  console.log(resultat);
        if (resultat && resultat["results"]) {
          let recherche = new Recherche();
          recherche.persos = resultat["results"];
          //recherche.pages = Math.ceil(Number(resultat["totalResults"]) / 10);
         // recherche.page = page;
          resolve(recherche);
        } else {
          reject("Bad response");
        }
      });
    });
  }

  detailsFilms(count: String): Promise<Perso> {
    return new Promise((resolve, reject) => {
      this.http.get("http://www.omdbapi.com/?i=" + count)
      .toPromise()
      .then((response) => {
        let resultat = response.json();
        if (resultat && !resultat.Error) {
          resolve(resultat);
        } else {
          reject("Bad response");
        }
      });
    });
  }
  
}