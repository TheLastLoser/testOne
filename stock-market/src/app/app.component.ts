import { Component, ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'stock-market';

  public stocks: Array<Stock>;

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 0),
      new Stock('Second Stock Company', 'SSC', 10, 20, 1),
      new Stock('Last Stock Company', 'LSC', 876, 765, 2),
    ];
  }

  onToggleFavorite(stock: Stock) {
    console.log('stock ', stock, ' triggered');
    this.stocks[stock.index].favorite = !this.stocks[stock.index].favorite;
  }

  onInsidePrice(stock: Stock) {
    this.stocks.price += 100;
  }

  changeStockObject() {
    console.log(this.stocks);
    this.stocks = [];
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < 21; i++) {
      let newName = '';
      for(var j = 0; j < 3; j++) {
        newName += chars[Math.round(Math.random()*25)];
      }
      this.stocks.push(new Stock('Random Stock ' + i, newName, Math.round(Math.random()*1000 + 1), Math.round(Math.random()*1000), i));
    }
  }

  changeStockPrice() {
    console.log(this.stocks);
    this.stocks[0].price += 100;
  }
}
