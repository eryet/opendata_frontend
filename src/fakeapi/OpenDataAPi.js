const OpenDataAPI = () => {
  return {
    gatewayCount: "3",
    sensorCount: "3",
    gateway: [
      {
        id: "1",
        name: "firstgateway",
        description: "my first own gateway",
        mac_address: "ABCDEFG",
        timezone: "Asia/Taipei",
        latitude: "23.947586",
        longtitude: "120.925016",
        openstatus: "0",
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
      },
      {
        id: "2",
        name: "secondgateway",
        description: "my second own gateway",
        mac_address: "ABCDEFG",
        timezone: "Asia/Taipei",
        latitude: "23.947586",
        longtitude: "120.925016",
        openstatus: "0",
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
      },
      {
        id: "3",
        name: "thirdgateway",
        description: "my third own gateway",
        mac_address: "ABCDEFG",
        timezone: "Asia/Taipei",
        latitude: "23.947586",
        longtitude: "120.925016",
        openstatus: "0",
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
      },
    ],
  };
};

export default OpenDataAPI();
