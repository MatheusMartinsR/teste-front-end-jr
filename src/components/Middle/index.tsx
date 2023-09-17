import React from 'react'
import CrownSimple from '../../assets/CrownSimple.svg'

export default function Middle() {
  return (
    <nav>
      <ul className=" #FFFFFF #9F9F9F h-10 flex items-center justify-between mx-20 gap-12 px-1 shadow shadow-gray-400 px-12">
        <li className="text-start">Todas as categorias</li>
        <li className="text-center">Supermercado</li>
        <li className="text-center">Livros</li>
        <li className="text-center">Moda</li>
        <li className="text-center">Lançamentos</li>
        <li className="text-center">
          <span className="text-pink-700">Ofertas do dia</span>
        </li>
        <li className="text-center flex items-center gap-3">
          <img
            src={CrownSimple}
            alt="imagem de um simbolo de coroa"
            className="h-5 w-5"
          />
          Assinatura
        </li>
      </ul>
    </nav>
  )
}
