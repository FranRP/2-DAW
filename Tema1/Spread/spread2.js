var onlyUniques = (...args) => {
    let ret = [];
    for (let i = 0; i < args.length; i++) if (!ret.includes(args[i])) ret.push(args[i]);
    return ret;
};


onlyUniques(1,2,3,2);