export interface IProduct {
    _id: string
    name: string
    description: string
    price: number
    image: string
    sizes: {
        name: string
        price: number
    }[]
    toppings: {
        name: string
        price: number
    }[]
    category: string
    isVegetarian: boolean
    isVegan: boolean
    isSpicy: boolean
    rating: number
    numReviews: number
    reviews: {
        name: string
        rating: number
        comment: string
        user: string
    }[]
    createdAt: Date
    updatedAt: Date
}
