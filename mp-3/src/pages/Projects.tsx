
import Calculator from '../components/Calculator';
import {PageSection, SectionTitle, Paragraph, ListItem, SectionHeader} from '../styledComponents';
import {Link} from "react-router";

const Projects = () => {
    return (
        <PageSection id="projects">
            <SectionHeader>Projects</SectionHeader>
            <Paragraph>Visit my Github Repositories</Paragraph>
            <ListItem><Link to="https://github.com/Victor-Liu-BU/HelloWorld">Hello World</Link></ListItem>
            <ListItem><Link to="https://github.com/Victor-Liu-BU/MotivationalQuotesRandom.git">MotivationalQuote</Link></ListItem>
            <ListItem><Link to="https://github.com/Victor-Liu-BU/TingShingLiu-Greeting.git">Greeting</Link></ListItem>
            <SectionTitle>JavaScript Calculator</SectionTitle>
            <Paragraph>Calculator with custom Hooks!</Paragraph>
            <Calculator />
        </PageSection>
    );
};

export default Projects;