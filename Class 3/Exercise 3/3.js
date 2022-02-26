function seperate (baseObj) {
    const values = [];
    const keys = Object.keys(baseObj).sort();
    for (let key of keys) {
        values.push(baseObj[key])};
    console.log(keys, values);
    }
seperate({ a: "Apple", c: "Microsoft", b: "Google" });