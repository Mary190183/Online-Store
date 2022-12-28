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
        amount: 1,
      },
      {
        id: 3,
        productId: 18,
        amount: 1,
      },
    ];
  }

  public get items() {
    return this._items;
  }

  public deleteItemById(id: number) {
    this._items = this._items.filter((item) => item.id !== id);
  }
}

export default CartModel;
