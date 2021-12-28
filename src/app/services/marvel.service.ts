import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(public http: HttpClient) {}

  public getComics() {
    let url =
      'https://gateway.marvel.com/v1/public/comics?ts=1640693346&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=6180a13601dc325cb3363e49873c8329&title=Avengers'


    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5)
    );
  }
}
