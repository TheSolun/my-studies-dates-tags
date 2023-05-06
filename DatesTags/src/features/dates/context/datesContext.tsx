import React, {createContext, useContext, useEffect, useState} from 'react';
import {IDate, IDatesContextDate, Tag} from '../types/dates.types';
import {fetchDates, fetchTags} from '../services/dates';

const DatesContext = createContext({} as IDatesContextDate);

interface IDatesProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const DatesProvider = ({children}: IDatesProviderProps): JSX.Element => {
  const [dates, setDates] = useState<IDate[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  const loadDates = async () => {
    const newDates = await fetchDates();
    if (newDates.length) {
      setDates(newDates);
    }
  };

  const loadTags = async () => {
    const newTags = await fetchTags();
    if (newTags.length) {
      setTags(newTags);
    }
  };

  useEffect(() => {
    if (!dates.length) {
      loadDates();
    }
  }, [dates.length]);

  useEffect(() => {
    if (!tags.length) {
      loadTags();
    }
  }, [tags.length]);

  const value: IDatesContextDate = {
    state: {dates, tags},
  };

  return (
    <DatesContext.Provider value={value}>{children}</DatesContext.Provider>
  );
};

export const useDates = () => useContext(DatesContext);
