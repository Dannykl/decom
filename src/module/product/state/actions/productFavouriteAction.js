import { FAVOURITE_ADD, FAVOURITE_REMOVE } from "./actionsTypes";

export function addFaviourite(data) {
  return {
    type: FAVOURITE_ADD,
    data
  };
}

export function removeFaviourite(data) {
  return {
    type: FAVOURITE_REMOVE,
    data
  };
}
