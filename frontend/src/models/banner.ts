import userStore from "../stores/UserStore";
import { BannerModel } from "../types/models";

export default class Banner implements BannerModel {
    name: string;
    displayName: string;
    image: string;
    constructor(initValue: BannerModel) {
        Object.assign(this, initValue);
    }

    update(newProps: Partial<BannerModel>): void {
        Object.assign(this, {
            ...this,
            ...newProps
        });
    }

    async isOwned(): boolean {
        return userStore.getLocalUser().banners.includes(this.name);
    }
}