import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # QUERIES
  type Query {
    getAllHackers: [Hacker]
    getHacker(email: String!): Hacker
    getAllPartners: [Partner]
    getPartner(email: String!): Partner
    getAllMentors: [Mentor]
    getMentor(email: String!): Mentor
  }
  # MUTATIONS
  type Mutation {
    addHacker(input: HackerInput): Hacker
    addPartner(input: PartnerInput): Partner
    addMentor(input: MentorInput): Mentor
    updateHacker(email: String!, input: HackerInput): Hacker
    updatePartner(email: String!, input: PartnerInput): Partner
    updateMentor(email: String!, input: MentorInput): Mentor
  }
  # OBJECTTYPES
  type Hacker {
    id: String!
    email: String!
    firstName: String!
    lastName: String!
    website: String
    github: String
    linkedIn: String
    yearsOfSoftwareExperience: Int!
    ethExperienceLevel: ETHExperience!
    motivation: hackerMotivation!
    priorBuilds: String
    lookingToBuild: String
    rulesAccepted: Boolean
    applicationStatus: applicationStatus!
  }
  type Partner {
    id: String!
    email: String!
    firstName: String!
    lastName: String!
    website: String
    linkedIn: String
    telegram: String
    twitter: String
    otherEvents: String
    rulesAccepted: Boolean
    applicationStatus: applicationStatus!
  }
  type Mentor {
    id: String!
    email: String!
    firstName: String!
    lastName: String!
    website: String
    github: String
    linkedIn: String
    telegram: String
    twitter: String
    yearsOfSoftwareExperience: Int!
    ethExperienceLevel: ETHExperience!
    priorMentor: String!
    motivation: String
    rulesAccepted: Boolean
    applicationStatus: applicationStatus!
  }
  # ENUMS
  enum ETHExperience {
    BEGINNER
    INTERMEDIATE
    EXPERT
  }
  enum hackerMotivation {
    ATTENDWORKSHOPS
    RESUMEBUILD
    GETBETTER
    MEETCOMPANIES
    MEETPEOPLE
    LAUNCHPRODUCT
    WINPRIZE
    OTHER
  }
  enum applicationStatus {
    PENDING
    REJECTED
    ACCEPTED
  }
  # INPUTS
  input HackerInput {
    email: String!
    firstName: String!
    lastName: String!
    website: String
    github: String
    linkedIn: String
    yearsOfSoftwareExperience: Int!
    ethExperienceLevel: ETHExperience!
    motivation: hackerMotivation!
    priorBuilds: String
    lookingToBuild: String
  }
  input PartnerInput {
    email: String!
    firstName: String!
    lastName: String!
    website: String
    linkedIn: String
    telegram: String
    twitter: String
    otherEvents: String
  }
  input MentorInput {
    email: String!
    firstName: String!
    lastName: String!
    website: String
    github: String
    linkedIn: String
    telegram: String
    twitter: String
    yearsOfSoftwareExperience: Int!
    ethExperienceLevel: ETHExperience!
    priorMentor: String!
    motivation: String
  }
`;