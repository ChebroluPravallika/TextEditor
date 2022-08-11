import styled from 'styled-components'

export const Heading = styled.h1`
  color: #0070c1;
  font-family: 'Roboto';
`

export const Button = styled.button`
  background-color: #25262c;
  border-width: 0px;
  cursor: pointer;
  color: ${props => (props.istrue ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  border: 0px;
  color: white;
  font-size: 20px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
