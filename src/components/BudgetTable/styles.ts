import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  text-align: center;

  table {
    font-size: .75rem;
    width: 100%;
    max-width: 1080px;
    border-spacing: 0;
    border: 1px solid #d7d7ee;
    border-radius: 0.25rem;

    background: var(--shape);

    th {
      background: var(--background);
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 1rem;
      text-align: left;
      line-height: 1rem;
    }

    td {
      height: 100%;
      padding: 1rem 1rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }
    }
  }
`;