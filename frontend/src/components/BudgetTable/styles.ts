import styled from 'styled-components';
import { transparentize } from 'polished'

export const Container = styled.div`
  margin-top: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: .5rem;
  color: var(--text-title);

  h3{
    font-weight: 500;
    font-size: 1.5rem;
  }

  .orders-limit {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: none;

    p {
      font-size: 1.25rem;
      letter-spacing: .7px;
    }

    select {
      padding: .25rem .5rem;
      font-size: 1rem;
    }
  }
`;

export const BTable = styled.table`
  text-align: center;
  font-size: .75rem;
  width: 100%;
  overflow: auto;
  background: var(--shape);

  border-spacing: 0;
  border: 1px solid #d7d7ee;
  border-radius: 0.25rem;


  th {
    background: var(--background);
    color: var(--text-title);
    font-weight: 500;
    padding: 1rem .75rem;
    text-align: center;
    line-height: 1rem;
  }

  td {
    height: 100%;
    padding: 1rem .75rem;
    border: 0;
    background: var(--shape);
    color: var(--grey);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    }
  }
`;

export const Pagination = styled.div`
  margin-top: .75rem;
  display: flex;
  justify-content: space-between;
  
  h3.title {
    color: var(--grey);
    padding: 0rem .5rem;
  }
`;

export const PaginationButton = styled.div`
  display: flex;
`;

interface PaginationItemProps {
  isSelected?: boolean;
}

export const PaginationItem = styled.div<PaginationItemProps>`
  padding: 0rem .5rem;
  margin: 0rem .25rem;
  border: 1px solid #d7d7ee;
  border-radius: .25rem;
  background: var(--grey);
  color: white;

  &:hover{
    cursor: pointer;
  }

  ${(props) => props.isSelected && {
    background: transparentize(0.15, '#f34b24'),
  }}
`;