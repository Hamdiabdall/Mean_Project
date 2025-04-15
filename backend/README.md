# Smartphone Management App - Backend

This is the Node.js/Express backend API for the Smartphone Management application.

## Features

- **RESTful API**: CRUD operations for smartphone data
- **MongoDB Integration**: Data persistence with Mongoose ODM
- **File Upload**: Image upload functionality with Multer
- **Static File Serving**: Serves uploaded images
- **Error Handling**: Robust error handling and validation

## Technology Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **Multer**: Middleware for handling file uploads
- **CORS**: Cross-Origin Resource Sharing support
- **dotenv**: Environment variable management

## Project Structure

```
├── controllers/             # Request handlers
│   └── uploadController.js  # File upload handler
├── models/                  # Mongoose models
│   └── Smartphone.js        # Smartphone data schema
├── routes/                  # API routes
│   ├── smartphoneRoutes.js  # Smartphone CRUD routes
│   └── uploadRoutes.js      # File upload routes
├── uploads/                 # Directory for uploaded images
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
└── server.js                # Main server file
```

## API Endpoints

### Smartphones

- **GET /api/smartphones** - Get all smartphones
- **GET /api/smartphones/:id** - Get a specific smartphone by ID
- **POST /api/smartphones** - Create a new smartphone
- **PUT /api/smartphones/:id** - Update a smartphone
- **DELETE /api/smartphones/:id** - Delete a smartphone

### File Upload

- **POST /api/upload** - Upload an image file
- **DELETE /api/upload/:filename** - Delete an uploaded image

## Data Models

### Smartphone

```javascript
{
  nomTel: {
    type: String,
    required: true
  },
  marque: {
    type: String,
    required: true
  },
  caracteristique: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    default: 'https://via.placeholder.com/150?text=No+Image'
  }
}
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/smartphonesDB
   PORT=5000
   ```

3. Start the server:
   ```
   npm start
   ```
   
The API will be available at http://localhost:5000

## File Upload Configuration

The file upload functionality uses the following configuration:

- **Storage**: Local disk storage in the `uploads` directory
- **File Size Limit**: 5MB maximum
- **Accepted Files**: Image files only (JPEG, PNG, GIF, etc.)
- **Filename**: Auto-generated unique filenames

## Error Handling

The API includes comprehensive error handling for:

- Invalid requests
- Database errors
- File upload issues
- Missing resources

## Security Considerations

- **CORS**: Configured to allow requests from the frontend
- **File Validation**: Validates file types and sizes
- **Error Responses**: Does not expose sensitive information

## Development

### Running in Development Mode

For development with automatic server restart on file changes, install nodemon:

```
npm install -g nodemon
```

Then run:

```
nodemon server.js
```

## Dependencies

- express
- mongoose
- multer
- cors
- dotenv

---

*Part of the Smartphone Management MEAN stack application.* 