import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
`;

export const BTable = styled.table`
  text-align: center;
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
    text-align: center;
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
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 .75rem;
`;