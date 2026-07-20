import React from 'react';
import LeadershipDetailTemplate from '../../components/leadership/LeadershipDetailTemplate';
import { leadershipProfiles } from '../../utils/leadershipProfiles';

const PrincessGauravPage: React.FC = () => (
  <LeadershipDetailTemplate profile={leadershipProfiles['princess-gaurav']} />
);

export default PrincessGauravPage;
