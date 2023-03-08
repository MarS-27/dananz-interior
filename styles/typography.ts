import { Poppins } from "@next/font/google";
import styled from "styled-components";

const DefaultTextColor = styled.p`
    color: ${({ theme }) => theme.grayscale.grayscale_50};
`
// Bold

export const poppinsBold = Poppins({weight: '700'})

export const FontBold_4xl = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 72px;
    line-height: 101px;
` 

export const FontBold_3xl = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 64px;
    line-height: 90px;
` 

export const FontBold_2xl = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 56px;
    line-height: 78px;
` 

export const FontBold_xl = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 32px;
    line-height: 45px;
` 

export const FontBold_l = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 24px;
    line-height: 34px;
` 

export const FontBold_m = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 20px;
    line-height: 28px;  
` 

export const FontBold_s = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 18px;
    line-height: 25px;  
`

export const FontBold_xs = styled(DefaultTextColor)`
    ${poppinsBold.style};
    font-size: 16px;
    line-height: 22px;  
`

// SemiBold

export const poppinsSemiBold = Poppins({weight: '600'})

export const FontSemiBold_3xl = styled(DefaultTextColor)`
    ${poppinsSemiBold.style};
    font-size: 36px;
    line-height: 61px;  
`

export const FontSemiBold_2xl = styled(DefaultTextColor)`
    ${poppinsSemiBold.style};
    font-size: 32px;
    line-height: 45px;  
`

export const FontSemiBold_xl = styled(DefaultTextColor)`
    ${poppinsSemiBold.style};
    font-size: 24px;
    line-height: 34px;  
`

export const FontSemiBold_l = styled(DefaultTextColor)`
    ${poppinsSemiBold.style};
    font-size: 20px;
    line-height: 28px;  
`

export const FontSemiBold_m = styled(DefaultTextColor)`
    ${poppinsSemiBold.style};
    font-size: 18px;
    line-height: 25px;  
`

export const FontSemiBold_s = styled(DefaultTextColor)`
    ${poppinsSemiBold.style};
    font-size: 16px;
    line-height: 22px;  
`

export const FontSemiBold_xs = styled(DefaultTextColor)`
    ${poppinsSemiBold.style};
    font-size: 14px;
    line-height: 20px;  
`

// Medium

export const poppinsMedium = Poppins({weight: '500'})

export const FontMedium_3xl = styled(DefaultTextColor)`
    ${poppinsMedium.style};
    font-size: 24px;
    line-height: 36px;  
`

export const FontMedium_2xl = styled(DefaultTextColor)`
    ${poppinsMedium.style};
    font-size: 20px;
    line-height: 30px;  
`

export const FontMedium_xl = styled(DefaultTextColor)`
    ${poppinsMedium.style};
    font-size: 18px;
    line-height: 27px;  
`

export const FontMedium_l = styled(DefaultTextColor)`
    ${poppinsMedium.style};
    font-size: 16px;
    line-height: 24px;  
`

export const FontMedium_m = styled(DefaultTextColor)`
    ${poppinsMedium.style};
    font-size: 14px;
    line-height: 21px;  
`

export const FontMedium_s = styled(DefaultTextColor)`
    ${poppinsMedium.style};
    font-size: 12px;
    line-height: 18px;  
`

export const FontMedium_xs = styled(DefaultTextColor)`
    ${poppinsMedium.style};
    font-size: 10px;
    line-height: 15px;  
`

// Regular

export const poppinsRegular = Poppins({weight: '400'})

export const FontRegular_4xl = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 52px;
    line-height: 83px;  
`

export const FontRegular_3xl = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 24px;
    line-height: 38px;  
`

export const FontRegular_2xl = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 20px;
    line-height: 32px;  
`

export const FontRegular_xl = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 18px;
    line-height: 29px;  
`

export const FontRegular_l = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 16px;
    line-height: 26px;  
`

export const FontRegular_m = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 14px;
    line-height: 22px;  
`

export const FontRegular_s = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 12px;
    line-height: 19px;  
`

export const FontRegular_xs = styled(DefaultTextColor)`
    ${poppinsRegular.style};
    font-size: 10px;
    line-height: 16px;  
`