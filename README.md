# Phonebook API

- This is a simple API mimicking a phonebook. It fetches data from a database and displays it in JSON format to whatever invokes it.
- The API supports 4 HTTP methods:

  - `GET`
  - `POST`
  - `PATCH`
  - `DELETE`

- Should give a JSON object with instances of what is in the database.
- As at the time of writing this short guide, the API is **NOT** hosted anywhere.

## Making a GET request

- This request gets you all contacts in the database:
  - GET <http://example.com:PORT/contacts>

## Making a POST request

- This request is for creating a **new** contact.
  - POST <http://example.com:PORT/contacts>
  - The body of the request should look something like this:

    ```JSON
    {
      "prefix": "Miss",
      "first_name": "Test",
      "last_name": "User1",
      "phoneNumber": 254712345678,
      "email": "testuser1@test.com",
      "alias": "testuser"
    }
    ```

- The fields outlines above have to be filled in order to avoid any errors. Surely an empty field could be allowed in this version, however, it is not advisable.

## Making a PATCH request

- This request simply updates the value of a contact.
- All field values must be present.
- The body should look similar to the POST request above with slight caveat:

  ```http
  PATCH http://example.com:PORT/<unique-contact-id>
  ```

## Making a DELETE request

- This request simply deletes an instance of a contact. Usage is as follows:

  ```http
  DELETE http://example.com:PORT/<unique-contact-id>
  ```

- Ensure the unique contact ID passed is valid and exists else an error will be spit back at you.
