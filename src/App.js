import { useEffect, useState } from "react";
import "./css/App.css";

const mock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
    url: "https://rickandmortyapi.com/api/character/1",

    created: "2017-11-04T18:48:46.250Z",
  },
];

function App() {
  const [conteudo, setConteudo] = useState(<></>);


  function traduzirStatus(status){
    switch(status) {
      case 'Alive':
        return 'Vivo'
        case 'unknown':
          return 'Desconhecido' 
          case 'Death':
            return 'Morto'    
        default:  
          return status
  }
  }

  function traduzirgender(gender){
    switch(gender) {
      case 'Male':
        return 'Masculino'
        case 'Female':
          return 'Feminino'  
        default:  
          return gender
  }
  }

  function traduzirspecie(species){
    switch(species) {
      case 'Human':
        return 'Humano'
        case 'alien':
          return 'Aliem'  
        default:  
          return species
  }
  }
  

  async function carregarTodosOsPersonagens() {
    const retorno = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
    }).then((response) => response.json());

    console.log(retorno);

    return retorno.results;
  }

  async function listaPersonagem() {
    const todosPersonagens = await carregarTodosOsPersonagens();

    return todosPersonagens.map((personagem) => (
      <div className="card char">
        <img src={personagem.image} alt={personagem.name} />
        <h2>{personagem.name}</h2>
       <b>Especies: {traduzirspecie(personagem.species)}</b>  
       <p></p>
       <b>Genero: {traduzirgender(personagem.gender)}</b>
        <p className="lista-secundaria">
          <b>Participaçoes:</b>{" "}
          {personagem.episode.map(ep => (

            <span key={personagem.name+(ep.split('episode/')[1])}>
              Ep-{(ep.split('episode/')[1])}
            </span>
          ))}

        </p>
        <b>Status: {traduzirStatus(personagem.status)}</b>
      </div>
    ));
  }

  useEffect(() => {
    async function carregar() {
      setConteudo(await listaPersonagem());
    }
    carregar();
  }, []);

  return (
    <div className="App">
      <header className="cabecalho">
        <div className='filtros'>



        </div>
        <h1>Rick and Morty API</h1>
      </header>
      <div className="lista-principal">{conteudo}</div>
    </div>
  );
}

export default App;







































/*import { useEffect, useState } from "react";
import "./css/App.css";

const mock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
    url: "https://rickandmortyapi.com/api/character/1",

    created: "2017-11-04T18:48:46.250Z",
  },
];

function App() {
  const [conteudo, setConteudo] = useState(<>oi</>);

  function traduzirStatus(status) {
    switch (status) {
      case "Alive":
        return "Vivo"
      case "unknown":
        return "Desconhecido"
      case "Death":
        return "Morto"
      default:
        return status;
    }
  }
  function traduzirGender(gender) {
    switch (gender) {
      case "Male":
        return "Masculino"
      case "Female":
        return "Feminino"
      default:
        return gender;
    }
  }

  function traduzirSpecies(species) {
    switch (gender) {
      case "Human":
        return "Humano"
      case "Alien":
        return "Extraterrestre"
      default:
        return species;
    }
  }

  async function carregarTodosOsPersonagens() {
    const retorno = await fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
    }).then((response) => response.json());

    console.log(retorno);

    return retorno.results;
  }

  async function listaPersonagem() {
    const todosPersonagens = await carregarTodosOsPersonagens();

    return todosPersonagens.map((personagem) => (
      <div className="card char">
        <img src={personagem.image} alt={personagem.name} />
        <h2>{personagem.name}</h2>
        <p>Especies: {personagem.species}</p>
        <p>Genero: {personagem.gender}</p>
        <p className="lista-secundaria">
          <b>Participaçoes:</b>{" "}
          {personagem.episode.map((ep) => (
            <span key={personagem.name + ep.split("episode/")[1]}>
              Ep-{ep.split("episode/")[1]}
            </span>
          ))}
        </p>
        <b>Status: {traduzirStatus(personagem.status)}</b>
        <b>{traduzirSpecies(personagem.species)}</b>
        <b>{traduzirGender(personagem.gender)}</b>
      </div>
    ));
  }

  useEffect(() => {
    async function carregar() {
      setConteudo(await listaPersonagem());
    }
    carregar();
  }, []);

  return (
    <div className="App">
      <header className="cabecalho">
        <div className="filtros"></div>
        <h1>Rick and Morty API</h1>
      </header>
      <div className="lista-principal">{conteudo}</div>
    </div>
  );
}

export default App;
*/