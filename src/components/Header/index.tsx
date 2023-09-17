import Group35 from '../../assets/Group35.svg'
import Group from '../../assets/Group.svg'
import Heart from '../../assets/Heart.svg'
import UserCircle from '../../assets/UserCircle.svg'
import ShoppingCart from '../../assets/ShoppingCart.svg'
import MagnifyingGlass from '../../assets/MagnifyingGlass.svg'

export default function Header() {
  return (
    <div className="mx-36 flex items-center gap-8 my-3">
      <img src={Group35} alt="simbolo do site" className="h-12 w-36" />{' '}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="O que você está buscando?"
          className="h-12 w-[675px] bg-[#F6F5F2] rounded-md px-6"
        />
        <img
          src={MagnifyingGlass}
          alt="imagem de uma lupa"
          className="w-7 h-7 mx-[-36px] right-0"
        />
      </div>
      <div className="flex items-center gap-8 ml-9">
        <img src={Group} alt="Imagem de uma caixa" className="h-6 w-6" />{' '}
        <img src={Heart} alt="Imagem de um coração" className="h-6 w-6" />{' '}
        <img src={UserCircle} alt="Imagem de um usuário" className="h-6 w-6" />{' '}
        <img
          src={ShoppingCart}
          alt="Imagem de um carrinho de compras"
          className="h-6 w-6"
        />
      </div>
    </div>
  )
}
