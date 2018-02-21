import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InhabitantsService } from './inhabitants.service';

describe('InhabitantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InhabitantsService]
    });
  });

  it('should return a right object', inject([InhabitantsService], (service: InhabitantsService) => {
    const dummyInhabitant = {
      id: 0,
      name: "Tobus Quickwhistle",
      thumbnail: "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
      age: 306,
      weight: 39.065952,
      height: 107.75835,
      hair_color: "Pink",
      professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter"
      ],
      friends: [
        "Cogwitz Chillwidget",
        "Tinadette Chillbuster"
      ]
    };
    service.getInhabitants().subscribe(inhabitants => {
      expect(inhabitants[0]).toEqual(dummyInhabitant);
    });
  }));
});
