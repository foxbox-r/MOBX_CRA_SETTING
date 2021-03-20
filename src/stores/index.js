import CountStore from "./Count";
import ApiCount from "./api";

const stores = {
    CountStore:new CountStore(),
    ApiStore:new ApiCount(), 
};

export default stores;