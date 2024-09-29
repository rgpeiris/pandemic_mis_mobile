import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { encryptTransform } from "redux-persist-transform-encrypt";

import reducers from "./reducers";
import rootSaga from "./sagas";

const persistConfig = {
  key: "keys",
  storage,
  whitelist: ["auth"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_CLIENT_SECRET,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor };
export default store;
