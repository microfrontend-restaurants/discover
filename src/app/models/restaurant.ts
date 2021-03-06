import { RestaurantItem } from "./restaurant-item";

export interface Restaurant {
    id: number
    name: string,
    categories: string[],
    rating: number,
    location: string,
    priceRange: number,
    image: number[],
    convertedImage: any,
    items: RestaurantItem[]
}