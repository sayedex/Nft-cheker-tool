"use strict";
exports.id = 250;
exports.ids = [250];
exports.modules = {

/***/ 2250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nN": () => (/* binding */ setOpenmodel),
/* harmony export */   "ol": () => (/* binding */ Search),
/* harmony export */   "rS": () => (/* binding */ FetchuserNFT)
/* harmony export */ });
/* unused harmony exports setOffmodel, addCard */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    userNFT: [],
    filter: [],
    status: false,
    walletmodel: false,
    userFetchNFT: "IDLE",
    cardNFT: {}
};
const WalletState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "wallet",
    initialState,
    reducers: {
        setOpenmodel (state, action) {
            state.walletmodel = true;
        },
        setOffmodel (state, action) {
            state.walletmodel = false;
        },
        addCard (state, action) {
            state.cardNFT = action.payload;
        },
        Search (state, action) {
            const Search_sort = state.userNFT.filter((Cel)=>{
                return Cel.token_address == action.payload;
            });
            state.filter = Search_sort;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(FetchuserNFT.pending, (state, action)=>{
            state.userFetchNFT = "LOADING";
        }).addCase(FetchuserNFT.fulfilled, (state, action)=>{
            state.userNFT = action.payload;
            state.filter = action.payload;
            state.userFetchNFT = "IDLE";
        }).addCase(FetchuserNFT.rejected, (state, action)=>{
            state.userFetchNFT = "ERROR";
        });
    }
});
const { setOpenmodel , setOffmodel , addCard , Search  } = WalletState.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletState.reducer);
// Thunks
const FetchuserNFT = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("products/fetch", async (account)=>{
    if (!account) {
        return;
    }
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-Key": "hfFDDgyJiGcA93sEfRWQF61kqPD66rc7etsRDlEjjOZxQ3LVNZKMYRyB2Na3vx6f"
        }
    };
    try {
        const res = await fetch(`https://deep-index.moralis.io/api/v2/${account}/nft?chain=eth&format=decimal`, options);
        const { result  } = await res.json();
        return result;
    } catch (e) {}
});


/***/ })

};
;