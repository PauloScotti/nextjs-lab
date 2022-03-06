/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import { useRouter } from "next/router";

export default function comAutorizacao(Componente){

    const estaLogado = true;
    const router = useRouter();
    
    return (props) => {
        if(estaLogado){
            return <Componente {...props} />
        }

        router.push('/login');
    }
}