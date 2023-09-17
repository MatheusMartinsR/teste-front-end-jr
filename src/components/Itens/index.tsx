import React, { useState } from 'react'

import monitor from '../../assets/monitor.svg'
import supermercado from '../../assets/supermercados 1.svg'
import bebidas from '../../assets/whiskey.svg'
import ferramentas from '../../assets/ferramentas 1.svg'
import saude from '../../assets/cuidados-de-saude 1.svg'
import fitness from '../../assets/corrida 1.svg'
import moda from '../../assets/moda 1.svg'

interface IItens {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any
  title: string
}

const info: IItens[] = [
  {
    id: 1,
    img: <img src={monitor} alt="computador" className="w-16 h-16" />,
    title: 'Tecnologia',
  },
  {
    id: 2,
    img: <img src={supermercado} alt="computador" className="w-16 h-16" />,
    title: 'Supermercado',
  },
  {
    id: 3,
    img: <img src={bebidas} alt="computador" className="w-16 h-16" />,
    title: 'Bebidas',
  },
  {
    id: 4,
    img: <img src={ferramentas} alt="computador" className="w-16 h-16" />,
    title: 'Ferramentas',
  },
  {
    id: 5,
    img: <img src={saude} alt="computador" className="w-16 h-16" />,
    title: 'Saúde',
  },
  {
    id: 6,
    img: <img src={fitness} alt="computador" className="w-16 h-16" />,
    title: 'Esporte e Fitness',
  },
  {
    id: 7,
    img: <img src={moda} alt="computador" className="w-16 h-16" />,
    title: 'Moda',
  },
]

export default function Itens() {
  return (
    <div className="mx-20 mt-8 flex items-center justify-center gap-12">
      {info.map((itens) => {
        return (
          <div
            key={itens.id}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="w-32 h-32 shadow shadow-gray-400 flex items-center justify-center">
              {itens.img}
            </div>
            <h3
              className={` ${
                itens.id === 1 ? 'text-pink-700' : 'text-gray-600'
              } text-base `}
            >
              {itens.title}
            </h3>
          </div>
        )
      })}
    </div>
  )
}
