import HeroBG from '../../assets/HeroBG.png'

export default function Hero() {
  const divStyled = {
    backgroundImage: `url(${HeroBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '384px',
  }

  return (
    <div style={divStyled} className="px-20 flex flex-col justify-center h-96">
      <h2 className="text-5xl w-2/4 text-zinc-100">
        {' '}
        Venha conhecer nossas promoções
      </h2>
      <p className="text-4xl mt-4 text-zinc-100">50% Off nos produtos </p>
      <button className="w-56 h-12 bg-pink-600 text-zinc-100 rounded-md mt-8">
        <strong>Ver produto</strong>
      </button>
    </div>
  )
}
