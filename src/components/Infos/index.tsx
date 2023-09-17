import React from 'react'
import ShieldCheck from '../../assets/ShieldCheck.svg'
import Truck from '../../assets/Truck.svg'
import CreditCard from '../../assets/CreditCard.svg'

export default function Infos() {
  return (
    <div className="mx-20 flex items-center justify-between px-64 border-b border-gray-200 h-8 py-1">
      <div className="text-gray-600 flex items-center gap-2">
        <img
          src={ShieldCheck}
          alt="imagem de um escudo com um simbola de certo"
          className="h-5 w-5"
        />{' '}
        <div>
          <h1>
            Compra <span className="text-pink-700">100% segura</span>
          </h1>
        </div>
      </div>
      <div className="text-gray-600 flex items-center  gap-2">
        <img src={Truck} alt="imagem de um caminhão" className="h-5 w-5" />{' '}
        <span className="text-pink-700">Frete grátis</span> acima de R$200
      </div>
      <div className="text-gray-600 flex items-center  gap-2">
        <img
          src={CreditCard}
          alt="imagem de um cartão de crédito"
          className="h-5 w-5"
        />{' '}
        <span className="text-pink-700 text-align:center">Parcele </span> suas
        compras
      </div>
    </div>
  )
}
