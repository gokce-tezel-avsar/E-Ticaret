import { AlignJustify, Search, ShoppingCart, UserRound } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div>
        <h3>Bandage</h3>
        <UserRound />
        <Search />
        <ShoppingCart />
        <AlignJustify strokeWidth={1} />
    </div>
  )
}

export default Header