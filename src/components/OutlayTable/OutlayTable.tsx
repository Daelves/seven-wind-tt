import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Box
} from '@mui/material';

const mockData = [
    {
        id: 1,
        rowName: 'Южная строительная площадка',
        salary: 20348,
        equipmentCosts: 1750,
        overheads: 108.07,
        total: 1209122.5,
        parentId: null,
        child: [
            {
                id: 2,
                rowName: 'Фундаментальные работы',
                salary: 20348,
                equipmentCosts: 1750,
                overheads: 108.07,
                total: 1209122.5,
                parentId: 1,
                child: [
                    {
                        id: 3,
                        rowName: 'Статья работы № 1',
                        salary: 20348,
                        equipmentCosts: 1750,
                        overheads: 108.07,
                        total: 189122.5,
                        parentId: 2,
                        child: []
                    },
                    {
                        id: 4,
                        rowName: 'Статья работы № 2',
                        salary: 38200,
                        equipmentCosts: 1200,
                        overheads: 850,
                        total: 1020000,
                        parentId: 2,
                        child: []
                    }
                ]
            }
        ]
    }
];

const RowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="4" fill="#7890B2" />
    </svg>
);

const DeleteIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6V14H12V6H4ZM5.5 12.5V7.5H6.5V12.5H5.5ZM7.5 12.5V7.5H8.5V12.5H7.5ZM9.5 12.5V7.5H10.5V12.5H9.5Z" fill="white"/>
        <path d="M12 3H9.5L8.5 2H7.5L6.5 3H4V5H12V3Z" fill="white"/>
    </svg>
);

const EditIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7 3.3C12.3 2.9 11.7 2.9 11.3 3.3L10.5 4.1L11.9 5.5L12.7 4.7C13.1 4.3 13.1 3.7 12.7 3.3Z" fill="white"/>
        <path d="M4 10.6V12H5.4L10.2 7.2L8.8 5.8L4 10.6Z" fill="white"/>
    </svg>
);

const AddIconCircle = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '12px',
    backgroundColor: '#7890B2',
    color: '#FFFFFF',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#5C7494',
    },
});

const StyledTableContainer = styled(TableContainer)({
    backgroundColor: '#202124',
    color: '#FFFFFF',
    boxShadow: 'none',
});

const StyledTable = styled(Table)({
    minWidth: 650,
    borderCollapse: 'separate',
    borderSpacing: '0',
});

const StyledTableHead = styled(TableHead)({
    backgroundColor: '#202124',
    '& th': {
        color: '#A1A1AA',
        borderBottom: '1px solid #414144',
        fontSize: '14px',
        fontWeight: 400,
        padding: '8px 16px',
    },
});

const StyledTableCell = styled(TableCell)({
    color: '#FFFFFF',
    borderBottom: '1px solid #414144',
    padding: '10px 16px',
});

const StyledTableRow = styled(TableRow)({
    height: '60px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
});

const ControlsContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
});

interface RowWithControlsProps {
    row: any;
    level: number;
}

const RowWithControls: React.FC<RowWithControlsProps> = ({ row, level }) => {
    const [showControls, setShowControls] = useState(false);

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', pl: level * 2 }}
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(false)}
                >
                    <RowIcon />

                    {showControls && (
                        <ControlsContainer sx={{ ml: 1 }}>
                            <IconButton size="small">
                                <AddIconCircle>+</AddIconCircle>
                            </IconButton>
                            <IconButton size="small">
                                <DeleteIcon />
                            </IconButton>
                        </ControlsContainer>
                    )}
                </Box>
            </StyledTableCell>
            <StyledTableCell>{row.rowName}</StyledTableCell>
            <StyledTableCell align="right">{row.salary.toLocaleString()}</StyledTableCell>
            <StyledTableCell align="right">{row.equipmentCosts.toLocaleString()}</StyledTableCell>
            <StyledTableCell align="right">{row.overheads.toLocaleString()}</StyledTableCell>
            <StyledTableCell align="right">{row.total.toLocaleString()}</StyledTableCell>
        </StyledTableRow>
    );
};

const renderRows = (rows: any[], parentId: number | null = null, level = 0): React.ReactNode => {
    return rows
        .filter(row => row.parentId === parentId)
        .map(row => {
            return (
                <React.Fragment key={row.id}>
                    <RowWithControls row={row} level={level} />
                    {row.child && row.child.length > 0 && renderRows(row.child, row.id, level + 1)}
                </React.Fragment>
            );
        });
};

const flattenRows = (rows: any[]): any[] => {
    let result: any[] = [];
    rows.forEach(row => {
        result.push(row);
        if (row.child && row.child.length > 0) {
            result = [...result, ...flattenRows(row.child)];
        }
    });
    return result;
};

const OutlayTableUI: React.FC = () => {
    const flatRows = flattenRows(mockData);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', bgcolor: '#202124' }}>
            <StyledTableContainer>
                <StyledTable>
                    <StyledTableHead>
                        <TableRow>
                            <TableCell width="5%">Уровень</TableCell>
                            <TableCell>Наименование работ</TableCell>
                            <TableCell align="right">Основная з/п</TableCell>
                            <TableCell align="right">Оборудование</TableCell>
                            <TableCell align="right">Накладные расходы</TableCell>
                            <TableCell align="right">Сметная стоимость</TableCell>
                        </TableRow>
                    </StyledTableHead>
                    <TableBody>
                        {mockData.length === 0 ? (
                            <TableRow>
                                <StyledTableCell colSpan={6} align="center">
                                    <Box sx={{ py: 2 }}>
                                        <IconButton>
                                            <AddIconCircle>+</AddIconCircle>
                                        </IconButton>
                                        Добавить строку
                                    </Box>
                                </StyledTableCell>
                            </TableRow>
                        ) : (
                            renderRows(mockData)
                        )}
                    </TableBody>
                </StyledTable>
            </StyledTableContainer>
        </Paper>
    );
};

export default OutlayTableUI;