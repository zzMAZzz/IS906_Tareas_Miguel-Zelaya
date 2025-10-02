import { ContactList } from '../models/ContactList';
import { ContactView } from '../views/ContactView';

export class ContactController {
  private contactList: ContactList;
  private contactView: ContactView;

  constructor(contactList: ContactList, contactView: ContactView) {
    this.contactList = contactList;
    this.contactView = contactView;
  }

  add(nombre: string, email: string, telefono: string): void {
    const newContact = this.contactList.addContact(nombre, email, telefono);
    this.contactView.displayMessage(`Contacto agregado: ${newContact.nombre}`);
  }

  remove(id: string): void {
    const success = this.contactList.deleteContact(id);
    if (success) {
      this.contactView.displayMessage(`Contacto con ID ${id} eliminado.`);
    } else {
      this.contactView.displayMessage(`No se encontró el contacto con ID ${id}.`);
    }
  }

  showContacts(): void {
    const contacts = this.contactList.getContacts();
    this.contactView.displayContacts(contacts);
  }
}
