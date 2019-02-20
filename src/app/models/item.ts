export class Item{
    public productName:string;
    public productCount:number;

    constructor(name:string)
    {
        this.productName=name;
        this.productCount=1;
    }
}