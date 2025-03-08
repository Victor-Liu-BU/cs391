import { BrowserRouter, Routes, Route } from 'react-router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import References from './pages/References';
import Projects from './pages/Projects';
import { GlobalStyle, PageWrapper, MainContent, StyledHeader, MainLayout, StyledNav, StyledFooter } from './styledComponents';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <PageWrapper>
                <StyledHeader>
                    <Header />
                </StyledHeader>
                <MainLayout>
                    <StyledNav>
                        <Navigation />
                    </StyledNav>
                    <MainContent>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/hobbies" element={<Hobbies />} />
                            <Route path="/references" element={<References />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </MainContent>
                </MainLayout>
                <StyledFooter>
                    <Footer />
                </StyledFooter>
            </PageWrapper>
        </BrowserRouter>
    );
};

export default App;