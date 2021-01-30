export default class ErrorCatcher {
    call(func, catcher, final) {
        try { return func(); } 
        catch (error) { if (catcher) catcher(error); }
        finally { if (final) final(); }
    }

    async callAsync(func, catcher, final) {
        try { return await func(); } 
        catch (error) { if (catcher) catcher(error); }
        finally { if (final) final(); }
    }
}