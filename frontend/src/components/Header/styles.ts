import styled from 'styled-components'
import { transparentize } from 'polished';

export const Container = styled.header`
    background: white;
    border-bottom: .5rem solid var(--orange-engeman);
`;

export const Content = styled.div`
    /* max-width: 1120px; */
    margin: 0 1rem;

    padding: .25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        max-width: 15rem;
        max-height: 15rem;
        border-radius: 0.25rem;
    }

    h3 {
        font-size: 2.5rem;
        font-weight: 500;
        text-transform: capitalize;
        color: var(--orange-engeman);
        align-self: left;
    }

    button {
        text-transform: uppercase;
        font-size: 1rem;
        color: #FFF;
        background: ${transparentize(0.1, '#f34b24')};
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;