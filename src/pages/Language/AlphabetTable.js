import ShowTable from "./ShowTable";
import ShowTableTxt from "./ShowTableTxt";
import { useSelector } from "react-redux";
import { DEF } from "../../service/constants";

const AlphabetTable = ({ simple }) => {
    const allsigns = useSelector(state => state.allsigns);
    const rus = useSelector(state => state.rus);

    return (<>
        {allsigns?.glyphs_list?.map(set => {
            if (!simple) return (
                <ShowTable signsupper={set.uppercase} signslower={set.lowercase} title={DEF[set.type].title[rus]} showUni={set.show_unicodes} />
            )
            else return (
                <ShowTableTxt signsupper={set.uppercase} signslower={set.lowercase} title={DEF[set.type].title[rus]} showUni={set.show_unicodes} />
            )
        })}
    </>)

};

export default AlphabetTable;