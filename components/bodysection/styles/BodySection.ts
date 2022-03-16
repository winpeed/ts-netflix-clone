import styled from "styled-components";
import { ListButtonProps } from "../../../interfaces/interfaces";

export const Container = styled.main`
background: var(--color-black)
`

export const Content = styled.section`
padding: 3em 0em;
border-bottom: 8px solid var(--color-text-gray);
text-align: center;

`

export const Heading = styled.h2`
color: var(--color-white);
font-size: 1.7rem;
font-weight: 700;

`

export const Text = styled.p`
color: var(--color-white);
font-size: 1.185rem;
font-weight: 400;
padding: 0.7em 0.5em;
line-height:1.6;
`

export const ImageWrapper = styled.div`

`

export const List = styled.ul`
display: flex;
flex-direction: column;
padding: 0;

`

export const ListItem = styled.li`
padding: 0.8em 0em;
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


`

export const ListContent = styled.div`
background: var(--color-bg-gray);
text-align: left;
border-top: 1px solid black;
padding: 1em 1.5em;
`

