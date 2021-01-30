export default class UrlJoin {
    constructor(base, paths) {
        this.base = base;
        this.paths = paths.slice();
    }

    join() {
        const separator = '/';
        const replace = new RegExp(separator + '{1,}', 'g');
        const base = this.base + (this.base[this.base.length - 1] === '/' ? '' : '/');
        return base + this.paths.join(separator).replace(replace, separator);
    }
}