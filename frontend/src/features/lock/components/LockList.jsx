import LockCard from "./LockCard";

const LockList = ({ locks, onDelete }) => {
  if (!locks.length) {
    return <p>No locks for this property.</p>;
  }

  return (
    <div>
      {locks.map((lock) => (
        <LockCard
          key={lock.id}
          lock={lock}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default LockList;