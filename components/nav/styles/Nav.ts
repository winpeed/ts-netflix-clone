import styled from 'styled-components'

export const Container = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1em 1.5em;

@media(min-width: 760px){
    padding: 1em 3em;
}
`

export const Button = styled.button`
background: var(--color-red);
padding: 0.5em 0.7em;
font-size: 0.9rem;
color:var(--color-white);
border: none;
border-radius: 5px;

a{
    color: var(--color-white);
    text-decoration: none;
}

@media(min-width: 760px){
    padding: 0.7em 1.1em;
}
`


export const ImageWrapper = styled.div`

`