import store from "../store/store";

const FETCH_DATA = "FETCH_DATA";
const FETCHED_DATA = "FETCHED_DATA";

export function fetchData() {
  return {
    type: FETCH_DATA,
  };
}

export function fetchedData(data) {
  return {
    type: FETCHED_DATA,
    payload: data,
  };
}

export function productsFetchApi(url) {
  store.dispatch(fetchData());
  return async function(dispatch, getState) {
    return await fetch(url)
      .then((data) => data.json())
      .then((data) => {
        dispatch(fetchedData(data))
      });
  };
}
