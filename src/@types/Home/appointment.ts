export interface Appointment {
    id: string,
    clientFullName: string,
    serviceName: string,
    dt: Date,
    isConfirmed: boolean,
    avatarUrl: string
}