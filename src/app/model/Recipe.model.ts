export class Recipe {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public quantity: number = 1
    ) {
    }
}
