import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

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

const Header: React.FC = () => {
    return (
        <StyledAppBar position="static">
            <TopBar>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '24px', height: '24px', marginRight: '20px' }}>
                        {/* Иконка меню */}
                    </Box>
                    <Box sx={{ width: '24px', height: '24px', marginRight: '35px' }}>
                        {/* Иконка дома */}
                    </Box>
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