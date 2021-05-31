import styled from 'styled-components';
import { transparentize } from 'polished'

export const Container = styled.div``;

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
`;

export const FilterTable = styled.div`
  font-size: .75rem;
  font-weight: 400;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem 1rem;
  input {
    width: 100%;
  }

  textarea {
    min-height: 200px;
    min-width: 2fr;
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
    padding: .4rem .75rem;
    text-align: center;
    line-height: 1rem;
  }

  td {
    min-height: .85rem;
    height: 100%;
    padding: .25rem .75rem;
    border: 0;
    font-size: .7rem;
    background: var(--shape);
    color: var(--grey);
    border-top: .3px solid #d7d7ee;

    &:first-child {
      color: var(--text-title);
    }
  }
`;

export const Pagination = styled.div`
  margin: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h3.title {
    font-size: .8275rem;
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
  align-self: center;
  font-size: .82rem;
  padding: 0rem .35rem;
  margin: 0rem .15rem;
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

export const Limit = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  color: var(--text-title);

  p {
    font-size: .8275rem;
  }

  select {
    width: 4rem;
    padding: .25rem;
    font-size: .75rem;
  }
`;