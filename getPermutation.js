const getPermutation = function (arr, r) {
    const result = [];
    if (r === 1) return arr.map((e) => [e]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
      const permutation = getPermutation(rest, r - 1);
      const attached = permutation.map((e) => [fixed, ...e]);
      result.push(...attached);
    });

    return result;
}
