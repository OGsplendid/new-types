import Buyable2 from './Buyable2';

export default class Laptop implements Buyable2 {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly quantity: number,
    readonly countable: boolean,
  ) {
    
  }
}
