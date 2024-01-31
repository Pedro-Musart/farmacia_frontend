import homeLogo from '../../assets/home.png';


function Home() {
    return (
        <>
        <div className="  flex justify-center border-2 border-b-[#d04040] ">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl text-[#100F0D] font-bold'>Boas Vindas!</h2>
              <p className='text-xl text-center text-[#100F0D]'>Encontre aqui os melhores produtos para sua saúde!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded-md border-[#d04040]  bg-[#d04040] text-white-900  py-2 px-4 border-2'>Novo Produto</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        
      </>
    );
}

export default Home;