import React from 'react'
import Produtos from '../../assets/Products.png'

export default function Partners() {
  const divStyled = {
    backgroundImage: `url(${Produtos})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '574px',
    height: '320px',
    borderRadius: '8px',
  }

  return (
    <div className="mx-20 my-12 flex items-center gap-24">
      <div
        style={divStyled}
        className="rounded-md flex flex-col justify-center"
      >
        <div className="px-10 mt-20">
          <h2 className="text-4xl text-zinc-100">
            <strong>Parceiros</strong>
          </h2>
          <p className="text-zinc-100 mt-2 w-48">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <button className="mt-8 w-32 h-12 bg-pink-600 text-zinc-100 rounded-md">
            <strong>CONFIRA</strong>
          </button>
        </div>
      </div>
      <div
        style={divStyled}
        className="rounded-md flex flex-col justify-center"
      >
        <div className="px-10 mt-20">
          <h2 className="text-4xl text-zinc-100">
            <strong>Parceiros</strong>
          </h2>
          <p className="text-zinc-100 mt-2 w-48">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <button className="mt-8 w-32 h-12 bg-pink-600 text-zinc-100 rounded-md">
            CONFIRA
          </button>
        </div>
      </div>
    </div>
  )
}
