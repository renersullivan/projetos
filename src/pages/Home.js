import './Home.css'
function Home(){
    return(
             
        <div className='home'>   
           <div className='logo-nubank'><img src='/home/rener/Dev/PROJETOS/nunbank/website/nunbank/public/kisspng-nubank-credit-card-financial-crisis-of-200708-brazil-png-5b19b73c3f6738.9154852715284119642597.png' alt="Logo NubanK."/></div>
           <div className="title">Cartão de crédito com anuidade zero. Conta digital prática e sem custos.</div>
           <div className='card-login'>
             <p>Com a Nubank a resposta vem em menos de 1 minuto</p>   
             <input className='input-card' type="tel" placeholder='Digite seu CPF.' />
             <div className='btn-submit'>Continar </div>
               
            </div>
           

            
        </div>


    )
}
export default Home;