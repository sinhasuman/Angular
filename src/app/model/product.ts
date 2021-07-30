export interface IProductList {
    items: IProduct[]
};

export interface IProduct {
    id: number,
    name: string,
    price: number,
    promoPrice: number,
    description: string,
    facebookLink: string,
    twitterLink: string,
    pinterestLink: string,
    youtubekLink: string,
    instagramLink: string,
};