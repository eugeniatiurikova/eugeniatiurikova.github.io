import SingleLetterPancyrillic from "./SingleLetterPancyrillic";
import { v4 as uuidv4 } from 'uuid';

const PanCyrillicLetters = ({ alpahabet, title }) => {

    if (alpahabet && alpahabet[0]) {

        return (<>
            {title && (<p className='smalltitle'>{title}</p>)}
            <div className='flexcontainer'>
                {alpahabet?.map(item => {
                    return (
                        <SingleLetterPancyrillic oneletter={item} key={uuidv4()} />
                    )
                })}
            </div>
        </>)

    }
    else {
        return (<></>)
    }

};

export default PanCyrillicLetters;