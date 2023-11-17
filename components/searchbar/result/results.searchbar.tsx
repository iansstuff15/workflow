import { KBarResults, useMatches, NO_GROUP } from 'kbar';
const Results = () => {
  const { results } = useMatches();
  const groupNameStyle = {
    padding: '8px 16px',
    fontSize: '10px',
    textTransform: 'uppercase' as const,
    opacity: 0.5,
  };
  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="bg-white">{item}</div>
        ) : (
          <div className="color-background" style={groupNameStyle}>
            {item.name}
          </div>
        )
      }
    />
  );
};

export default Results;
