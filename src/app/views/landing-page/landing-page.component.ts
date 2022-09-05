import { Component, OnInit } from '@angular/core';

import { Animals } from 'src/app/models/triple-notch-models.model';
import { InformationService } from 'src/app/services/information/information.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public animals: Animals[] = []; // used to display animals and descriptions in view

  constructor(
    private informationService: InformationService
  ) { }

  ngOnInit(): void {
    this.animals = this.informationService.getAnimals();
  }

}
