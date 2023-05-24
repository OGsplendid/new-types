import Buyable from "./Buyable";

export default class Cart {
  items: Buyable[] = [];

  add(item: Buyable): void {
    this.items.push(item);
  }
  
  getAll(): Buyable[] {
    return [...this.items];
  }

  countAll(): number {
    return this.items.reduce((acc: number, item: Buyable) => acc += item.price, 0);
  }

  countAllWithDiscount(discount: number): number {
    const allItemsPrice = this.countAll();
    return allItemsPrice * (1 - discount / 100);
  }

  delete(id: number): void {
    this.items = this.items.filter((item: Buyable) => item.id !== id);
  }
}
