import styled from 'styled-components'
import { InputProps } from '../../../interfaces/interfaces'

export const Container = styled.section`
background: url('hero.jpg');
background-size: cover;
text-align: center;
min-height:80vh;
background-color: var(--color-text-gray);
background-blend-mode: multiply;
border-bottom: 8px solid var(--color-text-gray);

@media(min-width: 730px){
    min-height: 100vh;
}
`

export const MainHeading = styled.h1`
font-size: 1.75rem;
color: var(--color-white);
margin-top: 1.5em;
font-weight: 700;
padding: 0em 1.3em;

@media(min-width: 730px){
    font-size: 3.125rem;
    max-width: 600px;
    margin: 2em auto 0.3em auto;
}
`

export const BodyText = styled.p`
color: var(--color-white);
font-size: 1.2rem;
font-weight: 400;
margin: 0.8em auto;
line-height: 1.2;
padding: 0em 1em;

@media(min-width: 730px){
    font-size: 1.325rem;
    max-width: 750px;
    margin: 0.8em auto;
}
`

export const Form = styled.form`
display: flex;

@media(max-width: 720px){
    flex-direction: column;
}

@media(min-width: 730px){
    flex-direction: row;
    max-width: 650px;
    margin: 0 auto;
    align-items: center;
    padding: 0.6em 0em;
 }
 

`

export const FormInput = styled.input<InputProps>`
padding: 1em 2em;
border: 1px solid var(--color-bg-gray);
margin: 0.5em auto 0.8em auto;
width: 75%;


&:focus {
    border: 1px solid var(--color-blue);

    ::placeholder {
        font-size: 0.8em;
        margin-top:6em;
      }
}

@media(min-width: 730px){
    width: 62.5%;
    margin: 0em auto 0em auto;
    padding: 2em 2em;

    ::placeholder {
        font-size: 1.5em;
      }
 }

`

export const FormButton = styled.button`
padding: 0.8em;
color: var(--color-white);
background: var(--color-red);
border: none;
max-width: 270px;
margin: 0 auto;
font-size: 1rem;
font-weight: 600;
display:flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
letter-spacing: 0.02em;
transition: all 0.1s ease-in 0.05s;

@media(min-width: 730px){
    max-width: 480px;
    font-size: 1.3rem;
    padding: 1.1em 0.8em;
}

&:hover{
    background: var(--color-red-dark);
}

`