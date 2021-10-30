export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
}

export let ListaDestacadas:Array<Noticias>=[
  { id:1,
    idCategoria:1,
    titulo:"EL GRAN LEBOWSKY",
    autor:"autor 1",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "El gran Lebowski (titulada originalmente en inglés The Big Lebowski) es una película cómica estadounidense de 1998 escrita, producida y dirigida por los hermanos Coen. Jeff Bridges interpreta a Jeffrey Lebowski, un jugador de bolos desempleado de Los Ángeles, quien se hace llamar «The Dude» (también conocido como «El Nota» o «El Fino»)"
  },
  { id:2,
    idCategoria:2,
    titulo:"BLADE RUNNER",
    autor:"autor 2",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "Blade Runner (también conocida como El cazador implacable en algunos países de Hispanoamérica) es una película neo-noir y de ciencia ficción estadounidense dirigida por Ridley Scott, estrenada en 1982. Fue escrita por Hampton Fancher y David Webb Peoples, y el reparto se compone de Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos, M. Emmet Walsh, Daryl Hannah, William Sanderson, Brion James, Joe Turkel y Joanna Cassidy."
  },
  { id:3,
    idCategoria:3,
    titulo:"LA VIDA DE BRYAN",
    autor:"autor 3",
    fecha:Date().toString(),
    imagen:"imagen1.png",
    texto: "La vida de Brian (título original: Life of Brian; 1979) es el tercer largometraje del grupo de comedia inglés Monty Python. Trata la historia de un judío que nace el mismo día que Jesucristo y ya de adulto es varias veces confundido con él. Con canciones clásicas de los Python como «Always Look On The Bright Side Of Life» (Mira siempre el lado positivo de la vida), cantada por un coro de crucificados, la película es, junto con Los caballeros de la mesa cuadrada y El sentido de la vida una de las más exitosas de Monty Python."
  },

]

export let ListaNoticias:Array<Noticias>=[
{ id:11,
  idCategoria:1,
  titulo:"MEMENTO",
  autor:"Christopher Nolan",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Memento (también conocida como Amnesia) es una película estadounidense de suspenso del año 2000, dirigida por Christopher Nolan y protagonizada por Guy Pearce, Carrie-Anne Moss y Joe Pantoliano."
},

{ id:12,
    idCategoria:2,
    titulo:"Being John Malkovich",
    autor:"Spike Jonze",
    fecha:Date().toString(),
    imagen:"imagen2.png",
    texto: "Being John Malkovich (titulada Cómo ser John Malkovich en España y ¿Quieres ser John Malkovich? en América) es una película estadounidense de cine independiente realizada en 1999 por el director Spike Jonze"
},

{ id:13,
  idCategoria:3,
  titulo:"RUSH",
  autor:"Ron Howard",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Rush (titulada: Rush, pasión y gloria en Hispanoamérica) es una película de acción estadounidense de 2013, dirigida por Ron Howard, escrita por Peter Morgan y protagonizada por los actores Chris Hemsworth1​ y Daniel Brühl,"
},

{ id:14,
  idCategoria:4,
  titulo:"AKIRA",
  autor:"Katsuhiro Otomo",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Akira, es una película de anime post-apocalíptica dirigida por Katsuhiro Otomo estrenada el 16 de julio de 1988 en Japón. Es una adaptación del manga homónimo creado por el mismo Otomo y coescrita con ayuda de Izo Hashimoto."
},

{ id:15,
  idCategoria:5,
  titulo:"  THE ENDLESS SUMMER",
  autor:"Bruce Brown",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "La joya de la corona de los documentales de surf. Brown sigue a dos jóvenes surfistas por todo el mundo en busca de la ola perfecta, y termina por encontrar un buen número, además de algunos coloridos personajes locales. "
},

{ id:16,
  idCategoria:6,
  titulo:"MAD MAX",
  autor:" George Miller",
  fecha:Date().toString(),
  imagen:"imagen1.png",
  texto: "Mad Max es una película australiana de acción-policíaca de 1979 escrita y dirigida por George Miller y protagonizada por Mel Gibson"
},
];
