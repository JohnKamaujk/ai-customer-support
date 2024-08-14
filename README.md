# AI Customer Support Application

This project is an AI-powered customer support application built with Next.js and Firebase. It provides users with an interactive chat interface to receive automated assistance and support, facilitated by AI.

## Features

- **User Authentication**: Secure sign-up and sign-in using Firebase.
- **Interactive Chat Interface**: Real-time messaging with an AI assistant.
- **AI-Powered Responses**: Intelligent, context-aware responses to user queries.
- **Persistent User Sessions**: Users remain logged in between sessions.
- **Sign-Out Functionality**: Accessible via a sidebar drawer.

## How It Works

The application leverages Firebase for user authentication and uses AI-powered APIs to generate responses. The frontend is built with Next.js and Material-UI, ensuring a responsive and user-friendly interface.

### Core Functionality

1. **User Authentication**:
   - Users can securely sign up and sign in with Firebase Authentication.
   - Session management ensures persistence across visits.

2. **Interactive Chat**:
   - The chat interface enables users to interact with the AI assistant.
   - Users can send messages, and the AI provides real-time responses.

3. **AI-Powered Responses**:
   - The AI generates helpful, context-aware responses to user queries.

4. **Sign-Out**:
   - Users can sign out securely.
   - The sign-out option is available through a sidebar drawer.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Firebase project

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/JohnKamaujk/ai-customer-support.git

    cd ai-customer-support
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up Firebase**:

    - Create a new Firebase project in the Firebase Console.
    - Add a new web app to your Firebase project.
    - Copy the Firebase configuration settings.
    - Set up environment variables:

    Create a `.env.local` file in the root directory of your project and add your Firebase configuration settings:

    ```bash
    OPENAI_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    ```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to http://localhost:3000 to see the application running.

### Technologies Used

- Nextjs: React framework for server-rendered apps.
- Firebase Firestore
- Material-UI

### Contributing

Feel free to fork this repository and submit pull requests.

### License

This project is licensed under the MIT License.