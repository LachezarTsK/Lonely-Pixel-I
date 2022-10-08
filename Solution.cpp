
#include <vector>
using namespace std;

class Solution {
    
    inline static const char WHITE_PIXEL = 'W';
    inline static const char BLACK_PIXEL = 'B';

public:
    int findLonelyPixel(vector<vector<char>>&picture) {
        vector<int> frquencyRows(picture.size());
        vector<int> frquencyColumns(picture[0].size());
        countFrequencyOfBlackPixels(picture, frquencyRows, frquencyColumns);
        return countNumberOfLonelyBlackPixels(picture, frquencyRows, frquencyColumns);
    }

private:
    void countFrequencyOfBlackPixels(const vector<vector<char>>&picture, vector<int>& frquencyRows, vector<int>& frquencyColumns) const {
        for (int r = 0; r < picture.size(); ++r) {
            for (int c = 0; c < picture[0].size(); ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frquencyRows[r];
                    ++frquencyColumns[c];
                }
            }
        }
    }

    int countNumberOfLonelyBlackPixels(const vector<vector<char>>&picture, const vector<int>& frquencyRows, const vector<int>& frquencyColumns) const {
        int numberOfLonelyBlackPixels = 0;
        for (int r = 0; r < picture.size(); ++r) {
            for (int c = 0; c < picture[0].size(); ++c) {
                if (picture[r][c] == BLACK_PIXEL && frquencyRows[r] == 1 && frquencyColumns[c] == 1) {
                    ++numberOfLonelyBlackPixels;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }
};
