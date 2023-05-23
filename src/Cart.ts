import Buyable from "./Buyable";

export default class Cart {
  private items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }
  
  getAll(): Buyable[] {
    return [...this.items];
  }

  countAll(): number {
    return this.items.reduce((acc, item) => acc += item.price);
  }

  countAllWithDiscount(discount: number): number {
    const allItemsPrice = this.countAll();
    return allItemsPrice * (1 - discount / 100);
  }

  delete(item: Buyable): void {
    let index = this.items.findIndex(item);
    this.items.splice(index, 1);
  }
}
