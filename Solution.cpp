
#include <vector>
using namespace std;

class Solution {
    
    inline static const char WHITE_PIXEL = 'W';
    inline static const char BLACK_PIXEL = 'B';

public:
    int findLonelyPixel(vector<vector<char>>&picture) {
        vector<int> frequencyRows(picture.size());
        vector<int> frequencyColumns(picture[0].size());
        countFrequencyOfBlackPixels(picture, frequencyRows, frequencyColumns);
        return countNumberOfLonelyBlackPixels(picture, frequencyRows, frequencyColumns);
    }

private:
    void countFrequencyOfBlackPixels(const vector<vector<char>>&picture, vector<int>& frequencyRows, vector<int>& frequencyColumns) const {
        for (int r = 0; r < picture.size(); ++r) {
            for (int c = 0; c < picture[0].size(); ++c) {
                if (picture[r][c] == BLACK_PIXEL) {
                    ++frequencyRows[r];
                    ++frequencyColumns[c];
                }
            }
        }
    }

    int countNumberOfLonelyBlackPixels(const vector<vector<char>>&picture, const vector<int>& frequencyRows, const vector<int>& frequencyColumns) const {
        int numberOfLonelyBlackPixels = 0;
        for (int r = 0; r < picture.size(); ++r) {
            for (int c = 0; c < picture[0].size(); ++c) {
                if (picture[r][c] == BLACK_PIXEL && frequencyRows[r] == 1 && frequencyColumns[c] == 1) {
                    ++numberOfLonelyBlackPixels;
                }
            }
        }
        return numberOfLonelyBlackPixels;
    }
};
