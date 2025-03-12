import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from './config';
import { CreateEntityResponse, CreateRowRequest, OutlayRow, UpdateRowRequest } from '../store/types';

export const entityApi = createApi({
  reducerPath: 'entityApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['Entity', 'Row'],
  endpoints: (builder) => ({
    createEntity: builder.mutation<CreateEntityResponse, void>({
      query: () => ({
        url: '/v1/outlay-rows/entity/create',
        method: 'POST',
      }),
      invalidatesTags: ['Entity'],
    }),
    
    getRows: builder.query<OutlayRow[], string>({
      query: (entityId) => `/v1/outlay-rows/entity/${entityId}/row/list`,
      providesTags: ['Row'],
    }),
    
    createRow: builder.mutation<OutlayRow[], { entityId: string; data: CreateRowRequest }>({
      query: ({ entityId, data }) => ({
        url: `/v1/outlay-rows/entity/${entityId}/row/create`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Row'],
    }),
    
    updateRow: builder.mutation<OutlayRow[], { entityId: string; rowId: number; data: UpdateRowRequest }>({
      query: ({ entityId, rowId, data }) => ({
        url: `/v1/outlay-rows/entity/${entityId}/row/${rowId}/update`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Row'],
    }),
    
    deleteRow: builder.mutation<OutlayRow[], { entityId: string; rowId: number }>({
      query: ({ entityId, rowId }) => ({
        url: `/v1/outlay-rows/entity/${entityId}/row/${rowId}/delete`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Row'],
    }),
  }),
});

export const {
  useCreateEntityMutation,
  useGetRowsQuery,
  useCreateRowMutation,
  useUpdateRowMutation,
  useDeleteRowMutation,
} = entityApi;
