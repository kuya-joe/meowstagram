import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { PicModal } from './picmodal';

@Injectable({
  providedIn: 'root'
})
export class CatpicsService {
  public catPicsUrl = 'api/catpics';
  //SERVER_URL: string = "http://localhost:8080/api/"; //dummy (any url accepted by in-memory-api)
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPics(): Observable<PicModal[]> {
    return this.http.get<PicModal[]>(this.catPicsUrl).pipe(
      tap(_ => console.log('fetched PicModals')),
      catchError(this.handleError<PicModal[]>('getPics', []))
    );
  }

  /** GET Pic by id. Will 404 if id not found */
  getPic(id: string): Observable<PicModal> {
    const url = this.catPicsUrl + '/' + id;
    console.log('URL', url);
    return this.http.get<PicModal>(url).pipe(
      tap(_ => this.log(`fetched cat pic id=${id}`)),
      catchError(this.handleError<PicModal>(`Failed to getCatPic with id=${id}`))
    );
  }

  updatePic(pic: PicModal): Observable<PicModal> {
    const url = `${this.catPicsUrl}/${pic.id}`;
    return this.http.put<PicModal>(this.catPicsUrl, pic, this.httpOptions).pipe(
      map(() => pic),
      catchError(this.handleError)
    );
  }

  /** POST: add a new Pic to the server */
  addPic(PicModal: PicModal): Observable<PicModal> {
    return this.http.post<PicModal>(this.catPicsUrl, PicModal, this.httpOptions).pipe(
      tap((newPicture: PicModal) => this.log(`added Pic w/ id=${newPicture.id}`)),
      catchError(this.handleError<PicModal>('addPic'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  private log(message: string) {
    console.log('From CATPICSSERVICE:', message);
  }
}
