// @flow
import {Dimensions, PixelRatio} from 'react-native';

type DimensionsSchema = {
    width: number,
    height: number,
};

const {width, height}: DimensionsSchema = Dimensions.get('window');
const ratio: number = PixelRatio.getFontScale();
const idealWidth: number = 375;
const idealHeight: number = 812;

export const scaleHorizontal = (inWidth: number = 1): number => {
    const delimiter: number = idealWidth / inWidth;
    return width / delimiter;
};

export const scaleVertical = (inHeight: number = 1) => {
    const delimiter: number = idealHeight / inHeight;
    return height / delimiter;
};

export const scaleFontSize = (fontSize: number = 1): number => {
    const divisionRatio: number = idealWidth / (fontSize / ratio);
    return width / divisionRatio;
};

export const scaleLineHeight = (lineHeight: number = 1): number => {
    const divisionRatio: number = idealHeight / (lineHeight / ratio);
    return height / divisionRatio;
};
