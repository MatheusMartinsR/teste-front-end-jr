export default function Menu() {
  interface IItens {
    id: number
    title: string
  }

  const itens: IItens[] = [
    {
      id: 1,
      title: 'CELULAR',
    },
    {
      id: 2,
      title: 'ACESSÓRIOS',
    },
    {
      id: 3,
      title: 'TABLETS',
    },
    {
      id: 4,
      title: 'NOTEBOOKS',
    },
    {
      id: 5,
      title: 'TVS',
    },
    {
      id: 6,
      title: 'VER TODOS',
    },
  ]

  return (
    <div className="mx-20 flex">
      {itens.map((item) => {
        return (
          <div
            key={item.id}
            className="w-48 h-10 flex items-center justify-center border border-solid border-zinc-500"
          >
            <h2>{item.title}</h2>
          </div>
        )
      })}
    </div>
  )
}
