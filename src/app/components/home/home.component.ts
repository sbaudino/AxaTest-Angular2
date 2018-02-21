import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InhabitantsService } from "../../services/inhabitants.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  loading: boolean = true;

  constructor(public inhabitantsService: InhabitantsService,
              private router: Router) {
    if(inhabitantsService.inhabitants.length) {
      this.hideLoading();
    } else {
      inhabitantsService.getInhabitants()
        .subscribe(inhabitants => {
          this.hideLoading();
        }, err => {
          this.router.navigate(['/error']);
        });
    }
  }

  hideLoading() {
    this.loading = false;
  }

  ngOnInit() {
  }

}
