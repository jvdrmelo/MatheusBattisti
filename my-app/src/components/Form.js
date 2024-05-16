function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuáro!")
    }
    
    return(
        <div>
            <h1>Meu Cadastro:</h1> 
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" ></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div> 
            </form>
        </div>  
    )
}

export default Form