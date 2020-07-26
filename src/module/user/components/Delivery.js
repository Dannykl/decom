import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { ListOfAddress } from "../components/ListOfAddress";
import { InputBase, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const options = [
  { value: "chocolate", label: "CChocolate" },
  { value: "strawberry", label: "SStrawberry" },
  { value: "vanilla", label: "VVanilla" }
];

export const Delivery = () => {
  const [showModal, setshowModal] = React.useState(false);
  const [postcode, setPostCode] = React.useState("");

  const closeModal = () => {
    setshowModal(false);
  };

  const handleChange = e => {
    setPostCode(e.target.value.replace(/\s/g, ""));
  };

  const handleButton = () => {
    showModal ? closeModal() : setshowModal(true);
    console.log("postcode ", postcode);
    //   dispatch(checkPostcode(postcode));
  };

  const handleRemoveBox = () => {
    setPostCode("");
  };

  return (
    <div style={{ marginLeft: "100px" }}>
      {postcode !== "" ? (
        <IconButton
          className="clear-btn"
          id="clear-btn"
          size="small"
          type="submit"
          arial-label="search"
          onClick={handleRemoveBox}
        >
          <ClearIcon />
        </IconButton>
      ) : null}
      <TextField
        value={postcode}
        onChange={handleChange}
        placeholder="postcode"
      ></TextField>
      <Button
        onClick={handleButton}
        variant="outlined"
        disabled={postcode.length < 4 ? true : false}
      >
        Find My Address
      </Button>

      <ListOfAddress show={showModal} hide={closeModal} options={options} />
    </div>
  );
};
