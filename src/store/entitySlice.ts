import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OutlayRow } from './types';

interface EntityState {
  entityId: string;
  rows: OutlayRow[];
  editingRowIds: number[];
  pendingRowIds: number[];
}

const initialState: EntityState = {
  entityId: '',
  rows: [],
  editingRowIds: [],
  pendingRowIds: [],
};

export const entitySlice = createSlice({
  name: 'entity',
  initialState,
  reducers: {
    setEntityId: (state, action: PayloadAction<string>) => {
      state.entityId = action.payload;
    },
    setRows: (state, action: PayloadAction<OutlayRow[]>) => {
      state.rows = action.payload;
    },
    updateRows: (state, action: PayloadAction<OutlayRow[]>) => {
      // Обновляем строки в состоянии на основе полученных данных
      action.payload.forEach(updatedRow => {
        const existingRowIndex = state.rows.findIndex(row => row.id === updatedRow.id);
        if (existingRowIndex !== -1) {
          state.rows[existingRowIndex] = updatedRow;
        } else {
          state.rows.push(updatedRow);
        }
      });
    },
    addEditingRow: (state, action: PayloadAction<number>) => {
      if (!state.editingRowIds.includes(action.payload)) {
        state.editingRowIds.push(action.payload);
      }
    },
    removeEditingRow: (state, action: PayloadAction<number>) => {
      state.editingRowIds = state.editingRowIds.filter(id => id !== action.payload);
    },
    addPendingRow: (state, action: PayloadAction<number>) => {
      if (!state.pendingRowIds.includes(action.payload)) {
        state.pendingRowIds.push(action.payload);
      }
    },
    removePendingRow: (state, action: PayloadAction<number>) => {
      state.pendingRowIds = state.pendingRowIds.filter(id => id !== action.payload);
    },
  },
});

export const {
  setEntityId,
  setRows,
  updateRows,
  addEditingRow,
  removeEditingRow,
  addPendingRow,
  removePendingRow,
} = entitySlice.actions;

export default entitySlice.reducer;
