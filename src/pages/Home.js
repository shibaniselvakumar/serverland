import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">

      <div className="home-glass">
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to ServerLand 🖥️
        </motion.h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Your interactive playground for mastering server-side engineering!
        </motion.p>

        <motion.p
          className="home-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Dive into topics like Routing, Middleware, Authentication, WebSockets, and more —
          all presented as levels in a sci-fi themed map. Unlock concepts as you progress,
          and watch your backend powers grow! 💡
        </motion.p>

        <div className="home-features">
          <div className="feature-card">⚡ Fast Learning</div>
          <div className="feature-card">🧩 Modular Topics</div>
          <div className="feature-card">🎮 Interactive </div>
          <div className="feature-card">🌐 Real-world Skills</div>
        </div>

        <Link to="/servermap">
          <button className="home-button">
            Enter Server Land 🚪
          </button>
        </Link>

        <p className="home-footer">“Servers aren’t scary when they look this cool.” 🔧</p>
      </div>
    </div>
  );
}
