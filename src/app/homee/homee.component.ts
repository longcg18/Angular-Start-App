import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-homee',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>

  <section class="results">
    <app-housing-location 
      *ngFor="let housinglocation of filteredLocationList" 
      [housinglocation]="housinglocation">
    </app-housing-location>
  </section>
  `,
  styleUrls: ['./homee.component.css']
})
export class HomeeComponent {
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  filteredLocationList: Housinglocation[] = [];



  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
  });
}

  filterResults(text: String) {
    console.log(text);
    
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      
    );

    console.log(this.filteredLocationList);
  }
}
