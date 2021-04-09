const yup = require("yup");

const NewCustomUserSchema = new yup.ObjectSchema({
  name: yup.string().trim().min(1).required(),
  email: yup.string().email().trim().required(),
  password: yup.string().trim().min(6).required(),
  occupation: yup.string().trim().min(1).required(),
  phone: yup.string().trim().min(1).required(),
  type: yup
    .string()
    .trim()
    .oneOf(["custom", "linkedin", "google", "facebook"])
    .required(),
});

const UserLoginSchema = new yup.ObjectSchema({
  email: yup.string().email().trim().required(),
  password: yup.string().trim().required(),
});

const LinkedInUserSchema = new yup.ObjectSchema({
  name: yup.string().trim().min(1).required(),
  id: yup.string().trim().min(1).required(),
  type: yup
    .string()
    .trim()
    .oneOf(["custom", "linkedin", "google", "facebook"])
    .required(),
});

const GoogleUserSchema = new yup.ObjectSchema({
  name: yup.string().trim().min(1).required(),
  id: yup.string().trim().min(1).required(),
  email: yup.string().email().trim().notRequired(),
  type: yup
    .string()
    .trim()
    .oneOf(["custom", "linkedin", "google", "facebook"])
    .required(),
});

const ContactUsSchema = new yup.ObjectSchema({
  firstName: yup.string().trim().min(1).required(),
  lastName: yup.string().trim().min(1).required(),
  companyName: yup.string().trim().min(1).required(),
  phoneNumber: yup.string().trim().min(1).required(),
  description: yup.string().trim().min(1).max(500).required(),
  workEmail: yup.string().trim().email().required(),
});

module.exports = {
  NewCustomUserSchema: NewCustomUserSchema,
  UserLoginSchema: UserLoginSchema,
  LinkedInUserSchema: LinkedInUserSchema,
  GoogleUserSchema: GoogleUserSchema,
  ContactUsSchema: ContactUsSchema,
};
