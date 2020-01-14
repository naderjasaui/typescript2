interface Pedido
{
    nombre : string
    cantidad : number
}

class Cliente
{
    realizarPedido (mozo : Mozo, pedido: Pedido)
    {
        mozo.recibirPedido(pedido)
    }
}

class Mozo
{
    recibirPedido(pedido : Pedido) : void
    {
        console.log("se ha recibido el pedido")
    }
}

let main = () => {
    let pepito = new Cliente()
    let mozo : Mozo = new Mozo()
    let pedido : Pedido = {
        nombre: "ceviche",
        cantidad: 2
    }

    pepito.realizarPedido(mozo, pedido)
}

main()