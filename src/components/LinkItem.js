import React, { useState } from "react";
import { motion } from "framer-motion";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditLinkModal from "./EditLinkModal";

function LinkItem({
  onRemove,
  link,
  index,
  currentPage,
  linksPerPage,
  linkArr,
  setLinkArr,
}) {
  // state for the modal
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex items-center mt-2 relative">
      <motion.a
        href={link.link}
        className="flex justify-center items-center bg-slate-900 text-slate-100 rounded-3xl flex-1 h-32 tracking-wide"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
      >
        <motion.span
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 130 }}
          viewport={{ once: true }}
        >
          {link.linkTitle}
        </motion.span>
      </motion.a>

      {/* Edit button */}
      <motion.button
        className="rounded-3xl text-sm px-1 absolute bottom-2 right-2 flex justify-center items-center"
        onClick={() => {
          handleOpen();
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <EditOutlined style={{ fontSize: "18px", color: "#dbedec" }} />
      </motion.button>

      {/* Delete button */}
      <motion.button
        className="rounded-3xl text-sm px-1 absolute bottom-2 left-2 flex justify-center items-center"
        onClick={() => onRemove(index + (currentPage - 1) * linksPerPage)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
      >
        <DeleteOutlined style={{ fontSize: "18px", color: "#dbedec" }} />
      </motion.button>

      {/* EditLinkModal component */}
      {isOpen && (
        <EditLinkModal
          link={link}
          linkTitle={link.linkTitle}
          index={index}
          handleClose={handleClose}
          setLinkArr={setLinkArr}
          linkArr={linkArr}
        />
      )}
    </div>
  );
}

export default LinkItem;
