import { useState } from "react";
import JournalForm from "../components/JournalForm";
import JournalList from "../components/JournalList";

function JournalPage() {
  const [entries, setEntries] = useState([]);

  const addEntry = (title, content) => {
    const newEntry = {
      id: Date.now(),
      title,
      content,
    };
    setEntries([...entries, newEntry]);
  };

  const updateEntry = (id, updatedTitle, updatedContent) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, title: updatedTitle, content: updatedContent } : entry
      )
    );
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div>
      <h1>My Journal</h1>
      <JournalForm addEntry={addEntry} />
      <JournalList
        entries={entries}
        updateEntry={updateEntry}
        deleteEntry={deleteEntry}
      />
    </div>
  );
}

export default JournalPage;
