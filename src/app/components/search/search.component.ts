import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InhabitantsService } from "../../services/inhabitants.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  name: string = '';
  inhabitants: any[] = [];
  loading: boolean;

  constructor(public inhabitantsService: InhabitantsService,
              private router: Router) { }

  ngOnInit() {
  }

  searchInhabitant() {
    this.loading = true;
    this.inhabitantsService.searchInhabitant(this.name, (dataObj) => {
      if(dataObj.error) {
        this.router.navigate(['/error']);
        return;
      }
      this.inhabitants = dataObj.data;
      this.loading = false;
    });
  }

}
