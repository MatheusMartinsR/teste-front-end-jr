import PaymentMethods from '../../assets/PaymentMethods.png'
import Facebook from '../../assets/Facebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Youtube from '../../assets/Youtube.svg'
import Group831 from '../../assets/Group831.svg'


export default function Footer() {
  return (
    <div>
    <div className="bg-gray-900 flex items-center px-24 gap-60 py-16">
      <div className="flex justify-start gap-20">
        <div className="flex flex-col mx-24 gap-6 text-zinc-100 w-36">
          <h2 className="font-bold">Sobre Nós</h2>
          <div className="flex flex-col gap-4 text-xs w-36">
            <p>CONHEÇA</p>
            <p>COMO COMPRAR</p>
            <p>INDICAÇÃO E DESCONTO</p>
          </div>
          <div className="flex item-center gap-8 mt-10">
          <img src={Facebook}/>
          <img src={Instagram}/>
          <img src={Youtube}/>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-xs w-36 text-zinc-100">
          <h2 className="font-bold">INFORMAÇÕES ÚTEIS</h2>
          <div className="flex flex-col gap-4 text-xs w-40">
            <p>FALE CONOSCO</p>
            <p>DÚVIDAS</p>
            <p>PRAZOS DE ENTREGA</p>
            <p>FORMA DE PAGAMENTO</p>
            <p>POLÍTICAS DE PRIVACIDADE</p>
            <p>TROCAS E DEVOLUÇÕES</p>
          </div>
        </div>
        <div className="text-zinc-100 flex flex-col gap-6">
          <h2 className="font-bold">FORMAS DE PAGAMENTO</h2>
          <img src={PaymentMethods} alt="formas de pagamento" className="w-48 h-36" />
        </div>
      </div>
      <div className="w-92 h-64 p-8 bg-white flex flex-col items-center justify-center gap-4 rounded-md">
        <div className="text-lg">
          <h2 className="w-80text-zinc-700">CADASTRE-SE E RECEBA NOSSAS</h2>
          <strong className="text-zinc-800 font-bold text-xl">
            NOVIDADES E PROMOÇÕES
          </strong>
        </div>
        <p className="w-80 text-center text-zinc-500">
          Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
          lorem ipsum
        </p>
        <div className="mt-6">
          <input type="text" placeholder="SEU E-MAIL" className="border border-zinc-900 py-2 w-56 h-10 px-6 rounded-md" />
          <button className="mx-2 w-16 h-10 bg-pink-600 text-zinc-100 rounded-md">
            <strong>OK</strong>
          </button>
        </div>
      </div>
    </div> 
    <div className="flex item-center justify-between px-20 bg-gray-900 border-t">
      <p className="uppercase w-[750px] text-xs my-6 text-zinc-100">
      Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
      </p>
      <img src={Group831}/>
    </div>
    </div>
  )
}
