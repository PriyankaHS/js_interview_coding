// Given a set of positive integers and a target sum, determine if there exists a subset of the integers that adds up to the target sum.

function twoSumm(nums, target) {
    let map = new Map();
    let pairs = [];

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            pairs.push([map.get(complement), i]);
        }
        map.set(nums[i], i);
    }

    return pairs;
}

const numss = [3, 4, 5, 2, 6, 3];
const targett = 9;
console.log(twoSumm(numss, targett));
