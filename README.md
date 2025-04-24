# Smartphone Management App

A full-stack MEAN (MongoDB, Express, Angular, Node.js) application for managing smartphone information with image upload capabilities.

![mean](/mean.PNG)

## Features

- **View Smartphones**: Browse through a collection of smartphones with details and images
- **Add Smartphones**: Add new smartphones with specifications and photos
- **Edit Smartphones**: Update existing smartphone information
- **Delete Smartphones**: Remove smartphones from the database
- **Image Management**: Upload images directly or use image URLs
- **Responsive Design**: Mobile-friendly interface using Bootstrap

## Technology Stack

### Frontend
- **Angular 19** with standalone components
- **Bootstrap 5** for styling
- **RxJS** for reactive programming
- **Angular Router** for navigation

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Multer** for file uploads
- **CORS** for cross-origin resource sharing
- **dotenv** for environment variables

## Project Structure

```
├── frontend/                 # Angular application
│   ├── src/                  
│   │   ├── app/              
│   │   │   ├── smartphone/   # Smartphone components
│   │   │   ├── app.routes.ts # Route configuration
│   │   │   └── ...          
│   │   ├── assets/           # Static assets
│   │   └── ...              
│   ├── package.json          # Frontend dependencies
│   └── ...                  
├── backend/                  # Node.js API
│   ├── controllers/          # Request handlers
│   ├── models/               # Mongoose data models
│   ├── routes/               # API routes
│   ├── uploads/              # Uploaded images
│   ├── server.js             # Main server file
│   ├── package.json          # Backend dependencies
│   └── .env                  # Environment variables
└── README.md                 # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGO_URI=mongodb://localhost:27017/smartphonesDB
   PORT=5000
   ```

4. Start the server:
   ```
   npm start
   ```
   The API will be available at http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The application will be available at http://localhost:4200

## API Endpoints

### Smartphones

- **GET /api/smartphones** - Get all smartphones
- **GET /api/smartphones/:id** - Get a specific smartphone
- **POST /api/smartphones** - Create a new smartphone
- **PUT /api/smartphones/:id** - Update a smartphone
- **DELETE /api/smartphones/:id** - Delete a smartphone

### Image Upload

- **POST /api/upload** - Upload an image
- **DELETE /api/upload/:filename** - Delete an uploaded image

## Data Model

### Smartphone

```javascript
{
  nomTel: String,          // Phone name
  marque: String,          // Brand
  caracteristique: String, // Features
  photoUrl: String         // URL to image
}
```

## Usage

### Adding a Smartphone

1. Click on "Add New" button in the navigation
2. Fill in the smartphone details
3. Upload an image or provide an image URL
4. Click "Save"

### Editing a Smartphone

1. Click on the "Edit" button on a smartphone card
2. Update the information
3. Click "Update"

### Deleting a Smartphone

1. Click on the "Delete" button on a smartphone card
2. Confirm deletion

## Development

### Building for Production

#### Frontend
```
cd frontend
npm run build
```

#### Backend
```
cd backend
npm run build
```

## Troubleshooting

### Image Upload Issues

- Ensure the backend server is running
- Check that the uploads directory has write permissions
- Verify that image files are under 5MB
- Make sure you're using supported image formats (JPEG, PNG, GIF)

### API Connection Issues

- Confirm MongoDB is running and accessible
- Check that the CORS settings match your frontend URL
- Verify that the backend server is running on the expected port

## License

MIT License

## Author

Hamdi Abdallah

---

*This project was created as a demonstration of MEAN stack development.* 
