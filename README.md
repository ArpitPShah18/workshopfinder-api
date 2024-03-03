# Workshop Finder API

It provides acccess to the wide range of workshops based on users interest and multiple other parameters.Our API is designed to offer information on various workshops, including art, technology, and more.

## Features

- **GET /workshops**: Retrieve a list of workshops with the ability to filter results based on specific criteria.

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

- `category` (optional): Filter workshops by category.
- `location` (optional): Filter workshops by location.
- `skillLevel` (optional): Filter workshops based on the required skill level.
- `startDate` and `endDate` (optional): Filter workshops within a specific date range.
- `keywords` (optional): Filter workshops based on specific keywords.

#### Response Format

The response will be in JSON format. Here is an example of a successful response:

```json
{
  "id": 1,
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
