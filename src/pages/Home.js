import "../styles.css"
import KerfusImages from './kerfusImages';
import GeneratePicsBajur from "./badgerImages";

/* Cursor parking space
      
   
    
*/

export default function Home() {
    return (
    <div>
        <div>
            <h1 className="h1_text_glow">bajur shrine</h1>
        </div>
        <div>
            <GeneratePicsBajur/>
        </div>
        <div>
            <h1 className="h1_text_glow">kerfus shrine</h1>
        </div>
        <div>
            <KerfusImages />
        </div>
    </div>
    )
}