import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  searchRestaurants(filter?: string, category?: string, range?: number) {
    return this.httpClient.get<Restaurant[]>(`${environment.api}/restaurant/search`, {
      params: new HttpParams()
      .append("filter", filter ?? "")
      .append("category", category ?? "")
      .append("range", range ?? "")
    });
  }

  getRestaurantById(id: number, withItems: boolean = false) {
    return this.httpClient.get<Restaurant>(`${environment.api}/restaurant/${id}`, {
      params: new HttpParams().append("withItems", withItems)
    });
  }
}
