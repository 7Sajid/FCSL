import * as z from "zod";

export const accountTypeSchema = z.object({
  accountType: z.enum(["Individual", "Joint", "NRB", "Foreign Investor"], {
    message: "Please select an account type",
  }),
});

export const branchSchema = z.object({
  branch: z.string().min(1, "Please select a branch"),
});

export const applicantSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  fatherName: z.string().min(2, "Father's name is required"),
  motherName: z.string().min(2, "Mother's name is required"),
  spouseName: z.string().optional(),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["Male", "Female", "Other"], { message: "Gender is required" }),
  profession: z.string().min(2, "Profession is required"),
  nationality: z.string().min(2, "Nationality is required"),
  nid: z.string().min(10, "Valid NID is required"),
  passport: z.string().optional(),
  tin: z.string().optional(),
  phone: z.string().min(11, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
});

export const addressSchema = z.object({
  presentAddress: z.string().min(5, "Present address is required"),
  presentDistrict: z.string().min(2, "District is required"),
  presentPostal: z.string().min(4, "Postal code is required"),
  presentCountry: z.string().min(2, "Country is required"),
  permanentAddress: z.string().min(5, "Permanent address is required"),
  permanentDistrict: z.string().min(2, "District is required"),
  permanentPostal: z.string().min(4, "Postal code is required"),
  permanentCountry: z.string().min(2, "Country is required"),
});

export const documentsSchema = z.object({
  photoUrl: z.string().optional(),
  signatureUrl: z.string().optional(),
  nidUrl: z.string().optional(),
  tinUrl: z.string().optional(),
});

export const bankSchema = z.object({
  bankName: z.string().min(2, "Bank name is required"),
  branchName: z.string().min(2, "Branch name is required"),
  accountNumber: z.string().min(5, "Account number is required"),
  routingNumber: z.string().min(9, "Valid routing number is required"),
});

export const nomineeSchema = z.object({
  nomineeName: z.string().min(2, "Nominee name is required"),
  relationship: z.string().min(2, "Relationship is required"),
  percentage: z.number().min(1).max(100),
  isMinor: z.boolean().optional(),
  guardianName: z.string().optional(),
});

export const declarationSchema = z.object({
  acceptedTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
  riskAcknowledged: z.boolean().refine(val => val === true, {
    message: "You must acknowledge the risks",
  }),
});

export const jointApplicantSchema = z.object({
  jointName: z.string().optional(),
  jointDob: z.string().optional(),
  jointNid: z.string().optional(),
  jointPhone: z.string().optional(),
});

export const existingBOSchema = z.object({
  hasExistingBO: z.boolean().optional(),
  existingBroker: z.string().optional(),
  existingBoId: z.string().optional(),
});

// Master Schema combining all steps for full validation
export const boApplicationSchema = z.object({
  ...accountTypeSchema.shape,
  ...branchSchema.shape,
  ...applicantSchema.shape,
  ...addressSchema.shape,
  ...documentsSchema.shape,
  ...jointApplicantSchema.shape,
  ...existingBOSchema.shape,
  ...bankSchema.shape,
  ...nomineeSchema.shape,
  ...declarationSchema.shape,
});

export type BOApplicationData = z.infer<typeof boApplicationSchema>;
