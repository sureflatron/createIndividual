const UserSnC = require("../../adapters/models/userSnCModel");
const User = require("../../domain/entities/User");

async function createUser(input) {

  const {
    included: {
      newInstance: {
        attributes: { familyName, givenName, nationality, dateOfBirth },
        included: {
          identifications: {
            attributes: {
              identificationId,
              identificationType,
              validFor: { startDatetime },
            },
          },
        },
      },
    },
  } = input;

  // Verificar si el usuario ya existe
  const existingUser = await UserSnC.findOne({
    identificationsIdentificationId: identificationId,
    identificationsIdentificationType: identificationType,
  });

  if (existingUser) {
    throw new Error("El registro ya existe");
  }

  const userEntity = new User({ familyName, givenName, nationality, dateOfBirth, identificationId, identificationType, startDatetime });
  const newUser = new UserSnC(userEntity);

  return await newUser.save();
}

module.exports = createUser;
