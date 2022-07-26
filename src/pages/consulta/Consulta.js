import '/home/rener/Dev/PROJETOS/nunbank/website/nunbank/src/pages/consulta/Consulta.css'
function Consulta(){
    return(
        <div className='consulta'>   
            <div className='container-left'>
             <div className="title">Complete os campos ao lado para pedir sua Conta e Cartão de crédito</div>
             <div className='icon-cartão'> <img src='https://nubank.com.br/_next/static/images/c3633ee7439ce2783c16834d170bf4f9-phone-and-card@1x.png.webp' ></img></div>
            </div>
           
           <div className='container-right'>
                
                <div className='btn-x'>X</div>
                <div className='input-form'>
                    <label for="User1">CPF</label>
                    <input className='input-card' type="text" id="User1" required  />
                    <label for="User2">Nome Completo</label>
                    <input className='input-card' type="text" id="User2" required />
                    <label for="User3">Celular</label>
                    <input className='input-card' type="tel" id="User3"  required />
                    <label for="User4">E-mail</label>
                    <input className='input-card' type="email" id="User4"  required />
                    <label for="User5">Confirmação de e-mail</label>
                    <input className='input-card' type="email" id="User5"  required  />
                </div>
                
                <div className='checkbox-form'>
                    <label class="container"> Aceito receber comunicações do nubank por WhatsApp.
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                    </label> 
                
                    <label class="container">Eu li, estou ciente das condições de tratamento dos meus dados pessoais e dou meu consentimento,quando aplicavel, conforme descrito nesta Politica de Privacidade.
                         <input type="radio" name="radio"/>
                         <span class="checkmark"></span>
                    </label>
                        
                </div>

                <div className='btn-submit'>Continar </div>

                
            </div>
           

            
        </div>


    )
}

export default Consulta;