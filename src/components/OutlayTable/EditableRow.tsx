import React from 'react';
import { styled } from '@mui/material/styles';
import { TableRow, TableCell, Box, TextField } from '@mui/material';

// SVG иконки
const RowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="4" fill="#7890B2" />
    </svg>
);

const StyledTableCell = styled(TableCell)({
    color: '#FFFFFF',
    borderBottom: '1px solid #414144',
    padding: '10px 16px',
});

const StyledTableRow = styled(TableRow)({
    height: '60px',
    backgroundColor: 'rgba(120, 144, 178, 0.1)',
});

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: '#FFFFFF',
        padding: '6px 8px',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#414144',
        },
        '&:hover fieldset': {
            borderColor: '#A1A1AA',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#7890B2',
        },
    },
});

interface EditableRowProps {
    row: any;
    level: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ row, level }) => {
    return (
        <StyledTableRow>
            <StyledTableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: level * 2 }}>
                    <RowIcon />
                </Box>
            </StyledTableCell>
            <StyledTableCell>
                <StyledTextField
                    value={row.rowName}
                    size="small"
                    fullWidth
                />
            </StyledTableCell>
            <StyledTableCell>
                <StyledTextField
                    value={row.salary}
                    size="small"
                    type="number"
                />
            </StyledTableCell>
            <StyledTableCell>
                <StyledTextField
                    value={row.equipmentCosts}
                    size="small"
                    type="number"
                />
            </StyledTableCell>
            <StyledTableCell>
                <StyledTextField
                    value={row.overheads}
                    size="small"
                    type="number"
                />
            </StyledTableCell>
            <StyledTableCell align="right">
                {row.total.toLocaleString()}
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default EditableRow;