import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class InhabitantsService {

  inhabitants: any[] = [];

  constructor(public http: HttpClient) { }

  fetchData() {
    const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

    return this.http.get(url).map((resp: any) => {
      this.inhabitants = resp.Brastlewark;
      return this.inhabitants;
    });
  }

  getInhabitants() {
    return this.fetchData();
  }

  searchInhabitant(name, callback: (data) => void) {
    if(this.inhabitants.length === 0) {
      this.fetchData().subscribe(inhabitants => {
        callback({
          error: false,
          data: inhabitants.filter(inh => inh.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
        });
      }, err => {
        callback({
          error: true,
          data: []
        });
      })
    } else {
      callback({
        error: false,
        data: this.inhabitants.filter(inh => inh.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
      });
    }
  }

  getInhabitantInfo(id, callback: (data) => void) {
    if(this.inhabitants.length === 0) {
      this.fetchData().subscribe(inhabitants => {
        callback({
          error: false,
          data: inhabitants.find(inh => inh.id == id)
        });
      }, err => {
        callback({
          error: true,
          data: []
        });
      })
    } else {
      callback({
        error: false,
        data: this.inhabitants.find(inh => inh.id == id)
      });
    }
  }

}
