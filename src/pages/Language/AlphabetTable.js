import ShowTable from "./ShowTable";
import ShowTableTxt from "./ShowTableTxt";
import { useSelector } from "react-redux";

const AlphabetTable = ({ simple }) => {
    const allsigns = useSelector(state => state.allsigns);

    return (<>
        {allsigns?.glyphs_list?.map(set => {
            if (!simple) return (
                <ShowTable signsupper={set.uppercase} signslower={set.lowercase} title={set.title} showUni={set.show_unicodes} />
            )
            else return (
                <ShowTableTxt signsupper={set.uppercase} signslower={set.lowercase} title={set.title} showUni={set.show_unicodes} />
            )
        })}
    </>)

};

export default AlphabetTable;