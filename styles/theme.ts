import { ITheme } from "@/models/styled";

export const baseTheme: ITheme = {
    main_colors: {
        blue_100: '#2C3878',
        blue_90: '#566093',
        blue_75: '#8088AE',
        blue_50: '#ABAFC9',
        blue_25: '#D5D7E4', 
        blue_10: '#EAEBF2', 
    },
    grayscale: {
        grayscale_black: '#000000',
        grayscale_70: '#141414',
        grayscale_50: '#333333',
        grayscale_30: '#3C3C3C',
        grayscale_10: '#9C9C9C',
        grayscale_lightray: '#D9D9D9',
        grayscale_white: '#FFFFFF',
    },
    media: {
        max_width: '1200px',
        large_width: '1024px',
        medium_width: '768px',
        min_width: '320px', 
    },
    transition: '0.8s',
}