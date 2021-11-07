function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log("Fn");
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("AF");
}