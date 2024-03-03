# Workshop Finder API

It provides access to a wide range of workshops based on users' interests and multiple other parameters. Our API is designed to offer information on various workshops, including art, technology, and more.

## Features

- **GET /workshops**: Retrieve a list of workshops with the ability to filter results based on specific criteria.
- **GET /workshops/:id**: Retrieve details of a specific workshop by its ID.

## Getting Started

To start using the Workshops API, ensure you have the following prerequisites:

- An API client like Postman or cURL
- Access to the internet

### Base URL

The API is accessible at `https://jz43dl2q96.execute-api.us-east-1.amazonaws.com/newstage/workshops`.

### Authentication

Currently, the API does not require authentication.

## Endpoints

### GET /workshops

Retrieves a list of available workshops. You can apply filters to narrow down the search results based on your preferences.

#### Query Parameters

- `location` (optional): Filter workshops by location.
- `startDate` and `endDate` (optional): Filter workshops within a specific date range.
- `keywords` (optional): Filter workshops based on specific keywords.

### GET /workshops/:id

Retrieves the details of a specific workshop by its ID.

#### Path Parameters

- `id` (required): The unique identifier of the workshop to retrieve.

#### Response Format

The response will be in JSON format. Here is an example of a successful response for the **GET /workshops** endpoint:

```json
{
  "id": "65e4534khj4b408a2936jcd48925",
  "title": "Watercolor Painting for Beginners",
  "category": "Art",
  "description": "Dive into the basics of watercolor painting with expert guidance.",
  "location": "Central Park, New York",
  "date": "2024-04-15",
  "price": 50,
  "participantLimit": 15,
  "registrationCount": 5,
  "instructorBio": "Alex Johnson, an award-winning artist known for vibrant landscapes.",
  "tags": ["watercolor", "painting", "art"]
}
