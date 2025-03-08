import { StyledNav, NavList, NavItem, StyledLink } from '../styledComponents';

const Navigation = () => {
    return (
        <StyledNav>
            <NavList>
                <NavItem><StyledLink to="/">Home</StyledLink></NavItem>
                <NavItem><StyledLink to="/education">Education</StyledLink></NavItem>
                <NavItem><StyledLink to="/experience">Experience</StyledLink></NavItem>
                <NavItem><StyledLink to="/hobbies">Hobbies</StyledLink></NavItem>
                <NavItem><StyledLink to="/references">References</StyledLink></NavItem>
                <NavItem><StyledLink to="/projects">Projects</StyledLink></NavItem>
            </NavList>
        </StyledNav>
    );
};

export default Navigation;