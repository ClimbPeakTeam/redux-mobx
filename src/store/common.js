import { observable, computed, action, autorun } from 'mobx';

class CommonState {
    @observable userName = 'jason';
    
    @computed get getUserNameFromStore() {
        return this.userName;
    }

    @action handleStoreUserName(name) {
        this.userName = name;
    }
}

const commonState = new CommonState();

autorun( () => {
    console.log(commonState);
})

export default commonState;