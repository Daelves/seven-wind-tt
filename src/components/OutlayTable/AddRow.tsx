import React from 'react';
import { styled } from '@mui/material/styles';
import { TableRow, TableCell, Box, Typography, IconButton } from '@mui/material';

const StyledTableCell = styled(TableCell)({
    color: '#FFFFFF',
    borderBottom: '1px solid #414144',
    padding: '10px 16px',
});

const StyledTableRow = styled(TableRow)({
    height: '60px',
});

const AddIconCircle = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: '#7890B2',
    color: '#FFFFFF',
    fontSize: '18px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#5C7494',
    },
});

const AddText = styled(Typography)({
    color: '#A1A1AA',
    fontSize: '14px',
    marginLeft: '8px',
});

interface AddRowProps {
    colSpan?: number;
}

const AddRow: React.FC<AddRowProps> = ({ colSpan = 6 }) => {
    return (
        <StyledTableRow>
            <StyledTableCell colSpan={colSpan} align="center">
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 0'
                }}>
                    <IconButton>
                        <AddIconCircle>+</AddIconCircle>
                    </IconButton>
                    <AddText>Добавить строку</AddText>
                </Box>
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default AddRow;