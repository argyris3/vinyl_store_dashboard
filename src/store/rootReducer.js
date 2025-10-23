import authReducer from './reducers/authReducer';
import categoryReducer from "./reducers/categoryReducer";
import productReducer from './reducers/productReducers';
import sellerReducer from "./reducers/sellerReducer";
import chatReducer from "./reducers/chatReducer";
import OrderReducer from './reducers/OrderReducer';
import PaymentReducer from './reducers/PaymentReducer';
import dashboardReducer from './reducers/dashboardReducer';



const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    seller: sellerReducer,
    chat: chatReducer,
    order: OrderReducer,
    payment: PaymentReducer,
    dashboard: dashboardReducer,
}
export default rootReducer;