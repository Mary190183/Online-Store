interface Product {
  id: number;
  name: string;
  sort: string;
  province: string;
  description: string;
  image1: string;
  image2: string;
  image3?: string;
  amount: number;
  price: number;
}

interface CartItemProps {
  image: string;
  sort: string;
  province: string;
  price: number;
  id: number;
  amount: number;
}

interface CartProps {
  currentIndex: number[];
}

type RenderView<T> = (model: T) => string;

interface CartItem {
  id: number;
  productId: number;
  amount: number;
}

interface HeaderProps {
  totalPrice: number;
  totalAmount: number;
}
