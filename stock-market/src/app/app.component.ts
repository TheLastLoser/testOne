import { Component, ViewEncapsulation } from '@angular/core';
import { Stock } from 'app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'stock-market';

  public stock: Stock;

  ngOnInit(): void {
    this.stock = new Stock('Test Stock company', 'Tsc', 85, 80);
  }

  onToggleFavorite(stock: Stock) {
    console.log('stock ', stock, ' triggered');
    this.stock.favorite = !this.stock.favorite;
  }
}
