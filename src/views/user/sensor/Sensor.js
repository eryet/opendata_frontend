import React from "react";
import { useParams } from "react-router-dom";

// component
import AddToGroup from "./AddToGroup";

const fakeSensorAPI = [
  {
    Name: "Sensor1",
    Status: "Active",
  },
];

// sensor table with all sensor name, hyperlinked
const Sensor = () => {
  let { id } = useParams();

  return (
    <>
      <h1>This page is Sensor Page</h1>
      <AddToGroup />
      <h1>{`render sensor number ${id}`}</h1>
    </>
  );
};

export default Sensor;
