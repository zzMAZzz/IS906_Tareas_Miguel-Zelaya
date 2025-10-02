import { ContactList } from './models/ContactList';
import { ContactView } from './views/ContactView';
import { ContactController } from './controllers/ContactController';

const contactList = new ContactList();
const contactView = new ContactView();
const contactController = new ContactController(contactList, contactView);

console.log("Lista inicial de contactos:");
contactController.showContacts();

contactController.add("Juan Chavez", "juan@unah.hn", "0301234567");
contactController.add("Isabel Martinez", "isabel@unah.hn", "0707654321");

console.log("\nLista de contactos después de agregar:");
contactController.showContacts();

console.log("\nEliminando el contacto con ID:");

const contactIdToRemove = contactList.getContacts()[0]?.id;
if (contactIdToRemove) {
  contactController.remove(contactIdToRemove);
} else {
  console.log("No hay contactos para eliminar.");
}


console.log("\nIntentando eliminar un contacto que no existe:");
contactController.remove("nonexistent-id");

console.log("\nLista final de contactos:");
contactController.showContacts();
