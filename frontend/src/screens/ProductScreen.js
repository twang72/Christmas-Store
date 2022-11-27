import { useParams } from "react-router-dom";


function ProductScreen(){
    //Get the slug from URL and use it for this screen.
    const params = useParams();
    const {slug} = params;
    return <div>
        <h1>{slug}</h1>
    </div>
}

export default ProductScreen;