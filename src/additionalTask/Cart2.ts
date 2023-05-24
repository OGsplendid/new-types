import Buyable2 from "./Buyable2";

export default class Cart2 {
  items: Buyable2[] = [];

  add(item: Buyable2): void {
    if (!this.items.find(el => el.id === item.id)) {
      this.items.push(item);
    }
    if (item.countable) {
      item.quantity += 1;
    }
  }
  
  getAll(): Buyable2[] {
    return [...this.items];
  }

  countAll(): number {
    return this.items.reduce((acc: number, item: Buyable2) => acc += item.price * item.quantity, 0);
  }

  countAllWithDiscount(discount: number): number {
    const allItemsPrice = this.countAll();
    return allItemsPrice * (1 - discount / 100);
  }

  delete(id: number): void {
    let deletedEl = this.items.find(el => el.id === id);
    if (deletedEl && deletedEl.countable && deletedEl.quantity > 1) {
      deletedEl.quantity -= 1;
    } else {
      this.items = this.items.filter((item: Buyable2) => item.id !== id);
    }
  }
}
