
import {
    PageSection,
    SectionTitle,
    ListContainer,
    ListItem,
    SectionHeader
} from '../styledComponents';

const References = () => {
    return (
        <PageSection id="references">
            <SectionHeader>References</SectionHeader>
            <SectionTitle>Professional References</SectionTitle>
            <ListContainer noStyle>
                <ListItem>
                    Vincent Pham <br />
                    617-984-1697 <br />
                    vincent.pham@quincycollege.edu
                </ListItem>
                <ListItem>
                    Allen Mo <br />
                    617-984-1696 <br />
                    amo@quincycollege.edu
                </ListItem>
            </ListContainer>
            <SectionTitle>Personal References</SectionTitle>
            <ListContainer noStyle>
                <ListItem>
                    Ding Kang <br />
                    617-984-1697 <br />
                    dingKang@quincycollege.edu
                </ListItem>
                <ListItem>
                    Kam Heung <br />
                    617-984-1696 <br />
                    KamHeung@quincycollege.edu
                </ListItem>
            </ListContainer>
        </PageSection>
    );
};

export default References;