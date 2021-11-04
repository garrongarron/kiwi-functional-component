
const download = (fileContent) => {
    const blob = new Blob([fileContent], { type: 'text/html' });
    const a = document.createElement('a');
    a.setAttribute('download', fileName);
    a.setAttribute('href', window.URL.createObjectURL(blob));
    a.click();
}

export default download;
