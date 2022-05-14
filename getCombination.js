 const getCombination = function (arr, r) {
    const result = [];
    if (r === 1) return arr.map((e) => [e]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combination = getCombination(rest, r-1);
      const attached = combination.map((e) => [fixed, ...e]);
      result.push(...attached);
    });

    return result;
}
