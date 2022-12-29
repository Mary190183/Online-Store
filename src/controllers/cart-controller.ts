class CartController {
  renderView: RenderView<CartProps>;
  currentIndex: number[];

  constructor(renderView: RenderView<CartProps>) {
    this.renderView = renderView;
    this.currentIndex = [2, 5];
  }

  updateView() {
    document.body.innerHTML = this.renderView({ currentIndex: this.currentIndex });
  }

  deleteCartItem(index: number) {
    this.currentIndex.splice(index, 1);
    this.updateView();
  }
}

export default CartController;
