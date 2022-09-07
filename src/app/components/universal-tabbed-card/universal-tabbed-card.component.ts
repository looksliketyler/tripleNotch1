import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { UniversalTabComponent } from './universal-tab/universal-tab.component';

@Component({
  selector: 'app-universal-tabbed-card',
  templateUrl: './universal-tabbed-card.component.html',
  styleUrls: ['./universal-tabbed-card.component.scss']
})
export class UniversalTabbedCardComponent implements AfterContentInit {

  // Get all the child tabs within this component
  @ContentChildren(UniversalTabComponent) childTabs: QueryList<UniversalTabComponent> = new QueryList<any>();
  
  tabTitles: string[] = [];
  activeTab: number = 0;
  readonly uniqueId: number = Math.round( Math.random()*100000 ); // Gives each tabbed card instance a unique ID number

  constructor() {}

  ngAfterContentInit(): void {

    let foundActiveTab = false; // So we can make sure the user marks exactly one tab as active, and fix it if none are marked

    // This must be done after content init, cannot be done with ngOnInit
    if(this.childTabs) {
      this.childTabs.forEach( (childTab, i) => { // Loop through each universal-tab component found within this tabbed card component
        if(childTab) {
          this.tabTitles.push(childTab.tabTitle); // Save an array of all the tab titles
          childTab.tabNum = i; // Inform each tab of its numerical order 
          childTab.parentUniqueId = this.uniqueId; // Inform each tab of this tabbed-card's unique id to prevent two tabbed cards from interacting with each other
          if(childTab.active) {
            if(!foundActiveTab) {
              this.activeTab = i; // Store the active tab if one is found.
              foundActiveTab = true;
            }
            else { // If the user has marked more than one tab as active
              console.error(`Cannot mark '${childTab.tabTitle}' tab as active, the '${this.tabTitles[this.activeTab]}' tab has already been marked active. Only one total tab can be marked active.`);
              childTab.active = false;
            }
          }
        }
      });

      if(!foundActiveTab && this.childTabs.length > 0) { // if no active tab was found, and there's at least one tab within the card
        
        this.activeTab = 0; // Make the first tab be the active tab
        const firstTab = this.childTabs.get(0); // Throws an error if the tab is not assigned to the variable to be truthy checked
        if(firstTab) {
          firstTab.active = true;
        }
      }
    }
  }

}