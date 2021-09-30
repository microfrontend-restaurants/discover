import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  searchRestaurants(filter: string | null, category: string | null, range: number | null) {

    let params = new HttpParams();

    if(filter != null) {
      params = params.append("filter", filter);
    }

    if(category != null) {
      params = params.append("category", category);
    }

    if(range != null) {
      params = params.append("range", range)
    }
    

    return this.httpClient.get<Restaurant[]>(`${environment.api}/restaurant/search`, {
      params: params
    });
  }

  getRestaurantById(id: number, withItems: boolean = false) {
    return this.httpClient.get<Restaurant>(`${environment.api}/restaurant/${id}`, {
      params: new HttpParams().append("withItems", withItems)
    });
  }
}
