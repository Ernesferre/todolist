import {useState } from "react";
import {Button} from "react-bootstrap";


const Create = () => {

const handleWork = (e) => {
    const {name,value} = e.target;
    setWork ({
        ...work,
        [name] : value

    })
        
}

const initialState = {
    id: "",
    work: "",
    state: false,
};

const [ work, setWork ] = useState(initialState);

    return ( 
        <>
            <h3> Crear Tarea </h3>
            <input type="text" name="work" value={work.work}  onChange={handleWork} />
            <Button variant="primary" block>
                Agregar Tarea
            </Button>
        </>
     );
}
 
export default Create;