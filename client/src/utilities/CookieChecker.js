export default class CookieChecker {
    exists(name) {
        const regex = new RegExp("^(.*;)?\\s*" + name + "\\s*=\\s*[^;]+(.*)?$");
        return document.cookie.match(regex);
    }
}