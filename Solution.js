
/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
    this.WHITE_PIXEL = 'W';
    this.BLACK_PIXEL = 'B';
    this.frquencyRows = new Array(picture.length).fill(0);
    this.frquencyColumns = new Array(picture[0].length).fill(0);

    countFrequencyOfBlackPixels(picture, frquencyRows, frquencyColumns);
    return countNumberOfLonelyBlackPixels(picture, frquencyRows, frquencyColumns);
};

/**
 * @param {character[][]} picture
 * @param {number[]} frquencyRows 
 * @param {number[]} frquencyColumns
 * @return {void}
 */
function countFrequencyOfBlackPixels(picture, frquencyRows, frquencyColumns) {
    for (let r = 0; r < picture.length; ++r) {
        for (let c = 0; c < picture[0].length; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL) {
                ++frquencyRows[r];
                ++frquencyColumns[c];
            }
        }
    }
}

/**
 * @param {character[][]} picture
 * @param {number[]} frquencyRows 
 * @param {number[]} frquencyColumns
 * @return {number}
 */
function countNumberOfLonelyBlackPixels(picture, frquencyRows, frquencyColumns) {
    let numberOfLonelyBlackPixels = 0;
    for (let r = 0; r < picture.length; ++r) {
        for (let c = 0; c < picture[0].length; ++c) {
            if (picture[r][c] === this.BLACK_PIXEL && frquencyRows[r] === 1 && frquencyColumns[c] === 1) {
                ++numberOfLonelyBlackPixels;
            }
        }
    }
    return numberOfLonelyBlackPixels;
}
