import { useSelector } from "react-redux";
import ShowTablePanCyrillic from "./ShowTablePanCyrillic";
import ShowTablePanCyrillicTxt from "./ShowTablePanCyrillicTxt";

const PanCyrillicTable = ({ simple }) => {
    const alltable = useSelector(state => state.alltable);
    const panCyrSort = useSelector(state => state.panCyrSort);
    const selectedLangs = useSelector(state => state.selectedLangs);
    const rus = useSelector(state => state.rus);
    const langListNames = useSelector(state => state.langListNames);
    const currentLang = useSelector(state => state.currentLang);


    function getLanguagesTitle() {
        let langName = '';
        if (currentLang) {
            if (!rus) langName = currentLang;
            else {
                langListNames?.forEach(lng => {
                    if (lng.name_eng === currentLang) langName = lng.name_rus;
                });
            }
        }

        let langNames = '';
        if (selectedLangs.length) {
            if (!rus) {
                langNames = selectedLangs.join(', ')
            }
            else {
                let tmp = [];
                langListNames?.forEach(lng => {
                    selectedLangs?.forEach(nm => {
                        if (lng.name_eng === nm) tmp.push(lng.name_rus);
                    });
                });
                langNames = tmp.join(', ')
            }
        }
        if (langNames) return langNames
        else return langName
    }

    if (!simple)
        return (<>
            <ShowTablePanCyrillic
                signsupper={panCyrSort ? alltable.uppercase_unicodes_list : alltable.uppercase_sorted_by_unicodes}
                signslower={panCyrSort ? alltable.lowercase_unicodes_list : alltable.lowercase_sorted_by_unicodes}
                title={getLanguagesTitle()}
                showUni />
        </>)
    else return (
        <ShowTablePanCyrillicTxt
            signsupper={panCyrSort ? alltable.uppercase_unicodes_list : alltable.uppercase_sorted_by_unicodes}
            signslower={panCyrSort ? alltable.lowercase_unicodes_list : alltable.lowercase_sorted_by_unicodes}
            title={getLanguagesTitle()}
            showUni />
    )

};

export default PanCyrillicTable;