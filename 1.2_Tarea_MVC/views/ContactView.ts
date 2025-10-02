import { Contact } from '../models/Contact';

export class ContactView {
  displayContacts(contacts: Contact[]): void {
    if (contacts.length === 0) {
      console.log("No hay contactos.");
      return;
    }

    contacts.forEach(contact => {
      console.log(`ID: ${contact.id} | Nombre: ${contact.nombre} | Email: ${contact.email} | Teléfono: ${contact.telefono}`);
    });
  }

  displayMessage(message: string): void {
    console.log(message);
  }
}
