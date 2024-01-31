
function Navbar() {



  return (
    <>
     <div className='w-full bg-[#d04040] text-white flex justify-center py-4 '>
          <div className="container flex justify-between text-lg">
            
             <h1>Farmacia</h1>


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
            <a className='hover:underline self-center'>Categoria</a>
              <a className='hover:underline self-center'>Cadastrar Categoria</a>
             
              
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar

