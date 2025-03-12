import React from 'react';
import { styled } from '@mui/material/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';

const StyledDrawer = styled(Drawer)({
    width: 234,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 234,
        boxSizing: 'border-box',
        backgroundColor: '#27272A',
        border: 'none',
        top: '88px',
        height: 'calc(100% - 88px)',
    },
});

const StyledListItem = styled(ListItem)<{ active?: boolean }>(({ active }) => ({
    height: '32px',
    padding: '0 20px',
    backgroundColor: active ? '#A1A1AA' : 'transparent',
    '&:hover': {
        backgroundColor: active ? '#A1A1AA' : '#414144',
    },
}));

const StyledListItemText = styled(ListItemText)({
    '& .MuiListItemText-primary': {
        fontSize: '14px',
        lineHeight: '16px',
        color: '#FFFFFF',
    },
});

interface NavItem {
    id: string;
    name: string;
    icon?: React.ReactNode;
}

const navItems: NavItem[] = [
    { id: 'project', name: 'По проекту' },
    { id: 'objects', name: 'Объекты' },
    { id: 'rd', name: 'РД' },
    { id: 'mto', name: 'МТО' },
    { id: 'smr', name: 'СМР', },
    { id: 'schedule', name: 'График' },
    { id: 'mim', name: 'МиМ' },
    { id: 'workers', name: 'Рабочие' },
    { id: 'attachments', name: 'Капвложения' },
    { id: 'budget', name: 'Бюджет' },
    { id: 'financing', name: 'Финансирование' },
    { id: 'panoramas', name: 'Панорамы' },
    { id: 'cameras', name: 'Камеры' },
    { id: 'purchases', name: 'Поручения' },
    { id: 'contractors', name: 'Контрагенты' },
];

const Sidebar: React.FC = () => {
    const activeItem = 'smr';

    return (
        <StyledDrawer variant="permanent">
            <List>
                {navItems.map((item) => (
                    <StyledListItem key={item.id} active={item.id === activeItem}>
                        <ListItemIcon sx={{ minWidth: '30px' }}>
                            {item.icon || <Box sx={{ width: '24px', height: '24px' }} />}
                        </ListItemIcon>
                        <StyledListItemText primary={item.name} />
                    </StyledListItem>
                ))}
            </List>
        </StyledDrawer>
    );
};

export default Sidebar;