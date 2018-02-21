import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from "@angular/router";
import { Location } from '@angular/common';
import { InhabitantsService } from "../../services/inhabitants.service";

@Component({
  selector: 'app-inhabitant',
  templateUrl: './inhabitant.component.html',
})
export class InhabitantComponent implements OnInit {

  inhabitant: any = {};
  loading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              public inhabitantsService: InhabitantsService,
              private location: Location) {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        this.inhabitantsService.getInhabitantInfo(id, (dataObj) => {
          if(dataObj.error) {
            this.router.navigate(['/error']);
            return;
          }
          this.inhabitant = dataObj.data;
          this.loading = false;
        });
      });
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
