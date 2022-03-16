import styled from "styled-components";
import { TextProps } from "../../../interfaces/interfaces";

export const Container = styled.footer`
background: var(--color-black);
padding: 3em 2em;


`


export const List =  styled.ul`
max-width: 1000px;
margin: 0 auto;
padding: 0;
`

export const ListItem = styled.li`
list-style-type: none;
font-size: 0.8rem;
color: var(--color-text-gray);
width: 50%;
min-width: 100px;
display: inline-block;


@media(min-width: 600px){
    width: 33%;
}

@media(min-width: 900px){
    width: 25%;
}

a{
    color: var(--color-text-gray);
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-block;
    padding: 0.4em 0em ;

}

a:hover{
    text-decoration: underline;
}
`

export const Text = styled.p<TextProps>`    

color: var(--color-text-gray);
font-size: ${(props) => props.country == 'yes' ? "0.8rem" : "1.1rem"};
padding: 0.6em 0em;
margin: 0.3em 0em;

a{
    color: var(--color-text-gray);
    text-decoration: none;
    font-size: 1.1rem;
    display: inline-block;
    padding: 0.5em 0em;
}

a:hover{
    text-decoration: underline;
}
}
`

