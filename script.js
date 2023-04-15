const formularioUsuarios = document.querySelector("#formularioUsuarios") 
    const contenedorHTML1 = document.querySelector(".contenedorUsuarios") 
    const usuarios = [] 
    const renderizarUsuarios = () =>{ 
        contenedorHTML.innerHTML1 = "" 
        for(const usuario of usuarios){ 
            contenedorHTML1.innerHTML += ` 
            <div class="card-user"> 
                <p>Nombreyapellido: ${usuario.nombreyapellido}</p> 
                <p>Email: ${usuario.email}</p> 
                <p>Telefono: ${usuario.telefono}</p> 
                <p>Pais: ${usuario.pais}</p> 
                <p>Mensaje: ${usuario.mensaje}</p> 
            </div> 
            ` 
        } 
    } 

    formularioUsuarios.addEventListener("submit", (event) =>{ 
        event.preventDefault() 
        console.log(formularioUsuarios.pais.value) 
        usuarios.push({ 
            formularioUsuarios:addEventListener("submit", (event) =>{ 
                event.preventDefault() 
                console.log(formularioUsuarios.pais.value) 
                usuarios.push({ 
                    nombreyapellido: formularioUsuarios.nombreyapellido.value, 
                    email: formularioUsuarios.email.value, 
                    telefono: formularioUsuarios.telefono.value, 
                    pais: formularioUsuarios.pais.value, 
                    mensaje: formularioUsuarios.mensaje.value, 
        })
        renderizarUsuarios()
    })
/* Un array es una lista de elementos (y cada elemento puede ser cualquier dato) */
/* const usuarios = [{}, {}, {}] */