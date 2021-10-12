import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../actions/signin";
import * as types from "../actions/types";
import fetchMock from "fetch-mock";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("test signin reducer", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should logging request ", () => {
      fetchMock.get
  });
});
