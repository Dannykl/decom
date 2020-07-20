import { SEARCH_ADD, SEARCH_REMOVE } from "./types";

export function addSearch(data) {
  return {
    type: SEARCH_ADD,
    payload: data
  };
}

export function removeSearch(data) {
  return {
    type: SEARCH_REMOVE,
    payload: data
  };
}
