import CartModel from "../models/cart-model";

class CartController {
  private _renderView: RenderView<CartModel>;
  private _model: CartModel;

  public constructor(renderView: RenderView<CartModel>, model: CartModel) {
    this._renderView = renderView;
    this._model = model;
  }

  public updateView() {
    document.body.innerHTML = this._renderView(this._model);
  }

  public deleteCartItem(id: number) {
    this._model.deleteItemById(id);
    this.updateView();
  }
}

export default CartController;
