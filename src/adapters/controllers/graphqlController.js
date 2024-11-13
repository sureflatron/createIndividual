const { buildSchema } = require("graphql");
const createUser = require("./../../application/useCases/createUser");

// Definir el esquema GraphQL
const schema = buildSchema(`
    type Query {
      _: Boolean
    }
  
    type Mutation {
      individualCreate(input: IndividualInput!, sync: Int!): IndividualResponse
    }
  
    input IndividualInput {
      included: InstanceInput
    }
  
    input InstanceInput {
      newInstance: AttributesInput
    }
  
    input AttributesInput {
      attributes: IndividualAttributes
      included: IncludedInput
    }
  
    input IndividualAttributes {
      familyName: String!
      givenName: String!
      nationality: String!
      dateOfBirth: String!
    }
  
    input IncludedInput {
      identifications: IdentificationInput
    }
  
    input IdentificationInput {
      attributes: IdentificationAttributes
    }
  
    input IdentificationAttributes {
      identificationId: String!
      identificationType: IdentificationType!
      validFor: ValidForInput
    }
  
    input ValidForInput {
      startDatetime: String!
    }
  
    enum IdentificationType {
      CC
      PASSPORT
      DRIVER_LICENSE
    }
  
    type IndividualResponse {
      id: String
      lifecycleStatus: String
      requestedAt: String
    }
  `);

const root = {
  individualCreate: async ({ input, sync }) => {
    try {
      const response = await createUser(input);
      return {
        id: response._id.toString(),
        lifecycleStatus: "accepted",
        requestedAt: new Date().toISOString(),
      };
    } catch (error) {
      throw new Error("El registro ya existe");
    }
  },
};

module.exports = { schema, root };
