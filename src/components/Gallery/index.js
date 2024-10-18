import Profile from "../Profile";

export default function Gallery(){
    return(
        <>
            <h1>Amazing scientists</h1>
            <Profile 
                nome={"Pato"} 
                foto={"https://inaturalist-open-data.s3.amazonaws.com/photos/175267007/original.jpg"} 
            />
            <Profile 
                nome={"IFSul"} 
                foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmbH5tdsn9PFu68Ibkg31vYCYzEBwuFHomQ&s"} 
            />
            
        </>
    );
}