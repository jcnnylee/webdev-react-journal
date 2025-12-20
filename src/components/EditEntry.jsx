import { useState } from "react";

function EditEntry({ entry, updateEntry, onClose }) {
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry(entry.id, title, content);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default EditEntry;
