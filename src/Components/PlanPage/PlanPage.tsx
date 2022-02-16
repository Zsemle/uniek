import React, { useEffect, useState } from 'react';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import './PlanPage.css';
import { Category, Note, Plan } from '../../types/uniekModels';

const T: { [key: string]: string } = {
  error: 'an error has occured',
  loading: 'data is loading now',
  planNameLabel: 'plan name:',
  userLabel: 'created by:',
};

const PlanPage:React.FC = ():JSX.Element => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [error, setError] = useState<Error | AxiosError |null>(null);

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

  return (
    <div className="plan-page">
      {error && T.error}
      {loading && T.loading}
      <p>
        {T.planNameLabel}
        {plan?.name}
      </p>
      <p>
        {T.userLabel}
        {plan?.userCreated}
      </p>
      {!!notes}
      {!!categories}
    </div>
  );
};

export default PlanPage;
