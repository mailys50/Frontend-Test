// Ejercicio 2 (3pts)
// Dado los siguientes json:​

// JSON
let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};
// JSON
let json = {
  data: {
    BUIN: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
    LAJA: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LEBU: {
      limit: 1,
      over_carrier_service_id: 1,
      under_carrier_service_id: 1,
    },
    LOTA: {
      limit: 1,
      over_carrier_service_id: 17,
      under_carrier_service_id: 17,
    },
  },
};

for (prop in json.data) {
  json.data[prop].over = values[json.data[prop].over_carrier_service_id];
  json.data[prop].under = values[json.data[prop].under_carrier_service_id];
  delete json.data[prop].over_carrier_service_id;
  delete json.data[prop].under_carrier_service_id;
}

let result = json.data;
console.log(result);
