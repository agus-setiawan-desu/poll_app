// helper functions that handle firebase connection
import firebase from 'firebase';

// get collection
export async function fetchCollection(collection) {
  const fetchedData = [];
  const snapshot = await firebase
    .firestore()
    .collection(collection)
    .get();
  snapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    fetchedData.push(data);
  });
  try {
    console.log(fetchedData);
    return fetchedData;
  } catch (err) {
    throw err;
  }
}

// Add Data to collection
export async function AddData(collection, payload) {
  const res = await firebase
    .firestore()
    .collection(collection)
    .add(payload);
  try {
    return res.id;
  } catch (err) {
    throw err;
  }
}

// Update specific Data: collection + id -> set
