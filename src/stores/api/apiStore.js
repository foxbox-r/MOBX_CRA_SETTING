import {action,observable,computed} from "mobx";
import {autobind} from "core-decorators";
import axios from "axios";

const apiAddress = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";

@autobind
class CountStore { 
    @observable data = [];
  
    @action 
    getApiData = async () =>{
        const res = await axios.get(apiAddress);
        console.log(res.data.boxOfficeResult.dailyBoxOfficeList);
        this.data = res.data.boxOfficeResult.dailyBoxOfficeList;
    }
  
}

export default CountStore;