// COLORS
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const PRIMARY_COLOR = '#00ad0c';
export const SECONDARY_COLOR = '#fff';
export const DANGER_COLOR = '#ff2450';
export const SHADOW_COLOR = '#000';
export const BACKGROUND_COLOR = '#ecf0f1';

// SIZES
export const ROUNDED = 40;
export const WIDTH_FULL = '100%';
export const WIDTH_1_3 = '33,33%';
export const MAX_WIDTH = screenWidth > 800 ? 600 : WIDTH_FULL;
export const PRODUCT_ROWS = Math.round(screenWidth / 200);

// SPACES
export const SPACER_XS = 5;
export const SPACER_SM = 10;
export const SPACER_MD = 15;
export const SPACER_LG = 20;
export const SPACER_XL = 30;
export const SPACER_2XL = 40;

// TEXT PROPS
export const TEXT_OPACITY = 0.6;
export const TEXT_COLOR = '#333';

// FONT SIZES
export const FONT_SIZE_XS = 14;
export const FONT_SIZE_SM = 18;
export const FONT_SIZE_MD = 20;
export const FONT_SIZE_LG = 24;
export const FONT_SIZE_XL = 26;
export const FONT_SIZE_2XL = 32;
export const FONT_SIZE_3XL = 120;
