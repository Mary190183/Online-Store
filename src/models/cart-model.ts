import listBuys from "../list-buys";

class CartModel {
  private _items: CartItem[];
  public page: number;
  public limitItems: number;
  public promo: string[];

  public constructor() {
    this._items = [
      {
        id: 1,
        productId: 1,
        stock: 1,
      },
      {
        id: 2,
        productId: 7,
        stock: 2,
      },
      {
        id: 3,
        productId: 18,
        stock: 3,
      },
      {
        id: 4,
        productId: 10,
        stock: 3,
      },
    ];
    this.page = 1;
    this.limitItems = 2;
    this.promo = [];
  }

  public get items() {
    return this._items.slice((this.page - 1) * this.limitItems, this.page * this.limitItems);
  }

  public get totalPrice() {
    let sum = 0;
    this._items.forEach((item) => {
      const product = listBuys.find((prod) => prod.id === item.productId);
      if (product) {
        sum += product.price * item.stock;
      } else {
        sum += 0;
      }
    });
    return sum;
  }

  public get totalAmount() {
    let sumAmount = 0;
    this._items.forEach((item) => {
      sumAmount += item.stock;
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
        item.stock = amount;
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
  public updatePromoById(promo: string) {
    if (this.promo.includes(promo)) {
      this.promo;
    } else {
      if (promo === "RS" || promo === "EPM") {
        this.promo.push(promo);
      }
    }
  }

  public deletePromoById() {
    this.promo = this.promo.filter((item) => item !== "RS");
  }
}

export default CartModel;
