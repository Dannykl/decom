import React from "react";
import { Delivery } from "../components/Delivery";
import AsyncSelect from "react-select/async";
import Select from "react-select";

const colourOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class UserContainer extends React.Component {


  //dispatch postcode

  //handle delivery form

  //handle payment form

  render() {
    return (
      <Delivery />
    );
  }
}

export default UserContainer;
