import React from 'react';
import { useSelector } from 'react-redux';
import CompetitionCard from './CompetitionCard';

const CompetitionList = () => {
  const competitions = useSelector(state => state.competitions);

  return (
    <div>
      {competitions.map(competition => (
        <CompetitionCard key={competition.id} competition={competition} />
      ))}
    </div>
  );
};

export default CompetitionList;
