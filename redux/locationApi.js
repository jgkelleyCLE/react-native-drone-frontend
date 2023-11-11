import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const locationApi = createApi({
    reducerPath: "locationApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://10.0.0.3:3001" }),
    tagTypes: ['Locations'],
    endpoints: (builder) => ({
        getAllLocations: builder.query({
            query: ()=> ({
                url: '/api/locations',
                method: 'GET'
            }),
            providesTags: ['Locations']
        }),
        getLocation: builder.query({
            query: (id)=> ({
                url: `/api/locations/${id}`,
                method: 'GET'
            }),
            providesTags: ['Locations']
        }),
        searchLocations: builder.query({
            query: (key)=> ({
                url: `/api/locations/search/${key}`,
                method: 'GET'
            }),
            providesTags: ['Locations']
        })
    })
})


export const { useGetAllLocationsQuery, useGetLocationQuery, useSearchLocationsQuery } = locationApi