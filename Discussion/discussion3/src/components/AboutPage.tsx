import styled from "styled-components";

const AboutContentDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export default function AboutPage(){
    return (
        <AboutContentDiv>
            <h1>I am a CS391 Student</h1>
            <p>Greetings!</p>
        </AboutContentDiv>
    )
}