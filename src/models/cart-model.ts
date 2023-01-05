import listBuys from "../list-buys";

class CartModel {
  private _items: CartItem[];
  public page: number;
  public limitItems: number;

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
      {
        id: 4,
        productId: 10,
        amount: 3,
      },
    ];
    this.page = 1;
    this.limitItems = 2;
  }

  public get items() {
    return this._items.slice((this.page - 1) * this.limitItems, this.page * this.limitItems);
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

    if (this.items.length === 0 && this.page > 1) {
      this.page -= 1;
    }
  }

  public updateAmountById(id: number, amount: number) {
    if (amount === 0) {
      this.deleteItemById(id);
      return;
    }
    this._items.forEach((item) => {
      if (item.id === id) {
        item.amount = amount;
      }
    });
  }

  public updateLimitItemsOnPage(limitItems: number) {
    this.limitItems = limitItems;
    this.page = 1;
  }

  public onclickRightPageNumber() {
    if (this._items.length - 1 < this.page * this.limitItems) {
      this.page;
    } else {
      this.page = this.page + 1;
    }
  }

  public onclickLeftPageNumber() {
    if (this.page - 1 === 0) {
      this.page = 1;
    } else {
      this.page = this.page - 1;
    }
  }
}

export default CartModel;
