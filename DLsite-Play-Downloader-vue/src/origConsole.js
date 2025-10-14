const c = window.console;

export const origConsole = (() => {
    return {
        log: c.log.bind(c),
        warn: c.warn.bind(c),
        info: c.info.bind(c),
        error: c.error.bind(c),
        debug: c.debug.bind(c),
    };
})();
