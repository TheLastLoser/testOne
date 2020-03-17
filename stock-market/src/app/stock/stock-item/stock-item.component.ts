import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stocks: Array<Stock>;
  public priceStyles;

  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() { this.toggleFavorite = new EventEmitter<Stock>(); }

  ngOnInit(): void {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 84.99),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765),
    ];
  }

  // toggleFavorite(event, i) {
  //   console.log('stock number ', i + 1);
  //   this.stocks[i].favorite = !this.stocks[i].favorite;
  // }

  onToggleFavorite(event) {
    this.toggleFavorite.emit(this.stock);
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }
}
