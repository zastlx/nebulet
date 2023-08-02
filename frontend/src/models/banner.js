import userStore from "../stores/UserStore";

export default class Blook {
    name;
    displayName;
    image;

    constructor(initValue) {
        this.name = initValue.name;
        this.displayName = initValue.displayName;
        this.image = initValue.image;
    }

    update(newProps) {
        Object.assign(this, {
            ...this,
            ...newProps
        });
    }

    async isOwned() {
        return userStore.getLocalUser().banners.includes(this.name);
    }
}