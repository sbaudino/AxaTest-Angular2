import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from "./components/home/home.component";
import { SearchComponent }  from "./components/search/search.component";
import { InhabitantComponent }  from "./components/inhabitant/inhabitant.component";
import { ErrorComponent }  from "./components/error/error.component";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'inhabitant/:id', component: InhabitantComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
