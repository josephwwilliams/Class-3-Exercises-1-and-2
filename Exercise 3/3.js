function seperate (baseObj) {
    const values = [];
    const keys = Object.keys(baseObj).sort();
    for (let key of keys) {
        values.push(baseObj[key])};
    console.log(keys, values);
    }
seperate({ b: 2,a: 1, c: 3 });