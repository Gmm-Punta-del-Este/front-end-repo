export class Nota {
    constructor(
        public id: number,
        public created_on: Date,
        public texto: string,
        public titulo: string,
        public documento: string
        ){
    }
}
