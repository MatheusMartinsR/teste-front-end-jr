export interface ICard {
  id: number
  img: string | any
  title: string
  originalPrice: string
  priceWithDiscount: string
  paymentOption: string
}

export default function Card({
  id,
  img,
  originalPrice,
  paymentOption,
  priceWithDiscount,
  title,
}: ICard) {
  return (
    <div
      key={id}
      className="flex flex-col gap-4 items-center justify-center shadow shadow-gray-400"
    >
      <div className="flex items-center justify-center w-64 h-60">{img}</div>
      <div className="flex flex-col px-4 gap-2">
        <h3>{title}</h3>
        <p className="text-zinc-400">{originalPrice}</p>
        <p>{priceWithDiscount}</p>
        <p>{paymentOption}</p>
        <p className="text-pink-700">Frete grátis</p>
      </div>
      <button className="w-64 h-11 bg-pink-600 text-zinc-100 rounded-md mb-8">
        Comprar
      </button>
    </div>
  )
}
