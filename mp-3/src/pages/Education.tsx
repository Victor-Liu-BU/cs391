
import { PageSection, StyledImage, SectionTitle, Paragraph, SectionHeader } from '../styledComponents';

const Education = () => {
    return (
        <PageSection id="education">
            <SectionHeader>Education</SectionHeader>
            <StyledImage src="/boston_university_logo.png" alt="Boston University Logo" />
            <SectionTitle>Boston University</SectionTitle>
            <Paragraph>
                I started attending Boston University during the fall semester of 2022 and am now a
                Junior still pursing the computer science degree. I have a GPA of 3.70 and a Dean's list
                recipient.
            </Paragraph>
            <StyledImage src="/north_quincy_high.jpg" alt="North Quincy High Logo" />
            <SectionTitle>North Quincy High School</SectionTitle>
            <Paragraph>
                I attended North Quincy High School. And I held a class rank of 23 out of 400 students.
            </Paragraph>
        </PageSection>
    );
};

export default Education;