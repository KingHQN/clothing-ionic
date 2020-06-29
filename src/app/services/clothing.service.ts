import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError, BehaviorSubject } from 'rxjs';
import { catchError, map, find } from 'rxjs/operators';
import { Category, Clothes } from '../models/clothing.model';

@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  private urlCategory = 'https://clothing-angular.herokuapp.com/api/category';
  private urlClothes = 'https://clothing-angular.herokuapp.com/api/clothes';

  private clothes: Clothes[];
  private categories: Category[];
  private filteredClothes: Clothes[];
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private displayClothesSubject: BehaviorSubject<Clothes[]> = new BehaviorSubject<Clothes[]>([]);
  private displayCategoriesSubject: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

  clothes$: Observable<Clothes[]> = this.displayClothesSubject.asObservable();
  categories$: Observable<Category[]> = this.displayCategoriesSubject.asObservable();
  length$: Observable<number> = this.lengthSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.urlCategory).pipe(map(i => this.categories = i), catchError(this.errorHandler));
  }

  getClothes(): Observable<Clothes[]> {
    return this.http.get<Clothes[]>(this.urlClothes).pipe(map(i => this.clothes = i), catchError(this.errorHandler));
  }

  filterClothes(urlParams) {
    const paramsId = this.categories.find(i => i.name.toLowerCase() === urlParams)._id;
    this.filteredClothes = this.clothes.filter(d => d.categoryId === paramsId);
    this.displayClothesSubject.next(this.filteredClothes);
  }

  setData(data) {
    this.displayClothesSubject.next(data);
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server error');
  }
}
