import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  fill: ${props => props.theme.colors.tertiary};

  &:hover {
    fill: ${props => props.theme.colors.quartenary};
  }

  &:active {
    fill: ${props => props.theme.colors.secondary};
  }
`;

const AddPath = styled.path``;

function AddIcon(props) {
  return (
    <SVG
      height="32px"
      viewBox="-16 0 512 512"
      width="32px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <AddPath d="m95.332031 222.800781h192.800781c8.285157 0 15-6.714843 15-15 0-8.285156-6.714843-15-15-15h-192.800781c-8.28125 0-15 6.714844-15 15 0 8.285157 6.71875 15 15 15zm0 0" />
      <AddPath d="m95.332031 287.066406h192.800781c8.285157 0 15-6.714844 15-15s-6.714843-15-15-15h-192.800781c-8.28125 0-15 6.714844-15 15s6.71875 15 15 15zm0 0" />
      <AddPath d="m191.734375 321.332031h-96.402344c-8.28125 0-15 6.71875-15 15 0 8.285157 6.71875 15 15 15h96.402344c8.28125 0 15-6.714843 15-15 0-8.28125-6.71875-15-15-15zm0 0" />
      <AddPath d="m191.734375 385.601562h-96.402344c-8.28125 0-15 6.714844-15 15 0 8.28125 6.71875 15 15 15h96.402344c8.28125 0 15-6.71875 15-15 0-8.285156-6.71875-15-15-15zm0 0" />
      <AddPath d="m383.464844 290.214844v-243.082032c0-25.988281-21.144532-47.132812-47.132813-47.132812h-224.933593c-3.976563 0-7.792969 1.582031-10.605469 4.394531l-96.398438 96.398438c-2.8125 2.8125-4.394531 6.628906-4.394531 10.605469v353.46875c0 25.988281 21.144531 47.132812 47.132812 47.132812h321.332032c61.425781 0 111.402344-49.972656 111.402344-111.398438 0-56.339843-42.042969-103.039062-96.402344-110.386718zm-271-255.066406v60.1875c0 9.445312-7.683594 17.132812-17.132813 17.132812h-60.1875zm-65.332032 446.851562c-9.445312 0-17.132812-7.6875-17.132812-17.132812v-322.398438h65.332031c25.988281 0 47.132813-21.144531 47.132813-47.132812v-65.335938h193.867187c9.449219 0 17.132813 7.6875 17.132813 17.132812v243.082032c-54.355469 7.347656-96.398438 54.046875-96.398438 110.382812 0 32.09375 13.644532 61.054688 35.433594 81.402344zm321.332032 0c-44.882813 0-81.398438-36.515625-81.398438-81.398438 0-44.886718 36.515625-81.402343 81.398438-81.402343 44.886718 0 81.402344 36.515625 81.402344 81.402343 0 44.882813-36.515626 81.398438-81.402344 81.398438zm0 0" />
      <AddPath d="m400.601562 385.601562h-17.132812v-17.132812c0-8.285156-6.71875-15-15-15-8.285156 0-15 6.714844-15 15v17.132812h-17.136719c-8.28125 0-15 6.714844-15 15 0 8.28125 6.71875 15 15 15h17.132813v17.132813c0 8.28125 6.71875 15 15 15 8.285156 0 15-6.71875 15-15v-17.132813h17.132812c8.285156 0 15-6.71875 15-15 0-8.285156-6.714844-15-14.996094-15zm0 0" />
    </SVG>
  );
}
export default AddIcon;
