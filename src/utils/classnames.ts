export const cn = (...args: string[]) => {
    return args
        .filter(s => !!s)
        .join(' ')
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace(/\s+/g, ' ')
        .trim();
};
