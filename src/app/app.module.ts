import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RechercherPersoComponent } from './rechercher-perso/rechercher-perso.component';
import { BarreErreurComponent } from './barre-erreur/barre-erreur.component';
import { PersoService } from "./services/perso.service";
import { RouterModule, Routes } from "@angular/router";
import { PaginationComponent } from './pagination/pagination.component';
//import { BarreHeaderComponent } from './barre-header/barre-header.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: "recherche", component: RechercherPersoComponent},
  {path: "perso/:id", component: DetailsComponent},
  {path: "**", redirectTo: "/recherche"}
];
@NgModule({
  declarations: [
    AppComponent,
    RechercherPersoComponent,
    BarreErreurComponent,
  //  BarreHeaderComponent,
    DetailsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PersoService],
  bootstrap: [AppComponent]
})
export class AppModule { }