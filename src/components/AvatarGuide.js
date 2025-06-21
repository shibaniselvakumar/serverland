import { motion } from 'framer-motion';
import '../styles/AvatarGuide.css';


export default function AvatarGuide() {
  return (
    <motion.div className="avatar-guide"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <p className="text-sm">
        👋 Hey there! Click on any server rack to explore a core concept in server-side engineering!
      </p>
    </motion.div>
  );
}
