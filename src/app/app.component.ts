import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

interface product {
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

  ngOnInit(){
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
        money:  70000
      },
    ]
  }


  renderName(name: string){
    console.log('renderName')
    let r = (Math.random() + 1).toString(36).substring(7);
    return name;
  }

  renderQuantity(qty: number){
    console.log('renderQuantity')
    return qty;
  }

  click(id: number){
    this.products.map(item => {
      if (item.id == id){
        item.quantity = item.quantity + 1
      }
    })
  }
}
