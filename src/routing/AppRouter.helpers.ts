/**
 * Sets up path which will be used in AppRouter component
 * @returns formatted url path ready to be injected into AppRouter component
 */
export const getBaseName = () => {
    const selector = document?.querySelector('base');
    const baseHref = selector?.getAttribute('href') || '';
    return baseHref.replace(/\$/, '');
};
