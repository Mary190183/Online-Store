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
