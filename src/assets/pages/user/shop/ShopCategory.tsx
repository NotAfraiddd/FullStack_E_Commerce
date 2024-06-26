import React, { useContext } from 'react'
import { InterfaceShopCategory } from './InterfaceShopCategory'
import './Shop.css'
import { ShopContext } from '@context/ShopContext'
import { dropdown_icon } from '@images/index'
import Item from '@components/Item/Item'
import { InterfaceItem } from '@components/Item/InterfaceShopCategory'
export default function ShopCategory({ category, banner }: InterfaceShopCategory) {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={banner} alt='' className='block px-10 md:px-16 lg:px-24 xl:px-32 my-7 w-full' />
      <div className='shop-category__index-sort flex xl:mx-44 mx-10 justify-between items-center flex-wrap gap-1'>
        <div className='break-words'>
          <span className='font-semibold'>Show 1-12</span> out of 36 products
        </div>
        <div className='shop-category__sort flex justify-between items-center rounded-[40px] px-5 gap-2 py-2 border border-[#888]'>
          <span>Sort by </span>
          <img src={dropdown_icon} alt='' className='h-5 w-5' />
        </div>
      </div>
      <div className='shop-category__products my-10 xl:mx-32 mx-10 gap-5 justify-items-center grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {all_product.map((item: InterfaceItem) => {
          if (category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          }
          return null
        })}
      </div>
      <div className='shop-category___load-more flex justify-center items-center my-[150px] mx-auto w-60 text-lg font-medium h-16 text-[#787878] rounded-[75px] bg-[#ededed]'>
        Explore More
      </div>
    </div>
  )
}
