import React, { useEffect, useState } from 'react';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import './PlanPage.css';
import { CircularProgress, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Category, Note, Plan } from '../../types/uniekModels';
import PlanDetails from '../PlanDetails/PlanDetails';

const T: { [key: string]: string } = {
  error: 'An error has occured while loading the content.',
  userLabel: 'created by:',
  backToPlansList: 'Back to my plans',
};

const PlanPage:React.FC = ():JSX.Element => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [error, setError] = useState<Error | AxiosError |null>(null);

  const filteredCategories:Category[] = categories ? categories.filter(
    (category:Category) => !category.isArchived,
  ).filter(
    (category:Category) => category.groupPlanId === plan?.id,
  )
    : [];

  useEffect(() => {
    setLoading(true);
    Promise.all([
      Axios.get('http://localhost:3001/plan'),
      Axios.get('http://localhost:3001/notes'),
      Axios.get('http://localhost:3001/categories'),
    ])
      .then(
        (responses:AxiosResponse[]) => {
          setPlan(new Plan(responses[0].data));
          setNotes(responses[1].data.map((data:any) => new Note(data)));
          setCategories(responses[2].data.map((data:any) => new Category(data)));
          setLoading(false);
        },
        (APIerror) => {
          setError(APIerror);
          setLoading(false);
        },
      );
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div className="plan-page">{error && T.error}</div>;
  }

  return (
    <div className="plan-page">
      <Link
        className="plan-page--back-button"
        href="http://localhost:3000/"
      >
        <ArrowBackIcon />
        {T.backToPlansList}
      </Link>
      <div className="plan-page--title-box">
        <h1 className="plan-page--title">
          {plan?.name}
        </h1>
        <p className="plan-page--created-by">
          {T.userLabel}
          {plan?.userCreated}
        </p>
      </div>
      <PlanDetails
        notes={notes}
        categories={filteredCategories}
      />
    </div>
  );
};

export default PlanPage;
