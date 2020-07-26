import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import Select from "react-select";

export const ListOfAddress = ({ show, hide, options }) => {
  const [selectedItem] = React.useState("");

  return (
    <Modal
      show={show}
      onHide={hide}
      className="modal"
      style={{ width: "100%" }}
    >
      <Modal.Dialog
        style={{ paddingLeft: "15px", paddingRight: "15px", width: "100%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{"Title"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Select
            id="modal-drop-down"
            onChange={e => this.setState({ selectedItem: e.value })}
            options={options}
            placeholder="Select ..."
          />
        </Modal.Body>
        <Modal.Footer
          style={{ display: "inline-block" }}
          className="modal-footer"
        >
          {/* <Button disabled={clicked || isSaved ? true : false} onClick={hide}>
            Close
          </Button> */}
          <Button
          // onClick={() => {
          //   onSave(passenger, selectedItem);
          //   this.setState({ clicked: true });
          // }}
          >
            {/* {isSaved ? "Saving..." : "Save"} */}
            Save
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

ListOfAddress.propTypes = {
  show: PropTypes.bool,
  hide: PropTypes.func,
  options: PropTypes.array
};
