import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from "@mui/material";
import DefinitionsContent from "./DefinitionsContent";

const Definitions = (handleClick) => {

    return (<>
        <div className='tableheader'><p className='tablestitle'><span className="langtitle">Definitions</span></p><IconButton onClick={handleClick} size="small"><ClearIcon /></IconButton></div>
        <div className="tablecontainer">
            <div className="tablecontainer">
                <DefinitionsContent /></div>
        </div>
    </>)
};

export default Definitions;