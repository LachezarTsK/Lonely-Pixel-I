
public class Solution {

    private static final char WHITE_PIXEL = 'W';
    private static final char BLACK_PIXEL = 'B';

    public int findLonelyPixel(char[][] picture) {
        int[] frquencyRows = new int[picture.length];
        int[] frquencyColumns = new int[picture[0].length];
        countFrequencyOfBlackPixels(picture, frquencyRows, frquencyColumns);
        return countNumberOfLonelyBlackPixels(picture, frquencyRows, frquencyColumns);
    }

    private void countFrequencyOfBlackPixels(char[][] picture, int[] frquencyRows, int[] frquencyColumns) {
        for (int r = 0; r < picture.length; ++r) {
            for (int c = 0; c < picture[0].length; ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frquencyRows[r];
                    ++frquencyColumns[c];
                }
            }
        }
    }

    private int countNumberOfLonelyBlackPixels(char[][] picture, int[] frquencyRows, int[] frquencyColumns) {
        int numberOfLonelyBlackPixels = 0;
        for (int r = 0; r < picture.length; ++r) {
            for (int c = 0; c < picture[0].length; ++c) {
                if (picture[r][c] == BLACK_PIXEL && frquencyRows[r] == 1 && frquencyColumns[c] == 1) {
                    ++numberOfLonelyBlackPixels;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }
}
