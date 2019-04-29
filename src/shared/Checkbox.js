import styled from 'styled-components';

export const StyledCheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 1.8rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  ${StyledCheckboxContainer}:hover & {
    background-color: #ccc;
  }
  ${StyledCheckboxContainer}:focus & {
    background-color: #ccc;
  }
  ${StyledCheckboxInput}:checked ~ & {
    background-color: #2196f3;
  }
  ${StyledCheckboxInput}:checked ~ &::after {
    display: block;
  }
  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
