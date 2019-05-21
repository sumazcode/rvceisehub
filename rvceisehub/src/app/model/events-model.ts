export class EventData {
    constructor(
        public id: string, // Mongo generated
        public title: string,
        public description: string,
        public venue: string,
        public date: string,
        public time: string,
        public category: string, // Subject area
        public rating: number // Student provided
    ) {}
}
