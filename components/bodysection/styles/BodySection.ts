import styled from "styled-components";
import { ListButtonProps, SectionProps } from "../../../interfaces/interfaces";

export const Container = styled.main`
background: var(--color-black)
`

export const FaqContent = styled.section`
border-bottom: 8px solid var(--color-text-gray);
text-align: center;
padding: 3em 0em;
`

export const Content = styled.section<SectionProps>`
padding: 3em 0em;
border-bottom: 8px solid var(--color-text-gray);
text-align: center;

@media(min-width: 960px){
    display: flex;
    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
    justify-content: space-between;
    align-items: center;
    padding: 3em 4em;
    margin: 0 auto;
}

@media(min-width: 1100px){
    padding: 3em 8em; 
}
`

export const Heading = styled.h2`
color: var(--color-white);
font-size: 1.7rem;
font-weight: 600;
margin: 0em 0em 0.5em 0em;

@media(min-width: 760px){
  font-size: 3.125rem;
}
`

export const Text = styled.p`
color: var(--color-white);
font-size: 1.185rem;
font-weight: 400;
padding: 0.7em 0em;
line-height:1.6;

@media(min-width: 760px){
    font-size: 1.625rem;
    padding-right: 2em;
  }
`

export const ContentWrapper = styled.div`
padding: 1em 0.5em;
flex: 0 0 50%;
text-align: center;

@media(min-width: 960px){
    text-align: left;
}
`

export const ImageWrapper = styled.div`

`

export const List = styled.ul`
display: flex;
flex-direction: column;
padding: 0;
max-width: 800px;
margin: 0 auto;

@media(min-width: 900px){
    margin-bottom: 4em;
}
`

export const ListItem = styled.li`
padding: 0.4em 0em;
color: var(--color-white);
list-style-type: none;
`

export const ListButton  = styled.button<ListButtonProps>`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.8em 1.7em;
width: 100%;
text-align: left;
background: var(--color-bg-gray);
color: var(--color-white);
border: none;
color: var(--color-white);
font-size: 1.18rem;
font-weight: 500;
cursor: pointer;

@media(min-width: 760px){
    font-size: 1.625rem;
  }
`

export const ListContent = styled.div`
background: var(--color-bg-gray);
text-align: left;
border-top: 1px solid black;
padding: 1em 1.5em;
`

