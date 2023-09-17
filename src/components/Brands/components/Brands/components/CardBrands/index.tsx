export interface ICardBrand {
  id: number
  img: string | any
}

export default function CardBrands({ id, img }: ICardBrand) {
  return (
    <div
      key={id}
      className="w-48 h-48 rounded-full shadow shadow-zinc-400 flex items-center justify-center"
    >
      {img}
    </div>
  )
}
