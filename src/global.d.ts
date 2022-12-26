interface CartItemProps {
  image: string;
  sort: string;
  province: string;
  price: number;
  index: number;
}

interface CartProps {
  currentIndex: number[];
}

type RenderView<T> = (model: T) => string;
