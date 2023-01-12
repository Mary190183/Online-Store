import CartModel from "../models/cart-model";

class CartController {
  private _renderView: RenderView<CartModel>;
  private _model: CartModel;

  public constructor(renderView: RenderView<CartModel>, model: CartModel) {
    this._renderView = renderView;
    this._model = model;

    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("limit")) {
      this._model.limitItems = Number(searchParams.get("limit"));
    }
    if (searchParams.has("page")) {
      this._model.page = Number(searchParams.get("page"));
    }
  }

  public updateView() {
    document.body.innerHTML = this._renderView(this._model);

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", String(this._model.limitItems));
    searchParams.set("page", String(this._model.page));
    const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
    history.pushState(null, "", newRelativePathQuery);
  }

  public deleteCartItem(id: number) {
    this._model.deleteItemById(id);
    this.updateView();
  }

  public updateAmount(id: number, event: Event) {
    this._model.updateAmountById(id, Number((event.target as HTMLInputElement).value));
    this.updateView();
  }

  public updateLimitItems(event: Event) {
    this._model.updateLimitItemsOnPage(Number((event.target as HTMLInputElement).value));
    this.updateView();
  }

  public onclickRight() {
    this._model.onclickRightPageNumber();
    this.updateView();
  }

  public onclickLeft() {
    this._model.onclickLeftPageNumber();
    this.updateView();
  }

  public updatePromo(event: Event) {
    this._model.updatePromoById((event.target as HTMLInputElement).value);
    this.updateView();
  }

  public deletePromoItem() {
    this._model.deletePromoById();
    this.updateView();
  }

  public openCheckout() {
    this._model.openCheckoutButton();
    this.updateView();
  }

  public closeCheckout() {
    this._model.closeCheckoutButton();
    this.updateView();
  }
}

 
export default CartController;
