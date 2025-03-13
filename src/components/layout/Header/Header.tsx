import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3_4483)">
            <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill="#A1A1AA"/>
        </g>
        <defs>
            <clipPath id="clip0_3_4483">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const BackIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3_4484)">
            <path d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z" fill="#A1A1AA"/>
        </g>
        <defs>
            <clipPath id="clip0_3_4484">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#27272A',
    boxShadow: 'none',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1,
    height: '88px',
    display: 'flex',
    flexDirection: 'column',
}));

const TopBar = styled(Toolbar)({
    height: '44px',
    minHeight: '44px',
    borderBottom: '1px solid #414144',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
});

const BottomBar = styled(Toolbar)({
    height: '44px',
    minHeight: '44px',
    borderBottom: '1px solid #414144',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
});

const NavItem = styled(Typography)<{ active?: boolean }>(({ active }) => ({
    fontSize: '14px',
    lineHeight: '16px',
    color: active ? '#FFFFFF' : '#A1A1AA',
    cursor: 'pointer',
    position: 'relative',
    marginRight: '28px',
    '&:after': active ? {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: '#FFFFFF',
        bottom: '-15px',
        left: 0,
    } : {},
}));

const ProjectTitle = styled(Typography)({
    fontSize: '18px',
    lineHeight: '21px',
    color: '#FFFFFF',
    marginLeft: '10px',
});

const ProjectInfo = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
});

const ProjectName = styled(Typography)({
    fontSize: '14px',
    lineHeight: '16px',
    color: '#A1A1AA',
});

const ProjectAbbr = styled(Typography)({
    fontSize: '10px',
    lineHeight: '12px',
    color: '#A1A1AA',
});

const IconContainer = styled(Box)({
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
});

const Header: React.FC = () => {
    return (
        <StyledAppBar position="static">
            <TopBar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconContainer>
                        <MenuIcon />
                    </IconContainer>
                    <IconContainer>
                        <BackIcon />
                    </IconContainer>
                    <NavItem active>Просмотр</NavItem>
                    <NavItem>Управление</NavItem>
                </Box>
            </TopBar>
            <BottomBar>
                <ProjectInfo>
                    <ProjectName>Название проекта</ProjectName>
                    <ProjectAbbr>Аббревиатура</ProjectAbbr>
                </ProjectInfo>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '45px',
                        borderLeft: '1px solid #414144',
                        height: '100%',
                        paddingLeft: '15px'
                    }}
                >
                    <Box sx={{ width: '24px', height: '24px', marginRight: '10px' }}>
                        {/* Иконка документа */}
                    </Box>
                    <ProjectTitle>Строительно-монтажные работы</ProjectTitle>
                </Box>
            </BottomBar>
        </StyledAppBar>
    );
};

export default Header;
