import listBuys from "../list-buys";

class CartModel {
  private _items: CartItem[];

  public constructor() {
    this._items = [
      {
        id: 1,
        productId: 1,
        amount: 1,
      },
      {
        id: 2,
        productId: 7,
        amount: 2,
      },
      {
        id: 3,
        productId: 18,
        amount: 3,
      },
    ];
  }

  public get items() {
    return this._items;
  }

  public get totalPrice() {
    let sum = 0;
    this._items.forEach((item) => {
      const product = listBuys.find((prod) => prod.id === item.productId);
      if (product) {
        sum += product.price * item.amount;
      } else {
        sum += 0;
      }
    });
    return sum;
  }

  public get totalAmount() {
    let sumAmount = 0;
    this._items.forEach((item) => {
      sumAmount += item.amount;
    });
    return sumAmount;
  }

  public deleteItemById(id: number) {
    this._items = this._items.filter((item) => item.id !== id);
  }

  public updateAmountById(id: number, amount: number) {
    this._items.forEach((item) => {
      if (item.id === id) {
        item.amount = amount;
      }
    });
  }
}

export default CartModel;
