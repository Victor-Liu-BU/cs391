
import { PageSection, StyledImage, Paragraph, SectionHeader } from '../styledComponents';

const Home = () => {
    return (
        <PageSection id="home">
            <SectionHeader>Home</SectionHeader>
            <StyledImage src="/ice_on_my_teeth.jpg" alt="A picture of me dancing" />
            <Paragraph>
                My name is Ting Shing Liu but I also go by the name Victor. I am a junior studying
                computer science at Boston University. My hobbies are gaming, working out, and
                dancing (the picture shown is from when I was covering the K-pop song Ice On My Teeth by ATEEZ).
            </Paragraph>
        </PageSection>
    );
};

export default Home;