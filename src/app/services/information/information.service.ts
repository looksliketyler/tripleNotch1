import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Animals } from 'src/app/models/triple-notch-models.model';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private animals: Animals[] = [
    {name: 'Skunks', description: 'You can find skunks under sheds or piles of wood. Skunks dig up grass like squirrels, but in more localized spots. They carry disease, so it\'s best to tackle the problem sooner rather than later. Look for these spots. You won\'t always smell a skunk to know you have an issue. Pete will get rid of them!'},
    {name: 'Raccoons', description: 'Raccoons usually take shelter in the house, specifically the attic. Don\'t assume tiny footfalls you hear are squirrels or mice. Raccoons can seriously damage your home. They\'ll set up an area in the attic where they leave urine and feces — which will ruin expensive drywall. Rid yourself of this nuisance as soon as possible.'},
    {name: 'Bats', description: 'Attics are where you\'ll find bats — upside down. They tend to find a small opening near the roof and push themselves through feces similar to mice but a bit bigger will be piled at their entrance/exit to the home, along with brown greasy spots.'},
    {name: 'Squirrels', description: 'These rodents don\'t just stay in your attic when invading your home. Stashes of nuts give away their residence. Overhangs/soffits are susceptible for squirrel invasion. They can chew their way into your home and gnaw at electrical wiring. Save your wires and call Triple Notch today.'},
    {name: 'Moles', description: 'If you see mounds of unexplained dirt or burrowed holes, you have a mole problem. They may even burrow under your driveway. Since these underground pests typically stay below your lawn, your landscaping runs the risk of being ruined. Don\'t let these molehills turn into mountains.'},
    {name: 'Mice', description: 'Mice are a very common pest. They find their way into your home through the smallest holes. Like squirrels, they can chew wires. Mice leave trails of feces. Although traps and poison may seem effective ways of removal, it\'s only temporary. Rely on Pete to remove rodents and keep them out.'},
    {name: 'Groundhogs', description: 'Very similar to moles, groundhogs burrow throughout your property. Keep an eye out for structural damage. As they tunnel under porches, decks, and small buildings, groundhogs can cause foundational issues. Buried service wires, invisible fences, and roots can be vulnerable.'}
  ];
  private routeTitleArray: string[] = [];
  private routePathsArray: string[] = [];

  constructor() { }

  /**
   * @description - method that returns array of animals and description
   * @returns {Animals[]} nuisance animals and descriptions
   */
  public getAnimals(): Animals[] {
    return this.animals;
  }

  /**
   * @description - public method that checks for routes and runs filter method to assign values in service file
   * @param {Router} routes angular router object
   */
  public callRoutingInfo(routes: Router): void {
    if (routes) {
      this.filterAndReturnRouteInfo(routes);
    }
  }

  /**
   * @description - public method to return page titles from angular router
   * @returns {string[]} route titles
   */
  public getRouteTitles(): string[] {
    return this.routeTitleArray;
  }

  /**
   * @description - public method to return route url paths from angular router
   * @returns {string[]} route paths
   */
  public getRoutePaths(): string[] {
    return this.routePathsArray;
  }

  /**
   * @description - method to filter through angular router paths and return page titles for navbar consumption
   * @param {Router} routes - angular router object
   * @returns {void}
   */
  private filterAndReturnRouteInfo(routes: Router): void {
    let routeTitleArray: string[] = [];
    let routePathsArray: string[] = [];
    if (Array.isArray(routes.config)) { // .config houses the forRoot() paths in the angular router
      for (const route of routes.config) {
        if (route['data'] && route['data'].title) { // route['data'] would be the data key added in the routes object in angular router
          routeTitleArray.push(route['data'].title);
        }
        if (route && route.path) { // grabs the paths assigned in angular router
          routePathsArray.push(route.path);
        }
      }
    }
    this.routeTitleArray = routeTitleArray;
    this.routePathsArray = routePathsArray;
  }


}
