import React from 'react';
import LeadershipDetailTemplate from '../../components/leadership/LeadershipDetailTemplate';
import { leadershipProfiles } from '../../utils/leadershipProfiles';

const FounderPage: React.FC = () => (
  <LeadershipDetailTemplate profile={leadershipProfiles.founder} />
);

export default FounderPage;
