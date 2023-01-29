const initialState = {
    langListNames: [],
    allsigns: null,
    language: {},
    alltable: null,
    rus: 0,
    upcase: true,
    serif: false,
    italic: true,
    locallang: "ru",
    mobMenu: false,
    panCyrSort: true,
    currentLang: null, // Выбранный язык для стр. Languages
    selectedLangs: [], // Массив выбранных языков для стр. Pan-cyrillic
    highlightedLang: null, // Языки, к-рые подсвечиваются при наведении на букву
    highlightedSelect: { languages: null, id: '' }, // Яз. выбранные при нажатии на букву
    currentPage: null // 1-Pancyrillic, 2-Alphabet, 3-About, 4- Definitions
}


export const switchersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setLangListNames':
            return { ...state, langListNames: action.payload };
        case 'setLanguage':
            return { ...state, language: action.payload };
        case 'setAllSigns':
            return { ...state, allsigns: action.payload };
        case 'setAllTable':
            return { ...state, alltable: action.payload };
        case 'toggleRuEn':
            return { ...state, rus: action.payload };
        case 'toggleCase':
            return { ...state, upcase: !state.upcase };
        case 'toggleSerif':
            return { ...state, serif: !state.serif };
        case 'toggleItalic':
            return { ...state, italic: !state.italic };
        case 'switchLang':
            return { ...state, locallang: action.payload };
        case 'switchCurrentLang':
            return { ...state, currentLang: action.payload };
        case 'switchHighlightedLang':
            return { ...state, highlightedLang: action.payload };
        case 'selectHighlights':
            return { ...state, highlightedSelect: action.payload };
        case 'switchPage':
            return { ...state, currentPage: action.payload };
        case 'switchPanCyrSort':
            return { ...state, panCyrSort: !state.panCyrSort };
        case 'toggleMobMenu':
            return { ...state, mobMenu: action.payload };
        case 'setSelectedLangs':
            return { ...state, selectedLangs: action.payload };
        case 'addSelectedLang':
            return { ...state, selectedLangs: [...state.selectedLangs, action.payload] };
        case 'deleteSelectedLang':
            return { ...state, selectedLangs: state.selectedLangs.filter((lang) => lang !== action.payload) };
        default: return state
    }
}