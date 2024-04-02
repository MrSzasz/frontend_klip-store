interface Product {
  quantity: number
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface Rating {
  rate: number
  count: number
}

interface Cart {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  quantity: number
}
