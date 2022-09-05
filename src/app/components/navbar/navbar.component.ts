import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from 'src/app/services/information/information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public routeTitles: string[] = [];
  public routePaths: string[] = [];

  constructor(
    private router: Router,
    private informationService: InformationService
  ) { }

  ngOnInit(): void {
    this.getRouterInformation();
  }

  private getRouterInformation(): void {
    this.informationService.callRoutingInfo(this.router);
    this.routeTitles = this.informationService.getRouteTitles();
    this.routePaths = this.informationService.getRoutePaths();
  }

}
