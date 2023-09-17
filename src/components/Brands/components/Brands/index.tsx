import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import LogoBrand from '../../../../assets/LogoBrand.png'
import CardBrands, { ICardBrand } from './components/CardBrands'

const itemsCard: ICardBrand[] = [
  {
    id: 1,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
  {
    id: 2,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
  {
    id: 3,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
  {
    id: 4,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
  {
    id: 5,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
  {
    id: 6,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
  {
    id: 7,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
  {
    id: 8,
    img: <img src={LogoBrand} alt="Logo" className="w-40 h-16" />,
  },
]

const items = itemsCard.map((item) => (
  <div key={item.id} style={{ padding: '10px 10px' }}>
    <CardBrands id={item.id} img={item.img} />
  </div>
))

const responsive = {
  320: { items: 2 },
  780: { items: 3 },
  1100: { items: 4 },
  1300: { items: 5 },
}

export default function BrandsComponent() {
  return (
    <div className="mx-20 mt-12">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  )
}
