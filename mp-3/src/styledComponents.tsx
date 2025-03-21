import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router';

// Global styles
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
    }
`;

// Page wrapper components
export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    min-height: 100vh;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin: auto;
        padding: 10px;
    }
`;

// Header styled components
export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #222222;
    color: white;
    align-items: flex-start;
    width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 750px) {
        align-items: center;
        text-align: center;
        width: 100%;
        padding: 10px;
    }
`;

// Navigation styled components
export const StyledNav = styled.nav`
    width: 220px;
    background-color: #333;
    padding-top: 20px;
    font-size: calc(1vh + 1vw);
    box-sizing: border-box;

    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;
        max-height: 150px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 2.25vw;
    }
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    list-style: none;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export const NavItem = styled.li`
    width: 100%;
    text-align: center;

    @media screen and (max-width: 750px) {
        width: auto;
        margin: 5px;
    }
`;

export const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 5px;
    padding: 2vh 3vw;
    width: 80%;
    margin: auto;

    @media screen and (max-width: 750px) {
        width: auto;
        padding: 8px 15px;
        font-size: 14px;
    }
`;
export const MainLayout = styled.div`
    display: flex;
    flex: 1;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

// Main content area
export const MainContent = styled.main`
    flex: 1;
    padding: 20px;
    text-align: center;
    font-size: calc(1.5vh + 0.5vw);

    @media screen and (max-width: 750px) {
        margin-top: 20px;
    }
`;

// Footer styled components
export const StyledFooter = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-top: auto; /* Push to bottom of flex container */

    a, p .copyright-symbol {
        color: #f5f5f5; /* Light gray for links */
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        margin-left: 0;
    }
`;

// Image styling
export const StyledImage = styled.img`
    display: block;
    border-width: 10px;
    border-style: solid;
    border-color: grey;
    margin-left: auto;
    margin-right: auto;
    max-width: 20%;
    max-height: 20%;

    @media screen and (max-width: 750px) {
        max-width: 60%;
    }
`;

// Calculator components
export const CalculatorContainer = styled.div`
    background-color: #34495e;
    padding: 20px;
    border-radius: 10px;
    margin: 20px auto;
    max-width: 500px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);

    @media screen and (max-width: 750px) {
        padding: 15px;
    }
`;

export const CalculatorInput = styled.input`
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;

    &:focus {
        outline: none;
        border: 2px solid #f39c12;
        box-shadow: 0 0 10px rgba(243, 156, 18, 0.7);
    }
`;

export const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const CalculatorButton = styled.button`
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #2c3e50;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #1a252f;
    }

    @media screen and (max-width: 750px) {
        padding: 10px;
        font-size: 1rem;
    }
`;

interface OutputDisplayProps {
    color?: string;
}

export const OutputDisplay = styled.div<OutputDisplayProps>`
    font-size: 2rem;
    font-family: 'Arial', sans-serif;
    text-align: center;
    color: ${props => props.color || 'black'};
    margin-top: 20px;
    padding: 15px;
    border: 2px solid #d4af37;
    background-color: #f8f9fa;
    border-radius: 10px;
    min-height: 60px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    word-wrap: break-word;
`;

// Page-specific styled components
export const PageSection = styled.div`
    /* Common styles for page sections */
`;

export const SectionHeader = styled.h1`
    margin: 0;
    padding: 15px;
`
export const SectionTitle = styled.h2`
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const Paragraph = styled.p`
    margin-bottom: 15px;
`;

interface ListContainerProps {
    noStyle?: boolean;
}

export const ListContainer = styled.ul<ListContainerProps>`
    list-style-type: ${props => props.noStyle ? 'none' : 'disc'};
    padding-left: 20px;
    text-align: left;
    margin-bottom: 20px;
`;

export const ListItem = styled.li`
    margin-bottom: 10px;
`;

export const SubListContainer = styled.ul`
    list-style-type: circle;
    padding-left: 20px;
    margin-top: 5px;
`;