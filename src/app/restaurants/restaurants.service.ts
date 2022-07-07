import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { MEAT_API } from "../app.api";
import { ErrorHandler } from "../app.error-handler";
import { Restaurant } from "./restaurant/restaurant.model";

@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`).pipe(catchError(ErrorHandler.handleError))
    }
}