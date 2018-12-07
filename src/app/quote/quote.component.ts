import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../model/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  public quote: Quote = new Quote('', '');

  constructor(
    private quoteService: QuoteService,
  ) {
    this.getQuote();
  }

  ngOnInit() {
    console.log(this.quote);
  }

  public getQuote() {
    this.quoteService.getRandomQuote().subscribe(data => {
      this.quote = data.json();
      console.log(this.quote.quote);
    });
  }

}
