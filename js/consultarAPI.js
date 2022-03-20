//fetch sirve para hacer una peticion a una API
const fetchPokemon = () => {
    const pokeName=document.getElementById("pokeName");//coloca nombre del Id del input
    let pokeInput=pokeName.value.toLowerCase();//value es lo que tiene dentro el Input
    
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status!="200"){
            console.log(res);
            pokeImage("src/sad-pikachu.gif")//imagen de picachu llorando
        }else{
            return res.json();
        }

    }).then((data) => {
        //--------imagen del pokemon
        let pokeImg = data.sprites.front_default;//sprites es un objeto
        //--------NOMBRE del pokemon
        let name =data.species.name; 
        //--------Tipo del pokemon
        let tipo =data.types; 
        let tama=data.types.length;    
        //--------Moviviento del pokemon
        let mov=data.moves;
        let movs=data.moves.length;
        //--------Estadisticas
        let est=data.stats;
        let ests=data.stats.length;
        //--------mandar a llamar a las const 
        pokeImage(pokeImg);//cambiar imagen
        pokeNombre(name);//ver nombre
        console.log(data);
        pokeTipo(tipo,tama);
        pokeMov(mov,movs);
        pokeEst(est,ests);
    });
}

const pokeImage=(url) =>{
    //imagen del pokemon
    const pokeImg=document.getElementById("pokeImg");
    pokeImg.src=url;//va cambiar src a lo que contenga url
};
const pokeNombre=(nom) =>{
    const pokeNombre=document.getElementById("pokeNam");//el id de la etiqueta <p> donde se va visualizar el nombre
    pokeNombre.innerHTML=nom;
};
const pokeTipo=(tip,tama)=>{//mostrar los tipos de pokemon
    const pokeTipo=document.getElementById("pokeTip");
    var res="";
    for(let i=0;i<tama;i++){
        res+=tip[i].type.name+" - ";
    }
    pokeTipo.innerHTML=res;
};
const pokeMov=(mov,movs)=>{
    const pokeMov=document.getElementById("pokeMov");
    var res="";
    for(let i=0;i<10;i++){
        res+=mov[i].move.name+" - ";
    }
    pokeMov.innerHTML=res;
};
const pokeEst=(est)=>{
    const pokeEst=document.getElementById("pokeEst");
    var res=" ";
    let hp=est[0].base_stat;    
    let attack=est[1].base_stat;    
    let defense=est[2].base_stat;    
    res="HP: "+hp+"<br>ATTACK: "+attack+"<br>DEFENSE: "+defense+"<br>LIFE: "+hp;
    pokeEst.innerHTML=res;
};
