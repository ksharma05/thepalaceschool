import React from 'react';
import LeadershipDetailTemplate from '../../components/leadership/LeadershipDetailTemplate';
import { leadershipProfiles } from '../../utils/leadershipProfiles';

const ViceChairpersonPage: React.FC = () => (
  <LeadershipDetailTemplate profile={leadershipProfiles['vice-chairperson']} />
);

export default ViceChairpersonPage;
