const CategoryScores = ({ scores }) => {
  return (
    <div className="flex flex-col items-center">
      <h2>Current Scores</h2>
      <ul className="flex gap-12">
        {Object.entries(scores).map(([category, score]) => (
          <li
            className="rounded-lg px-4 py-2 bg-slate-200 text-black"
            key={category}
          >
            {category}: {score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryScores;
