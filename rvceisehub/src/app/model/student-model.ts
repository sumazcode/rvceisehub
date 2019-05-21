export interface StudentData {
    id: string;
    usn: string;
    name: string;
    email: string;
    registeredEvents: { eventId: string, eventTitle: string } [];
    rating: number;
}
