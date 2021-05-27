import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.aside`
  background: ${darken(0.1, '#f0f2f5')};
  width: 1rem auto;

  p {
    color: var(--text-title);
    padding: 0.35rem 1rem;
    background: ${darken(0.2, '#f0f2f5')};

    & + p {
      margin-top: .5rem;
    }

    &:first-child {
      font-size: 1.35rem;
      font-weight: 500;
    }
  }
`;