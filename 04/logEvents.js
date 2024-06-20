const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) =



console.log(format(new Date(), "MM.dd.yyyy\tHH:mm:ss"));

console.log(uuid());
