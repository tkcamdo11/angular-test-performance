import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface product {
  id: number,
  name: string,
  quantity: number,
  money: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'my-app';
  products!: product[];

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'quần đùi',
        quantity: 1,
        money: 30000
      },
      {
        id: 2,
        name: 'sản phẩm 2',
        quantity: 2,
        money: 70000
      },
    ]
  }

  trackById(index: number, item: product) {
    return item.id;
  }
  click(id: number) {
    this.products.map(item => {
      if (item.id == id) {
        item.quantity = item.quantity + 1
      }
    })
    this.products = [...this.products];
  }
}
