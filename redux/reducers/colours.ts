import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';
import {apiFetchBegan} from '../createActions/createActions';

const slice = createSlice({
  name: 'colours',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    coloursRequested: (colours, action) => {
      colours.loading = true;
    },
    coloursRecieved: (colours, action) => {
      colours.list = action.payload;
      colours.loading = false;
    },
    coloursRequestFailed: (colours, action) => {
      colours.loading = false;
    },
    // coloursFavorited: (colours, action) => {
    //   const updatedColours = colours.list.map(colour => {
    //     if (colour.id === action.payload) {
    //       return {
    //         ...colour,
    //         isFavorite: !colour.isFavorite,
    //       };
    //     } else {
    //       return colour;
    //     }
    //   });
    //   colours.list = updatedColours;
    // },

    // deleteColor: (colours, action) => {
    //   const decreaseColors = colours.list.filter(colour => colour.id !== action.payload);
    //   colours.list = decreaseColors;
    // },
  },
});

export const {coloursRecieved, coloursRequested, coloursRequestFailed} = slice.actions;

export default slice.reducer;

//Action Creators
const url = '/colours';

// export const fetchColourList = (dispatch) => {
//   return dispatch(
//     apiFetchBegan({
//       url,
//       onStart: coloursRequested.type,
//       onSuccess: coloursRecieved.type,
//       onError: coloursRequestFailed.type,
//     }),
//   );
// };
