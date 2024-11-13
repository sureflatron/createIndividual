class User {
    constructor({
      familyName, givenName, nationality, dateOfBirth, identificationId, identificationType, startDatetime,
    }) {
      this.familyName = familyName;
      this.givenName = givenName;
      this.nationality = nationality;
      this.dateOfBirth = dateOfBirth;
      this.identificationsIdentificationId = identificationId;
      this.identificationsIdentificationType = identificationType;
      this.identificationsStartDatetime = startDatetime;
      this.createdAt = new Date();
      this.contactMediaStartDatetime = new Date();
      this._class = "IndividualClass";
    }
  }
  
  module.exports = User;
  