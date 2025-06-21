import { useState } from 'react';
import ConceptModal from '../components/ConceptModal';
import { motion } from 'framer-motion';
import '../styles/ServerMap.css';
import AvatarGuide from '../components/AvatarGuide';

const concepts = [
  {
    title: "Routing",
    desc: "Routing is how a server determines what to do when a user visits a specific path (like /login or /dashboard). In Express.js, routes map URLs to controller logic. You can handle GET, POST, PUT, and DELETE requests using app-level or router-level methods. Routes help organize code for different parts of your app. Proper routing structure makes your backend easier to scale and maintain.",
    level: 1,
    x: 400,
    y: 100,
    image: "/lands/routing.png"
  },
  {
    title: "Middleware",
    desc: "Middleware functions sit between the incoming request and the route handler. They're used for things like logging, parsing request bodies, checking authentication, or handling CORS. Middleware can be global or route-specific. They're executed in order, so placement matters. Custom middleware lets you insert reusable logic anywhere in the request lifecycle.",
    level: 2,
    x: 1100,
    y: 250,
    image: "/lands/middleware.png"
  },
  {
    title: "Authentication",
    desc: "Authentication checks whether a user is who they claim to be. It usually involves checking credentials like username/email and password. If valid, a session or token is issued. This is the gatekeeper to your app’s private areas. Without authentication, anyone could access user-specific or admin-only data. Libraries like Passport.js simplify common strategies.",
    level: 3,
    x: 250,
    y: 450,
    image: "/lands/authentication.png"
  },
  {
    title: "Authorization",
    desc: "Authorization decides what an authenticated user is allowed to do. It enforces access rules — like who can delete a post or view admin panels. This often uses role-based access control (RBAC). For example, a 'student' may view courses, but only a 'teacher' can edit them. You implement it after authentication, often inside route logic or middleware.",
    level: 4,
    x: 850,
    y: 550,
    image: "/lands/authentication.png"
  },
  {
    title: "Database",
    desc: "The database stores your app’s data persistently — users, posts, messages, etc. You can use relational databases like MySQL/PostgreSQL or NoSQL ones like MongoDB. You'll write queries to create, read, update, and delete records (CRUD). Indexes improve performance, and relationships link tables together. It's the backbone of most full-stack apps.",
    level: 5,
    x: 450,
    y: 700,
    image: "/lands/database.png"
  },
  {
    title: "REST APIs",
    desc: "REST (Representational State Transfer) defines how clients and servers communicate. Each endpoint represents a resource — like `/users` or `/projects/42`. You use HTTP methods to interact: GET to read, POST to create, PUT/PATCH to update, DELETE to remove. RESTful design keeps your backend intuitive, predictable, and scalable.",
    level: 6,
    x: 1200,
    y: 850,
    image: "/lands/rest-apis.png"
  },
  {
    title: "Error Handling",
    desc: "Error handling catches bugs or unexpected situations gracefully — so your app doesn't crash. In Express, you can define custom error-handling middleware. You might log the error, return a helpful message, and set a proper status code (like 404 or 500). This keeps the user experience smooth even when something goes wrong.",
    level: 7,
    x: 320,
    y: 1000,
    image: "/lands/error-handling.png"
  },
  {
    title: "Session vs JWT",
    desc: "Sessions store authentication info on the server. JWTs (JSON Web Tokens) store it in the browser and validate it on each request. Sessions are easier to invalidate, but scale poorly. JWTs are stateless, easier to scale, but require extra care with expiration and security. Choose based on your app's architecture and needs.",
    level: 8,
    x: 950,
    y: 1150,
    image: "/lands/session-jwt.png"
  },
  {
    title: "WebSockets",
    desc: "WebSockets enable two-way, real-time communication between client and server. Unlike HTTP, which is request-response based, WebSockets keep a persistent connection open. They're perfect for chat apps, multiplayer games, live notifications, or collaborative editing. Tools like Socket.io simplify implementation in Node.js.",
    level: 9,
    x: 350,
    y: 1300,
    image: "/lands/websockets.png"
  },
  {
    title: "Security",
    desc: "Security protects your app from threats like XSS, CSRF, SQL injection, brute-force attacks, etc. You’ll use HTTPS, input validation, proper error messages, rate limiting, and helmet/cors middleware. Never trust client-side input blindly. A secure app protects both your data and your users’ privacy.",
    level: 10,
    x: 1300,
    y: 1450,
    image: "/lands/security.png"
  },
  {
    title: "Deployment",
    desc: "Deployment takes your local app and makes it accessible online. Platforms like Vercel, Render, Railway, or traditional cloud servers (AWS/EC2, DigitalOcean) are common. You'll handle environment variables, build steps, CI/CD, and sometimes Docker. A successful deployment means your app is ready for real users!",
    level: 11,
    x: 700,
    y: 1600,
    image: "/lands/deployment.png"
  }
];






export default function ServerMap() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [open, setOpen] = useState(false);
  const [activeConcept, setActiveConcept] = useState(null);

  const openModal = (concept) => {
    setActiveConcept(concept);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (activeConcept?.level === currentLevel) {
      setCurrentLevel((prev) => prev + 1);
    }
  };

  return (
    <div className="map-wrapper">
  <div
    className="bg-blur"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.png'})`,
    }}
  />
      <div className="map-scroll">
        <svg className="map-path">
          {concepts.map((concept, i) => {
            const next = concepts[i + 1];
            if (!next || concept.level >= currentLevel) return null;
            return (
              <path
                key={`path-${i}`}
                d={`M${concept.x},${concept.y} C${concept.x},${(concept.y + next.y) / 2} ${next.x},${(concept.y + next.y) / 2} ${next.x},${next.y}`}
                stroke="#00ffff"
                strokeWidth="3"
                fill="none"
                className="map-line"
              />
            );
          })}
        </svg>

        {concepts.map((concept, i) => {
          const unlocked = concept.level <= currentLevel;

          return (
            <motion.div
              key={concept.title}
              className={`map-node ${unlocked ? "unlocked" : "locked"}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => unlocked && openModal(concept)}
              style={{
                left: concept.x,
                top: `${concept.y}px`,
              }}
            >
             <div
  className={`map-node-img ${unlocked ? 'unlocked' : 'locked'}`}
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL + (unlocked ? concept.image : '/locked.png')})`,
  }}
>
  {unlocked ? (
    <div className="level-badge">{concept.level}</div>
  ) : (
    <div className="lock-icon">🔒</div>
  )}
  <div className="label">{concept.title}</div>
</div>


            </motion.div>
          );
        })}

        <ConceptModal
          show={open}
          onClose={handleClose}
          title={activeConcept?.title}
          content={<p>{activeConcept?.desc}</p>}
        />
      </div>
      <AvatarGuide />
    </div>
  );
}
