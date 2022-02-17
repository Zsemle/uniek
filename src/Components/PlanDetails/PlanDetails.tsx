import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category, Note } from '../../types/uniekModels';
import './PlanDetails.css';

const T: { [key: string]: string } = {
  categoriesTitle: 'Your subjects:',
  categoriesEmpty: 'Your subjects will be displayed here, once you have added them to your plan.',
};

interface PlanDetailsProps {
  categories: Category[] | null
  notes: Note[] | null
}

const PlanDetails:React.FC<PlanDetailsProps> = ({ categories, notes }):JSX.Element => {
  if (!categories || !notes) {
    return (
      <CircularProgress />
    );
  }

  if (categories.length === 0) {
    return (
      <div>
        {T.categoriesEmpty}
      </div>
    );
  }

  return (
    <div className="plan-details">
      <h2>{T.categoriesTitle}</h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
};

export default PlanDetails;
