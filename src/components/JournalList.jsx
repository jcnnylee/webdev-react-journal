import JournalEntry from "./JournalEntry";

function JournalList({ entries, updateEntry, deleteEntry }) {
  if (!entries.length) return <p>No entries yet.</p>;

  return (
    <div>
      {entries.map((entry) => (
        <JournalEntry
          key={entry.id}
          entry={entry}
          updateEntry={updateEntry}
          deleteEntry={deleteEntry}
        />
      ))}
    </div>
  );
}

export default JournalList;
