import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Restaurant } from '../../../../../shared/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: "restaurant-list",
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(
    private restaurantService: RestaurantService,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants.map(r => {
        r.convertedImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + r.image);
        return r;
      });
    });
  }
}
