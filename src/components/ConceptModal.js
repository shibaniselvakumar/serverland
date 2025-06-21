import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ConceptModal.css';

export default function ConceptModal({ show, onClose, title, content }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <button onClick={onClose} className="modal-close">
              ✖
            </button>
            <h2 className="modal-title">{title}</h2>
            <div className="modal-body">{content}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
