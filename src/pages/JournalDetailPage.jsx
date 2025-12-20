import { useLocation } from "react-router-dom";

function JournalDetailPage() {
  const { state } = useLocation();
  const { entry } = state;

  if (!entry) return <p>No entry selected.</p>;

  return (
    <div>
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
    </div>
  );
}

export default JournalDetailPage;
