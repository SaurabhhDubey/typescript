function getchai(kind: string | number) {
    if(typeof kind === 'string'){
        return `making ${kind} chai...`;
    }
    return `chai order: ${kind}`;
}
