import {Pipe, PipeTransform} from '@angular/core';
import {product} from "./app.component";

type FieldsPipe = 'name' | 'quantity';

@Pipe({
  name: 'productPipe',
  pure: false
})
export class PosAddProductPipe implements PipeTransform {
  item!: product;

  transform(item: product, field: FieldsPipe) {
    this.item = item;

    switch (field) {
      case 'name':
        return this.infoName();
      case 'quantity':
        return this.quantity();
    }
  }

  infoName(){
    console.log('renderName')
    let r = (Math.random() + 1).toString(36).substring(7);
    return this.item.name;
  }

  quantity(){
    console.log('renderQuantity')
    return this.item.quantity;
  }
}

