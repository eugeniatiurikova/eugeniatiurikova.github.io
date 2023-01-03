
import { useSelector } from "react-redux";
import Legend from "../Legend";
import PanCyrillicLetters from "./PanCyrillicLetters";
import PanCyrillicHelp from "./../content/PanCyrillicHelp";
import SelectedLanguagesList from "./SelectedLanguagesList";


const PanCyrillic = () => {
    const upcase = useSelector(state => state.upcase);
    const panCyrSort = useSelector(state => state.panCyrSort);
    const alltable = useSelector(state => state.alltable);

    return (<>
        <PanCyrillicHelp />
        <Legend showSort showhelp showtable />
        <SelectedLanguagesList />
        <div className={`lettersblock${panCyrSort ? '' : ' hidden'}`}>
            <div className={`lettersblock${upcase ? '' : ' hidden'}`}>
                <div className='flexcontainer'>
                    <PanCyrillicLetters alpahabet={alltable?.uppercase_unicodes_list} />
                </div>
            </div>
            <div className={`lettersblock${!upcase ? '' : ' hidden'}`}>
                <div className='flexcontainer'>
                    <PanCyrillicLetters alpahabet={alltable?.lowercase_unicodes_list} />
                </div>
            </div>
        </div>
        <div className={`lettersblock${!panCyrSort ? '' : ' hidden'}`}>
            <div className={`lettersblock${upcase ? '' : ' hidden'}`}>
                <div className='flexcontainer'>
                    <PanCyrillicLetters alpahabet={alltable?.uppercase_sorted_by_unicodes} />
                </div>
            </div>
            <div className={`lettersblock${!upcase ? '' : ' hidden'}`}>
                <div className='flexcontainer'>
                    <PanCyrillicLetters alpahabet={alltable?.lowercase_sorted_by_unicodes} />
                </div>
            </div>
        </div>
    </>)

};

export default PanCyrillic;