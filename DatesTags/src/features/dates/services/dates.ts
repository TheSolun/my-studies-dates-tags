import firebase from '../../shared/services/firebase';
import {IDate, Tag} from '../types/dates.types';

export const fetchTags = async (): Promise<Tag[]> => {
  const allTagsDocuments = (await firebase.firestore().collection('tags').get())
    .docs;
  return allTagsDocuments.map((doc: {id: any}) => doc.id);
};

export const fetchDates = async (): Promise<IDate[]> => {
  const allDatesDocuments = (
    await firebase.firestore().collection('dates').get()
  ).docs;
  const allDatesHasTagsDocuments = (
    await firebase.firestore().collection('dates_has_tags').get()
  ).docs;
  const allTags = await fetchTags();
  return allDatesDocuments.map(dateDocument => ({
    date: new Date(dateDocument.id),
    description: dateDocument.data().description,
    tags: allDatesHasTagsDocuments
      .filter(doc => doc.data().date === dateDocument.id)
      .map(doc => allTags.find(tag => tag === doc.data().tag)!),
  }));
};
