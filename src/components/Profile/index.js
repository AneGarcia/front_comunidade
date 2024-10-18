export default function Profile({foto, nome}){
    return(
        <>
            <img src={foto} alt="Katherine Johnson" />
            <p>{nome}</p>
        </>
    );
}