export const BASE_URL = 'https://6814d0df225ff1af162a3433.mockapi.io/';

// https://6814d0df225ff1af162a3433.mockapi.io/:endpoint

// const schema = {
//   id: 'Object ID',
//   createdAt: 'Faker.js date.recent',
//   name: 'Faker.js name.fullName',
//   number: 'Faker.js phone.number',
// };

// Endpoints

// GET /contacts
// Response: Contact[]
// Get a list of contacts

// GET /contacts/:id
// Response: Contact
// Get a contact by ID

// POST /contacts
// Payload: Contact
// Response: Contact
// Create a new contact

// PUT /contacts/:id
// Payload: Contact
// Response: Contact
// Update a contact

// Patch /contacts/:id
// Payload: Contact
// Response: Contact
// Update a contact

// DELETE /contacts/:id
// Response: Contact
// Delete a task

// headers: {'content-type':'application/json'},

// Example
// fetch('https://PROJECT_TOKEN.mockapi.io/tasks/1', {
//   method: 'PUT', // or PATCH
//   headers: { 'content-type': 'application/json' },
//   body: JSON.stringify({ completed: true }),
// })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     // handle error
//   })
//   .then((task) => {
//     // Do something with updated task
//   })
//   .catch((error) => {
//     // handle error
//   });

// Filtering
// const url = new URL('https://PROJECT_TOKEN.mockapi.io/tasks');
// url.searchParams.append('completed', false); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false

// Pagination
// const url = new URL('https://PROJECT_TOKEN.mockapi.io/tasks');
// url.searchParams.append('completed', false); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false
// url.searchParams.append('page', 1); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false&page=1
// url.searchParams.append('limit', 10); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false&page=1&limit=10
