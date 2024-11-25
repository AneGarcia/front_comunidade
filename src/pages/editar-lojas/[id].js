import { useEffect, useState } from "react"
import api from "@/services/api";
import { useRouter } from "next/router";

export default function EditarLoja(){
    const router = useRouter();
    const [loja, setLoja] = useState({})
    const [ _id, setId ] = useState(0);

    const getLoja = (id) => {
        api
            .get(`lojas/${id}`)
            .then((res) => {
                setLoja(res.data);
            })
            .catch((err) => alert("Erro ao recuperar dados da loja"));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nome, endereco, foto} = e.target;
        var lojaSalvar = {
            nome: nome.value,
            endereco: endereco.value,
        };

        api
            .put(`/lojas/${_id}`, lojaSalvar)
            .then((res) => {
                alert("Loja editada com sucesso!" );
                router.push("/listagem-lojas" );
            })
            .catch((err) => {
                alert("Erro ao editar a loja!" );
                alert(err?.response?.data?.message ?? err.message);
            });
    };

    useEffect(() => {
        const _id = Number(router.query.id);
        if (!isNaN(_id)){
            getLoja(_id);
            setId(_id);
        }
    }, []);

    return(
        <>
            <h3>Formulário de Edição de Lojas</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" name="nome" defaultValue={loja.nome} /> <br/>
                <label htmlFor="endereco">Endereço: </label>
                <input type="text" id="enderecoo" name="endereco" defaultValue={loja.endereco}/><br/>
                <label htmlFor="foto">Foto: </label>
                <input type="file" id="foto" name="foto"/><br/>
                <button type="submit">Salvar</button>
            </form>
        </>
    )
}