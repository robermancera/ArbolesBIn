class Nodo
{
    constructor(dato)
    {
        this.dato = dato
        this.hIzq = null
        this.hDer = null
    }
    
    set Dato(valor) 
    {
        this.dato = valor
    }

    set HIzq(valor)
    {
        this.hIzq = valor
    }

    set HDer(valor)
    {
        this.hDer = valor
    }

    get Dato()
    {
       return this.dato
    }


    get HIzq(){
        return this.hIzq
    }

    get HDer(){
        return this.hDer
    }
}

class arbolBinario
{
    constructor()
    {
        this.raiz = null
    }

    agregar(nuevo)
    {
        if(this.raiz === null)
        {
            this.raiz = nuevo
        }
        else
        this.agregate(nuevo, this.raiz)
    }

    agregate(n, r)
    {
        if(n.Dato < r.Dato)
        {
            if(r.HIzq === null)
            {
                r.HIzq = n
            }
            else
            this.agregate(n,r.HIzq)
        }
        else
            if(r.HDer === null)
            {
                r.HDer = n
            }
            else
            this.agregate(n,r.hDer)
    }

    inO(){
        if(this.raiz === null){
            return "";
        }
        else
        {
            return this.InO(this.raiz)
        }
    }
    InO(r)
    {
        let cad = ''
        if(r.HIzq != null)
        {
            cad = this.InO(r.HIzq) + ","
        }
            cad += r.dato
        if (r.HDer != null) 
        {
            cad += ',' + this.InO(r.HDer)
        }
        return cad
    }

    search(dato){
        if(this.raiz == null){
            return false
        }
        else
        return this.buscar(dato,this.raiz)
    }

    buscar(dato, raiz)
    {
        if(raiz == null)
        {
            return false
        }
        else
        if(raiz.dato == dato)
        {
            return true
        }
        else
        if(dato < raiz.dato){
            return this.buscar(dato, raiz.HIzq)
        }
        else
        return this.buscar(dato, raiz.HDer)
    }
}

