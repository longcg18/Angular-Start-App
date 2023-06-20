import { Routes } from '@angular/router';
import { HomeeComponent } from './homee/homee.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    }
  ];
  
  export default routeConfig;