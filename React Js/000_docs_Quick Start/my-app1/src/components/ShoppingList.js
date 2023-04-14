import React from 'react'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
]

const ShoppingList = () => {
    const listItmes = products.map((product) => 
        <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
            {product.title}
        </li>
    )


  return (
    <div>
        <ul>{listItmes}</ul>
    </div>
  )
}

export default ShoppingList