import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"

function Navbar() {



  return (
    <>
     <div className='w-full bg-[#d04040] text-white flex justify-center py-4 '>
          <div className="container flex justify-between text-lg">
            
            <div className='w-1/5'>
              <Link to='/home' className='text-2xl  font-bold uppercase'>
                <img src={logo} alt="" className='' /></Link>
            </div>

                         <form className=" w-1/2 flex flex-col gap-4 self-center">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Pesquisar"
            name='descricao'    
            className="border-2  rounded-md b p-2"
          />
        </div>
        

      </form>

            <div className='flex gap-4'>
            <div className='hover:underline self-center'>Produtos</div>
            <Link to="/categorias" className='hover:underline self-center'>Categorias</Link>
              <Link to="/cadastroCategoria" className='hover:underline self-center'>Cadastrar Categoria</Link>
             
              
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar

