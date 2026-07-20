import React from 'react';
import LeadershipDetailTemplate from '../../components/leadership/LeadershipDetailTemplate';
import { leadershipProfiles } from '../../utils/leadershipProfiles';

const RajmataSahibPage: React.FC = () => (
  <LeadershipDetailTemplate profile={leadershipProfiles['rajmata-sahib']} />
);

export default RajmataSahibPage;
