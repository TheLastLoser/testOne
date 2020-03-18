import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StockItemComponent implements OnInit {

  @Input() public stocks: Array<Stock>;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() { this.toggleFavorite = new EventEmitter<Stock>(); }

  ngOnInit(): void {
  }

  // toggleFavorite(event, i) {
  //   console.log('stock number ', i + 1);
  //   this.stocks[i].favorite = !this.stocks[i].favorite;
  // }

  onToggleFavorite(event, i) {
    this.toggleFavorite.emit(this.stocks[i]);
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }

  changeStockPrice(index: number) {
    this.stocks[index].price += 5;
  }
}
