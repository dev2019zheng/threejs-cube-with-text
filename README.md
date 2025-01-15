# Three.js text Demo

![Preview](./cube%20with%20text.gif)

## How to Use

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/dev2019zheng/threejs-cube-with-text.git
   cd threejs-cube-with-text
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Demo

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:8080` to view the demo.

### Building for Production

1. Build the project:
   ```sh
   npm run build
   ```
2. The output will be in the `dist` directory. You can serve it using any static file server.

## CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

### CI

On every push and pull request to the `main` branch, the following steps are performed:
- Checkout the code
- Set up Node.js
- Install dependencies
- Run build
- Run tests

### Deployment

On every push to the `main` branch, after the CI steps are successful, the project is deployed to GitHub Pages. The deployment steps include:
- Checkout the code
- Set up Node.js
- Install dependencies
- Build the project
- Deploy to GitHub Pages

The deployment is handled by the [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) action.

### License

This project is licensed under the MIT License.
