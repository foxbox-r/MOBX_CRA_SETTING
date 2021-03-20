import {action,observable,computed} from "mobx";
import {autobind} from "core-decorators";

@autobind
class CountStore { 
    @observable number = 10;
  
    @action 
    increase = () => {
      this.number = this.number + 1;
      console.log(this.number);
    }
  
    @action
    decrease = () => {
      this.number = this.number - 1;
    }

    @computed
    get getNumber(){
      console.log(this.number);
      return this.number;
    }
}

export default CountStore;