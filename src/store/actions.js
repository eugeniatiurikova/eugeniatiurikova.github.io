
export const addSelectedLand = (langName) => ({
    type: 'addSelectedLang',
    payload: langName,
});

export const deleteSelectedLand = (langName) => ({
    type: 'deleteSelectedLang',
    payload: langName,
});