import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import Celular from '../../../../assets/Celular.svg'
import Card, { ICard } from './components/Card'
import CardsSelected from './components/CardsSelected'
import { isVisible } from '@testing-library/user-event/dist/utils'
import { useProductsOptions } from './productsOptions.hook'
import Itens from '../../../Itens'


const itemCard: ICard[] = [
  {
    id: 1,
    img: <img src={Celular} alt="Celular" />,
    title: 'Iphone 11 PRO MAX BRANCO 1',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 2,
    img: <img src={Celular} alt="Celular" />,
    title: 'IPHONE 13 MINI 1',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 3,
    img: <img src={Celular} alt="Celular" />,
    title: 'Iphone 11 PRO MAX BRANCO 2',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 4,
    img: <img src={Celular} alt="Celular" />,
    title: 'IPHONE 13 MINI 2',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 5,
    img: <img src={Celular} alt="Celular" />,
    title: 'Iphone 11 PRO MAX BRANCO 3',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 6,
    img: <img src={Celular} alt="Celular" />,
    title: 'IPHONE 13 MINI 3',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 7,
    img: <img src={Celular} alt="Celular" />,
    title: 'Iphone 11 PRO MAX BRANCO 4',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 8,
    img: <img src={Celular} alt="Celular" />,
    title: 'IPHONE 13 MINI 4',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 9,
    img: <img src={Celular} alt="Celular" />,
    title: 'Iphone 11 PRO MAX BRANCO 5',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  {
    id: 10,
    img: <img src={Celular} alt="Celular" />,
    title: 'IPHONE 13 MINI 5',
    originalPrice: 'R$ 30,90',
    priceWithDiscount: 'R$ 28,90',
    paymentOption: 'ou 2x de R$ 49,95 sem juros',
  },
  
]

const items = itemsCard.map((item) => (
  <div key={item.id} style={{ padding: '10px 10px' }}>
    <Card
      id={item.id}
      img={item.img}
      title={item.title}
      originalPrice={item.originalPrice}
      priceWithDiscount={item.priceWithDiscount}
      paymentOption={item.paymentOption}
    />
  </div>
))

const responsive = {
  320: { items: 1 },
  780: { items: 2 },
  1100: { items: 3 },
  1300: { items: 4 },
}

export default function ProdcutComponent() {
  const{actions,states} = useProductsOptions()

  return (
    <div className="mx-20 mt-4">
      <CardsSelected isModalVisible={states.isVisible} selectedCardInfo={itemCard}/>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  )
}
