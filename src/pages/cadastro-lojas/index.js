import { useState } from "react"
import api from "@/services/api";
import { useRouter } from "next/router";

export default function CadastroLoja(){
    const router = useRouter();
    const [loja, setLoja] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nome, endereco, foto} = e.target;
        var lojaSalvar = {
            nome: nome.value,
            endereco: endereco.value,
        };

        api
            .post("/lojas/", lojaSalvar)
            .then((res) => {
                alert("Loja salva com sucesso!" );
                router.push("/listagem-lojas" );
            })
            .catch((err) => {
                alert("Erro ao salvar a loja!" );
                alert(err?.response?.data?.message ?? err.message);
            });
    };

    return(
        <>
            <h3>Formulário de Cadastro de Lojas</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome"/> <br/>
                <label htmlFor="endereco">Endereço: </label>
                <input type="text" id="enderecoo" name="endereco"/><br/>
                <label htmlFor="foto">Foto: </label>
                <input type="file" id="foto" name="foto"/><br/>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
}