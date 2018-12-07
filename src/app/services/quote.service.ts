import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(public http: Http) {
    console.log('Pokrenut servis!');
  }

  public getRandomQuote() {
    return this.http.get('https://talaikis.com/api/quotes/random/');
  }
}
