import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  url = 'http://localhost:3000/locations';
  public housingLocationList: Housinglocation[] = [
    {
      id: 1,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/example-house.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 2,
      name: 'Hello World C?',
      city: 'Santa Hello',
      state: 'IL',
      photo: '/assets/example-house-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 3,
      name: 'Hello World C?',
      city: 'Santama Hello',
      state: 'IL',
      photo: '/assets/example-house-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 4,
      name: 'Hello World C++?',
      city: 'Ha Noi',
      state: 'IL',
      photo: '/assets/example-house-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 5,
      name: 'Hello World C#?',
      city: 'Ha Nam',
      state: 'IL',
      photo: '/assets/example-house-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Hello World Java?',
      city: 'Santarrrr Hello',
      state: 'IL',
      photo: '/assets/example-house-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hello World Javascript?',
      city: 'Unknown',
      state: 'IL',
      photo: '/assets/example-house-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Hello World Ruby?',
      city: 'Unity',
      state: 'IL',
      photo: '/assets/example-house-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true
    }
  ];

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  /*
  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  } 
  */

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
/*
  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }*/

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
