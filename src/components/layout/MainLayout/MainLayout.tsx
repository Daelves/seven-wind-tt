import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#202124',
});

const ContentContainer = styled(Box)({
    display: 'flex',
    flex: 1,
});

const Content = styled(Box)({
    flexGrow: 1,
    padding: '0',
    marginLeft: '234px',
});

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Container>
            <Header />
            <ContentContainer>
                <Sidebar />
                <Content>{children}</Content>
            </ContentContainer>
        </Container>
    );
};

export default MainLayout;