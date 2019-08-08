/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default (page?: string) => {
    const url  = page? browser.options.baseUrl + page : browser.options.baseUrl;
    browser.url(url);
};
