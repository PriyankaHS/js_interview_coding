function findMinimumPlatforms(arrival, departure) {
    const sortedTimes = [...arrival, ...departure].sort((a, b) => a - b);
    let platformsNeeded = 0;
    let maxPlatformsNeeded = 0;

    for (const time of sortedTimes) {
        if (arrival.includes(time)) platformsNeeded++;
        if (departure.includes(time)) platformsNeeded--;
        maxPlatformsNeeded = Math.max(maxPlatformsNeeded, platformsNeeded);
    }

    return maxPlatformsNeeded;
}

const arrival = [900, 945, 955, 1100, 1500, 1800, 1600, 1630, 1600];
const departure = [920, 1200, 1130, 1150, 1900, 2000, 1750, 1740, 1750];

const minPlatforms = findMinimumPlatforms(arrival, departure);
console.log(minPlatforms);
