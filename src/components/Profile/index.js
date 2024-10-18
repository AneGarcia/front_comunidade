import styles from "./styles.module.css"
export default function Profile({foto, nome}){
    return(
        <>
            <img 
                src={
                    foto ??
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmbH5tdsn9PFu68Ibkg31vYCYzEBwuFHomQ&s"
                } 
                alt="Imagem"
                className={styles.imagem}
            />
            <p>{nome ?? "Teste"}</p>
        </>
    );
}