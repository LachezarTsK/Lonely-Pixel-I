
/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
    this.WHITE_PIXEL = 'W';
    this.BLACK_PIXEL = 'B';
    this.frequencyRows = new Array(picture.length).fill(0);
    this.frequencyColumns = new Array(picture[0].length).fill(0);

    countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns);
    return countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns);
};

/**
 * @param {character[][]} picture
 * @param {number[]} frequencyRows 
 * @param {number[]} frequencyColumns
 * @return {void}
 */
function countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns) {
    for (let r = 0; r < picture.length; ++r) {
        for (let c = 0; c < picture[0].length; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL) {
                ++frequencyRows[r];
                ++frequencyColumns[c];
            }
        }
    }
}

/**
 * @param {character[][]} picture
 * @param {number[]} frequencyRows 
 * @param {number[]} frequencyColumns
 * @return {number}
 */
function countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns) {
    let numberOfLonelyBlackPixels = 0;
    for (let r = 0; r < picture.length; ++r) {
        for (let c = 0; c < picture[0].length; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL && frequencyRows[r] === 1 && frequencyColumns[c] === 1) {
                ++numberOfLonelyBlackPixels;
            }
        }
    }
    return numberOfLonelyBlackPixels;
}
