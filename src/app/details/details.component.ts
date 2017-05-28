import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersoService } from "app/services/perso.service";
import { Perso } from "app/model/perso";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private sub: any;
  private count: string = "";
  public film: Perso =  new Perso();

  constructor(private route: ActivatedRoute, private persoSvc: PersoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.count = params["count"];
      this.persoSvc.detailsFilms(this.count)
      .then((response) => {
        this.film = response;
      })
      .catch((error) => {
        console.log(error);
      })
    });
  }

}
