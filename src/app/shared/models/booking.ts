import { User } from './user';

export interface Booking {
    bookingId: number;
    bookingTime: string;
    streetAddress: string;
    bookingPrice: number;
    tutenUserClient: User
}

