const GatewayDetailAPI = () => {
  return {
    GatewayDetail: {
      id: "1",
      name: "firstgateway",
      description: "my first own gateway",
      mac_address: "ABCDEFG",
      timezone: "Asia/Taipei",
      latitude: "23.947586",
      longtitude: "120.925016",
      openstatus: "0",
    },
    sensor: [
      {
        id: "1",
        name: "sensor1",
        description: "this is a description",
        type: "waterH",
      },
      {
        id: "2",
        name: "sensor2",
        description: "this is a description",
        type: "electric",
      },
    ],
  };
};

export default GatewayDetailAPI();
