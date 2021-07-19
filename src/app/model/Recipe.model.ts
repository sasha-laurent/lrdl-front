export class Recipe {
    constructor(
        public id: number = null,
        public name: string = null,
        public description: string = null,
        public quantity: number = null,
        public image: File = null,
        public imageFilename: string = null,
    ) {
    }
}
