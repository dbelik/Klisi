export default class ErrorCatcher {
    async callAsync(func, catcher, final) {
        try { return await func(); } 
        catch (error) { if (catcher) catcher(error); }
        finally { if (final) final(); }
        return null;
    }
}