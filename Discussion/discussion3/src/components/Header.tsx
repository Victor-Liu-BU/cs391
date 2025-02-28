import {Link} from "react-router";
import {styled} from "styled-components";

const StyledHeader = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Title = styled.h2`
    padding: 0.5rem;
    margin: 1rem;
`;

const StyledLink = styled(Link)`
    padding: 0.25rem;
    margin: 0.25rem;
`;

export default function Header(){
    return (
        <StyledHeader>
            <Title> React Introduction</Title>
            <nav>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </nav>
        </StyledHeader>
    );
}