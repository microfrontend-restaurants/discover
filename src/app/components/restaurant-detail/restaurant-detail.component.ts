import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'discover-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant | null = null;
  isLoading: boolean = true;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(r => {
      this.isLoading = true;
      let id = r.get("id");
      this.restaurantService.getRestaurantById(Number(id), true).subscribe(r => {
        r.convertedImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + r.image);
        this.restaurant = r;
        this.isLoading = false;
      }, () => {
        this.restaurant = null;
        this.isLoading = false;
      });
    });
  }
}
