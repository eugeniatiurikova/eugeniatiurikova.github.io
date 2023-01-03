import { useSelector } from "react-redux";
import ShowTablePanCyrillic from "./ShowTablePanCyrillic";
import ShowTablePanCyrillicTxt from "./ShowTablePanCyrillicTxt";

const PanCyrillicTable = ({ simple }) => {
    const alltable = useSelector(state => state.alltable);
    const panCyrSort = useSelector(state => state.panCyrSort);
    const selectedLangs = useSelector(state => state.selectedLangs);
    const currentLang = useSelector(state => state.currentLang);

    if (!simple)
        return (
            <ShowTablePanCyrillic
                signsupper={panCyrSort ? alltable.uppercase_unicodes_list : alltable.uppercase_sorted_by_unicodes}
                signslower={panCyrSort ? alltable.lowercase_unicodes_list : alltable.lowercase_sorted_by_unicodes}
                title={(selectedLangs.length != 0) ? selectedLangs.join(', ') : currentLang}
                showUni />
        )
    else return (
        <ShowTablePanCyrillicTxt
            signsupper={panCyrSort ? alltable.uppercase_unicodes_list : alltable.uppercase_sorted_by_unicodes}
            signslower={panCyrSort ? alltable.lowercase_unicodes_list : alltable.lowercase_sorted_by_unicodes}
            title={(selectedLangs.length != 0) ? selectedLangs.join(', ') : currentLang}
            showUni />
    )

};

export default PanCyrillicTable;