import styled from 'styled-components'

export const GridContainer = styled.main`
    display: grid;
    grid-template-columns:
        minmax(16px, 1fr)
        minmax(${({ theme }) => theme.media.min_width}, ${({ theme }) => theme.media.max_width})
        minmax(16px, 1fr);
`

export const GridContent = styled.section`
    grid-column: 2 / 3;
`

export const GridContentFull = styled.section`
    grid-column: 1 / -1;
`