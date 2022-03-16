import styled from 'styled-components'
import { InputProps } from '../../../interfaces/interfaces'

export const Container = styled.section`
background: url('hero.jpg');
background-size: cover;
text-align: center;
min-height:90vh;
background-color: var(--color-text-gray);
background-blend-mode: multiply;
border-bottom: 8px solid var(--color-text-gray);

`

export const MainHeading = styled.h1`
font-size: 1.75rem;
color: var(--color-white);
margin-top: 3em;
font-weight: 700;
`

export const BodyText = styled.p`
color: var(--color-white);
font-size: 1.2rem;
font-weight: 500;
max-width: 350px;
margin: 0.8em auto;
line-height: 1.2
`

export const Form = styled.form`

@media(max-width: 900px){
    display: flex;
    flex-direction: column;
}

`

export const FormInput = styled.input<InputProps>`
padding: 1em 2em;
border: 1px solid var(--color-bg-gray);
margin: 0.5em auto 0.8em auto;
width: 80%;
position: relative;

&:focus {
    border: 1px solid var(--color-blue);

    ::placeholder {
        font-size: 0.8em;
        margin-top:6em;
      }
}


`

export const FormButton = styled.button`
padding: 0.8em;
color: var(--color-white);
background: var(--color-red);
border: none;
max-width: 250px;
margin: 0 auto;
font-size: 1rem;
font-weight: 600;
display:flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
letter-spacing: 0.02em
`