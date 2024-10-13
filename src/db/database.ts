import { format, addDays } from 'date-fns';

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Appointment {
  id: number;
  clientId: number;
  service: string;
  date: string;
  time: string;
}

let clients: Client[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901" },
  { id: 3, name: "Carol Williams", email: "carol@example.com", phone: "345-678-9012" },
  { id: 4, name: "David Brown", email: "david@example.com", phone: "456-789-0123" },
  { id: 5, name: "Eve Davis", email: "eve@example.com", phone: "567-890-1234" },
];

let appointments: Appointment[] = [
  { id: 1, clientId: 1, service: "Haircut", date: format(new Date(), 'yyyy-MM-dd'), time: "10:00" },
  { id: 2, clientId: 2, service: "Color Treatment", date: format(addDays(new Date(), 1), 'yyyy-MM-dd'), time: "14:00" },
  { id: 3, clientId: 3, service: "Manicure", date: format(addDays(new Date(), 2), 'yyyy-MM-dd'), time: "11:00" },
  { id: 4, clientId: 4, service: "Pedicure", date: format(addDays(new Date(), 3), 'yyyy-MM-dd'), time: "15:00" },
  { id: 5, clientId: 5, service: "Facial", date: format(addDays(new Date(), 4), 'yyyy-MM-dd'), time: "13:00" },
];

export function getClients(): Client[] {
  return clients;
}

export function getAppointments(): Appointment[] {
  return appointments;
}

export function addAppointment(appointment: Omit<Appointment, 'id'>): void {
  const newAppointment = {
    ...appointment,
    id: appointments.length + 1
  };
  appointments.push(newAppointment);
}

export function getClientById(id: number): Client | undefined {
  return clients.find(client => client.id === id);
}