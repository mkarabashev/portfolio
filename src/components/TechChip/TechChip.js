import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import './TechChip.css';

const TechChip = ({ label, icon}) => (
  <Chip backgroundColor="#C6FF00" className="chip">
    {icon &&
      <Avatar backgroundColor="#C6FF00" color="black"><i className={icon} /></Avatar>      
    }
    {label}
  </Chip>
);

export default TechChip;
