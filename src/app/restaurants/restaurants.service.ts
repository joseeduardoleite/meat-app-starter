import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { MEAT_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";
import { Restaurant } from "./restaurant/restaurant.model";

@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(catchError(ErrorHandler.handleError))
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`).pipe(catchError(ErrorHandler.handleError))
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).pipe(catchError(ErrorHandler.handleError))
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<any>(`${MEAT_API}/restaurants/${id}/menu`).pipe(catchError(ErrorHandler.handleError))
    }
}