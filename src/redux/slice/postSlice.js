// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import productApi from '../../../services/aixos/productApi';
// import { Elimit } from '../../../constants';

// export const doGetSearchListProduct = createAsyncThunk(
//   'product/getSearchList',
//   async (params: IParamsSearchProduct) => {
//     return await productApi.searchProduct(params).then((res) => res.data);
//   },
// );

// export const doGetCountSearchListProduct = createAsyncThunk(
//   'product/getCountSearchList',
//   async (params: IParamsSearchProduct) => {
//     return await productApi.countSearchProduct(params).then((res) => res.data);
//   },
// );

// export const doGetFavoriteList = createAsyncThunk('product/doGetFavoriteList', async () => {
//   return await productApi.favoriteList().then((res) => res.data);
// });

// export const doAddNewProduct = createAsyncThunk('product/doAddNewProduct', async (body: any) => {
//   return await productApi.addNewProduct(body).then((res) => res.data);
// });

// export const doGetProductByIDUser = createAsyncThunk(
//   'product/doGetProductByIDUser',
//   async (params: any) => {
//     return await productApi.getProductByIDUser(params).then((res) => res.data);
//   },
// );
// export const doGetProductByIDProduct = createAsyncThunk(
//   'product/doGetProductByIDProduct',
//   async (params: any) => {
//     return await productApi.getProductByIDProduct(params).then((res) => res.data);
//   },
// );
// export const doPatchProduct = createAsyncThunk('product/doPatchProduct', async (body: any) => {
//   return await productApi.patchProduct(body).then((res) => res.data);
// });
// export const doGetAllProduct = createAsyncThunk(
//   'product/getAllProduct',
//   async () => {
//     return await productApi.getAllProduct().then((res) => res.data);
//   },
// );
// export const doGetAllProductPublisher = createAsyncThunk(
//   'product/getAllProductPublisher',
//   async () => {
//     return await productApi.getAllProductPublisher().then((res) => res.data);
//   },
// );
// export const doGetAllProductSupplier = createAsyncThunk(
//   'product/getAllProductSupplier',
//   async () => {
//     return await productApi.getAllProductSupplier().then((res) => res.data);
//   },
// );
// export const doUpdateSoldProduct = createAsyncThunk(
//   'product/UpdateSoldProduct',
//   async (body:any) => {
//     return await productApi.updateSoldProduct(body).then((res) => res.data);
//   },
// );
// type IInitialState = {
//   listSearchProduct: Array<IProduct>;
//   favoriteList: Array<IProduct>;
//   isLoading: boolean;
//   error: string;
//   pathSrc: string;
//   numbersProduct: number;
// };

// const initialState = {
//   listSearchProduct: [],
//   favoriteList: [],
//   isLoading: false,
//   error: '',
//   pathSrc: '',
//   numbersProduct: Elimit.productSearchLimit,
// } as IInitialState;

// export const productSlice = createSlice({
//   name: 'products',
//   initialState: initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // get search list
//     builder.addCase(doGetSearchListProduct.pending, (state, action) => {
//       state.listSearchProduct = [];
//       state.isLoading = true;
//     });
//     builder.addCase(
//       doGetSearchListProduct.fulfilled,
//       (state, action: PayloadAction<IResponseSearchProduct>) => {
//         state.isLoading = false;
//         state.listSearchProduct = action.payload.data;
//         state.pathSrc = action.payload.Path;
//       },
//     );
//     builder.addCase(doGetSearchListProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });

//     //doGetCountSearchListProduct
//     builder.addCase(doGetCountSearchListProduct.pending, (state, action) => {
//       state.numbersProduct = 0;
//       state.isLoading = true;
//     });
//     builder.addCase(
//       doGetCountSearchListProduct.fulfilled,
//       (state, action: PayloadAction<IResponseCountSearchProduct>) => {
//         state.isLoading = false;
//         state.numbersProduct = action.payload.data;
//       },
//     );
//     builder.addCase(doGetCountSearchListProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });

//     //doGetFavoriteList
//     builder.addCase(doGetFavoriteList.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(
//       doGetFavoriteList.fulfilled,
//       (state, action: PayloadAction<IResponseSearchProduct>) => {
//         state.isLoading = false;
//         state.favoriteList = action.payload.data;
//         state.pathSrc = action.payload.Path;
//       },
//     );
//     builder.addCase(doGetFavoriteList.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //doAddNewProduct
//     builder.addCase(doAddNewProduct.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doAddNewProduct.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doAddNewProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //do Get Product By IDUser
//     builder.addCase(doGetProductByIDUser.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetProductByIDUser.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetProductByIDUser.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //do Get Product By IDProduct
//     builder.addCase(doGetProductByIDProduct.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetProductByIDProduct.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetProductByIDProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //do patch product
//     builder.addCase(doPatchProduct.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doPatchProduct.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doPatchProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //do get all product
//     builder.addCase(doGetAllProduct.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetAllProduct.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetAllProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //do get all product publisher
//     builder.addCase(doGetAllProductPublisher.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetAllProductPublisher.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetAllProductPublisher.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //do get all product supplier
//     builder.addCase(doGetAllProductSupplier.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetAllProductSupplier.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doGetAllProductSupplier.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//     //do update sold product
//     builder.addCase(doUpdateSoldProduct.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doUpdateSoldProduct.fulfilled, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(doUpdateSoldProduct.rejected, (state, action) => {
//       state.isLoading = false;
//     });
//   },
// });

// const { actions, reducer } = productSlice;
// export default reducer;