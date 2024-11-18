import styles from "./styles.module.css";

export default function CardLoja({loja}) {
    return (
        <div className={styles.container}>
            <p>{loja.nome}</p>
            <span>{loja.endereco}</span>
            <button type="button" className={styles.btnEditar}>Editar</button>
            <button type="button" className={styles.btnExcluir}>Excluir</button>
        </div>
    );
}