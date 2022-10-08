
public class Solution {

    private static final char WHITE_PIXEL = 'W';
    private static final char BLACK_PIXEL = 'B';

    public int findLonelyPixel(char[][] picture) {
        int[] frequencyRows = new int[picture.length];
        int[] frequencyColumns = new int[picture[0].length];
        countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns);
        return countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns);
    }

    private void countFrequencyOfBlackPixels(char[][] picture, int[] frequencyRows, int[] frequencyColumns) {
        for (int r = 0; r < picture.length; ++r) {
            for (int c = 0; c < picture[0].length; ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frequencyRows[r];
                    ++frequencyColumns[c];
                }
            }
        }
    }

    private int countNumberOfLonelyBlackPixels(char[][] picture, int[] frequencyRows, int[] frequencyColumns) {
        int numberOfLonelyBlackPixels = 0;
        for (int r = 0; r < picture.length; ++r) {
            for (int c = 0; c < picture[0].length; ++c) {
                if (picture[r][c] == BLACK_PIXEL && frequencyRows[r] == 1 && frequencyColumns[c] == 1) {
                    ++numberOfLonelyBlackPixels;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }
}
