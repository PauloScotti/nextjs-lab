import { useState } from "react";
import Pessoa from "../components/pessoa";

export default function Home() {

  const [idadeDouglas, setIdadeDouglas] = useState(15);
  const pessoas = [
    {
      nomePessoa: 'Cleiton',
      idadePessoa: 28
    },
    {
      nomePessoa: 'Glau',
      idadePessoa: 25
    },
    {
      nomePessoa: 'Paulo',
      idadePessoa: 30
    }
  ];

  const incrementaIdadeDouglas = () => {
    setIdadeDouglas(++idadeDouglas);
  }

  return (
    <>
      <h1>Olá Mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
      <Pessoa nome='Douglas' idade={idadeDouglas}/>
      <Pessoa nome='Paulo' idade={38}/>

      {pessoas.map(({ nomePessoa, idadePessoa}, index) => {
        return <Pessoa 
          nome={nomePessoa}
          idade={idadePessoa}
          key={index}
        />
      } )}

      <button onClick={incrementaIdadeDouglas}>Incrementa idade do Douglas</button>
    </>
  )
}
