
import {
    PageSection,
    StyledImage,
    SectionTitle,
    Paragraph,
    SectionHeader
} from '../styledComponents';

const Hobbies = () => {
    return (
        <PageSection id="hobbies">
            <SectionHeader>Hobbies</SectionHeader>
            <StyledImage src="/dumbbell.jpg" alt="dumbbell" />
            <SectionTitle>
                <b>Workout</b>
            </SectionTitle>
            <Paragraph>
                I believe that a healthy body is crucial to a happy life. I usually workout
                4-6 times a week. I have been working out for about 3 years.
            </Paragraph>
            <StyledImage src="/me_dancing.png" alt="me dancing" />
            <SectionTitle>
                <b>Dancing</b>
            </SectionTitle>
            <Paragraph>
                I love to dance. Eversince freshman year of college, I have been an active
                member of the K-pop dance cover team at Boston University, BUMiXx. So far I have
                about 3 covers of me dancing on <a href="https://youtu.be/aHRmUhYVcfw?si=EGBoQnivVmBqd0GP" target="_blank" rel="noreferrer">YouTube</a>
            </Paragraph>
        </PageSection>
    );
};

export default Hobbies;