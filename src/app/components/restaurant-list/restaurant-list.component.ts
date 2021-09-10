import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Restaurant } from '../../../models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: "restaurant-list",
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[] = [];
  categories: Category[] = [];
  isLoading: boolean = true;

  filterForm = new FormGroup({
    filter: new FormControl(null),
    category: new FormControl(null),
    range: new FormControl(null)
  })

  constructor(
    private restaurantService: RestaurantService,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.search();
    this.categoryService.getCategories().subscribe(c => this.categories = c);
  }

  search() {
    this.isLoading = true;
    let filter = this.filterForm.get("filter")?.value;
    let category = this.filterForm.get("category")?.value;
    let range = this.filterForm.get("range")?.value;

    this.restaurantService.searchRestaurants(filter, category, range).subscribe(restaurants => {
      this.restaurants = restaurants.map(r => {
        r.convertedImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64,' + r.image);
        return r;
      });
      this.isLoading = false;
    });
  }

  get hasResults() {
    return this.restaurants.length > 0;
  }
}
