export const getBaseName = () => {
    const selector = document?.querySelector('base');
    const baseHref = selector?.getAttribute('href') || '';
    return baseHref.replace(/\$/, '');
};
