<!-- Initialize Vite -->
npm create vite@latest ./
<!-- Using template -->
npm create vite@latest ./ template react
moving them to the clien

<!-- Install dependency -->
npm install
npm run dev

<!-- Crate a server folder -->
<!-- Make new package for handling server dependency -->
npm init -y

<!-- Add client Side basic Dependencies -->
react react-dom react-router-dom axios zustand react-hook-form
flowbite-react react-icons react-spinners tailwindcss @tailwindcss/vite

<!-- Tailwind Setup -->
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })

  @import "tailwindcss"; In your styles.css
<!-- Prettier setup -->
npm install -D prettier prettier-plugin-tailwindcss

.prettierrec
{
    "plugins": [
        "prettier-plugin-tailwindcss"
    ]
}
<!-- Add server Side basic Dependencies -->
express cors dotenv bcrypt jsonwebtoken cookie-parser mongoose nodemon

<!-- Build and run in the hosting platform -->
npm install && npm install --prefix client && npm run build --prefix client

// Serve static files from React build (ensure 'client/dist' exists)
app.use(express.static(path.join(__dirname, "client", "dist")));

// Fallback to index.html for other routes (SPA behavior)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

<!-- Docker -->
docker-compose up --build

docker-compose down -v     # To stop and remove volumes
docker-compose up --build  # To restart fresh
