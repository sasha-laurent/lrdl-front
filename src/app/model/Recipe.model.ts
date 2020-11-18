export class Recipe {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public quantity: number = 1,
        public image: File = null,
        public imageFilename: string = null,
    ) {
    }
}
