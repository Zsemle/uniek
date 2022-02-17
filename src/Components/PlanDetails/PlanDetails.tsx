import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category, Note } from '../../types/uniekModels';
import './PlanDetails.css';

const T: { [key: string]: string } = {
  categoriesTitle: 'Your subjects:',
  categoriesEmpty: 'Your subjects will be displayed here, once you have added them to your plan.',
  notesSectionTitle: 'Notes:',
  subCategoriesSectionTitle: 'Subjects within:',
};

export interface PlanDetailsProps {
  categories: Category[] | null
  notes: Note[] | null
}

const PlanDetails:React.FC<PlanDetailsProps> = ({ categories, notes }):JSX.Element => {
  function compareCategories(a:Category, b:Category):number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  function compareNotes(a:Note, b:Note):number {
    if (a.dateCreated < b.dateCreated) {
      return -1;
    }
    if (a.dateCreated > b.dateCreated) {
      return 1;
    }
    return 0;
  }

  if (categories?.length === 0) {
    return (
      <div className="plan-details">
        {T.categoriesEmpty}
      </div>
    );
  }

  return (
    <div className="plan-details">
      <h2>{T.categoriesTitle}</h2>
      {categories?.sort(compareCategories)
        .filter((category:Category) => !category.parentNoteCategoryId)
        .map((category:Category) => (
          <Accordion key={`category-${category.id}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel1-${category.id}-content`}
              id={`panel1-${category.id}-header`}
            >
              <Typography>{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <h4>{T.notesSectionTitle}</h4>
              <ul>
                {notes?.sort(compareNotes)
                  .filter((note:Note) => note.categoryId === category.id)
                  .map((note:Note) => <li key={`note-${note.id}`}>{note.content}</li>)}
              </ul>
              <h4>{T.subCategoriesSectionTitle}</h4>
              {categories
                .sort(compareCategories)
                .filter((subCategory:Category) => subCategory.parentNoteCategoryId === category.id)
                .map((subCategory:Category) => (
                  <Accordion
                    sx={{
                      backgroundColor: '#f1f1f1',
                    }}
                    key={`category-${subCategory.id}`}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel1-${subCategory.id}-content`}
                      id={`panel1-${subCategory.id}-header`}
                    >
                      <Typography>{subCategory.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h4>{T.notesSectionTitle}</h4>
                      <ul>
                        {notes?.sort(compareNotes)
                          .filter((note:Note) => note.categoryId === subCategory.id)
                          .map((note:Note) => <li key={`note-${note.id}`}>{note.content}</li>)}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                ))}
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default PlanDetails;
