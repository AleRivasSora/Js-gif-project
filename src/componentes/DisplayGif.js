import { useApi } from "../hooks/useApi";
import { ImageItem } from "./ImageItem";

export const DisplayGif = ({category}) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cBjAzz0NyVpNr64FzWFtm0jo7GmiEteV&q=${category}&limit=10`;

    const {loading,data} = useApi(url);

    return(
        <div className="container-gifs">
            
            <br />
            {
                loading ? 
                data.map(img =>(
                    <ImageItem key={img.id}
                    title={img.title}
                    url={img.images.downsized_medium.url}/>
                ))
                : ''
            }
            
            
        </div>
    );
}