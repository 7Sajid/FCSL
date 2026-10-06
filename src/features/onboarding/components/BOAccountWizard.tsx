"use client";
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { boApplicationSchema, BOApplicationData } from '../schema';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  "Account Type", "Branch", "Applicant", "Address", "Documents", 
  "Joint Applicant", "Existing BO", "Bank", "Nominee", "Review", "Declaration", "Submit"
];

const ACCOUNT_TYPES = [
  { id: "Individual", label: "Individual Account", desc: "For single applicants" },
  { id: "Joint", label: "Joint Account", desc: "For two applicants together" },
  { id: "NRB", label: "NRB Account", desc: "For Non-Resident Bangladeshis" },
  { id: "Foreign Investor", label: "Foreign Investor", desc: "For foreign individuals or entities" }
];

export default function BOAccountWizard() {
  const [step, setStep] = useState(0);

  const methods = useForm<BOApplicationData>({
    resolver: zodResolver(boApplicationSchema),
    mode: "onChange",
    defaultValues: {
      isMinor: false,
    }
  });

  const { handleSubmit, formState: { errors }, watch, setValue } = methods;
  const currentAccountType = watch("accountType");

  const nextStep = () => setStep(s => Math.min(STEPS.length - 1, s + 1));
  const prevStep = () => setStep(s => Math.max(0, s - 1));

  const onSubmit = (data: BOApplicationData) => {
    console.log("Form Submitted Successfully:", data);
    nextStep();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Progress */}
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex justify-between text-sm font-medium">
            <span>Step {step + 1} of {STEPS.length}</span>
            <span className="text-primary">{STEPS[step]}</span>
          </div>
          <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        <Card className="shadow-lg border-muted">
          <CardContent className="p-8 min-h-[400px]">
            <h2 className="text-2xl font-bold mb-6 text-primary">{STEPS[step]}</h2>
            
            {/* STEP 1: ACCOUNT TYPE */}
            {step === 0 && (
              <div className="space-y-4">
                <p className="text-muted-foreground mb-4">Please select the type of Beneficiary Owner (BO) account you wish to open.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ACCOUNT_TYPES.map((type) => (
                    <div 
                      key={type.id}
                      onClick={() => setValue("accountType", type.id as BOApplicationData["accountType"], { shouldValidate: true })}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        currentAccountType === type.id 
                          ? 'border-primary bg-primary/5 shadow-sm' 
                          : 'border-muted hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{type.label}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{type.desc}</p>
                        </div>
                        {currentAccountType === type.id && (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {errors.accountType && (
                  <p className="text-destructive text-sm mt-2">{errors.accountType.message as string}</p>
                )}
              </div>
            )}

            {/* STEP 2: BRANCH SELECTION */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-muted-foreground mb-4">Please select the branch where you would like to maintain your account.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Dhaka Principal Branch", 
                    "Chattogram Branch", 
                    "Sylhet Branch", 
                    "Rajshahi Branch", 
                    "Digital Branch (Online)"
                  ].map((branchName) => (
                    <div 
                      key={branchName}
                      onClick={() => setValue("branch", branchName, { shouldValidate: true })}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        watch("branch") === branchName 
                          ? 'border-primary bg-primary/5 shadow-sm' 
                          : 'border-muted hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{branchName}</h3>
                        {watch("branch") === branchName && (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {errors.branch && (
                  <p className="text-destructive text-sm mt-2">{errors.branch.message as string}</p>
                )}
              </div>
            )}

            {/* STEP 3: APPLICANT DETAILS */}
            {step === 2 && (
              <div className="space-y-6">
                <p className="text-muted-foreground mb-4">Please provide your personal details exactly as they appear on your NID/Passport.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input 
                      {...methods.register("name")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      placeholder="e.g. John Doe" 
                    />
                    {errors.name && <p className="text-destructive text-xs">{errors.name.message as string}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Father&apos;s Name</label>
                    <input 
                      {...methods.register("fatherName")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.fatherName && <p className="text-destructive text-xs">{errors.fatherName.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mother&apos;s Name</label>
                    <input 
                      {...methods.register("motherName")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.motherName && <p className="text-destructive text-xs">{errors.motherName.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Spouse&apos;s Name (Optional)</label>
                    <input 
                      {...methods.register("spouseName")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.spouseName && <p className="text-destructive text-xs">{errors.spouseName.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date of Birth</label>
                    <input 
                      type="date"
                      {...methods.register("dob")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.dob && <p className="text-destructive text-xs">{errors.dob.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Gender</label>
                    <select 
                      {...methods.register("gender")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-destructive text-xs">{errors.gender.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Profession</label>
                    <input 
                      {...methods.register("profession")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.profession && <p className="text-destructive text-xs">{errors.profession.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nationality</label>
                    <input 
                      {...methods.register("nationality")} 
                      defaultValue="Bangladeshi"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.nationality && <p className="text-destructive text-xs">{errors.nationality.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">National ID (NID)</label>
                    <input 
                      {...methods.register("nid")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.nid && <p className="text-destructive text-xs">{errors.nid.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Passport Number (Optional)</label>
                    <input 
                      {...methods.register("passport")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">TIN Number (Optional)</label>
                    <input 
                      {...methods.register("tin")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                  </div>
                  
                  <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-4 mt-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Mobile Phone</label>
                      <input 
                        {...methods.register("phone")} 
                        placeholder="e.g. 01700000000"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.phone && <p className="text-destructive text-xs">{errors.phone.message as string}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <input 
                        type="email"
                        {...methods.register("email")} 
                        placeholder="john@example.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.email && <p className="text-destructive text-xs">{errors.email.message as string}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: ADDRESS DETAILS */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Present Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2 space-y-2">
                      <label className="text-sm font-medium">Street Address / House / Road</label>
                      <textarea 
                        {...methods.register("presentAddress")} 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.presentAddress && <p className="text-destructive text-xs">{errors.presentAddress.message as string}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">District / City</label>
                      <input 
                        {...methods.register("presentDistrict")} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.presentDistrict && <p className="text-destructive text-xs">{errors.presentDistrict.message as string}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Postal / Zip Code</label>
                      <input 
                        {...methods.register("presentPostal")} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.presentPostal && <p className="text-destructive text-xs">{errors.presentPostal.message as string}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Country</label>
                      <input 
                        {...methods.register("presentCountry")} 
                        defaultValue="Bangladesh"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.presentCountry && <p className="text-destructive text-xs">{errors.presentCountry.message as string}</p>}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <h3 className="text-lg font-semibold">Permanent Address</h3>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="sameAsPresent"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        onChange={(e) => {
                          if (e.target.checked) {
                            methods.setValue("permanentAddress", methods.getValues("presentAddress"), { shouldValidate: true });
                            methods.setValue("permanentDistrict", methods.getValues("presentDistrict"), { shouldValidate: true });
                            methods.setValue("permanentPostal", methods.getValues("presentPostal"), { shouldValidate: true });
                            methods.setValue("permanentCountry", methods.getValues("presentCountry"), { shouldValidate: true });
                          }
                        }}
                      />
                      <label htmlFor="sameAsPresent" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Same as Present
                      </label>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2 space-y-2">
                      <label className="text-sm font-medium">Street Address / House / Road</label>
                      <textarea 
                        {...methods.register("permanentAddress")} 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.permanentAddress && <p className="text-destructive text-xs">{errors.permanentAddress.message as string}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">District / City</label>
                      <input 
                        {...methods.register("permanentDistrict")} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.permanentDistrict && <p className="text-destructive text-xs">{errors.permanentDistrict.message as string}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Postal / Zip Code</label>
                      <input 
                        {...methods.register("permanentPostal")} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.permanentPostal && <p className="text-destructive text-xs">{errors.permanentPostal.message as string}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Country</label>
                      <input 
                        {...methods.register("permanentCountry")} 
                        defaultValue="Bangladesh"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.permanentCountry && <p className="text-destructive text-xs">{errors.permanentCountry.message as string}</p>}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: DOCUMENTS */}
            {step === 4 && (
              <div className="space-y-6">
                <p className="text-muted-foreground mb-4">Please upload clear, legible copies of the following documents. Max size: 5MB per file.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Photo */}
                  <div className="space-y-2 p-4 border rounded-xl bg-card">
                    <label className="text-sm font-semibold">Applicant Photo <span className="text-destructive">*</span></label>
                    <p className="text-xs text-muted-foreground mb-2">Recent passport size color photograph.</p>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 border-muted-foreground/25">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-2 text-muted-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span></p>
                          <p className="text-xs text-muted-foreground">PNG, JPG</p>
                        </div>
                        <input type="file" className="hidden" accept="image/png, image/jpeg" />
                      </label>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="space-y-2 p-4 border rounded-xl bg-card">
                    <label className="text-sm font-semibold">Signature <span className="text-destructive">*</span></label>
                    <p className="text-xs text-muted-foreground mb-2">Clear scan of your signature on white paper.</p>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 border-muted-foreground/25">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-2 text-muted-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span></p>
                          <p className="text-xs text-muted-foreground">PNG, JPG</p>
                        </div>
                        <input type="file" className="hidden" accept="image/png, image/jpeg" />
                      </label>
                    </div>
                  </div>

                  {/* NID */}
                  <div className="space-y-2 p-4 border rounded-xl bg-card">
                    <label className="text-sm font-semibold">National ID (NID) <span className="text-destructive">*</span></label>
                    <p className="text-xs text-muted-foreground mb-2">Front and back copy combined or PDF.</p>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 border-muted-foreground/25">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-2 text-muted-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span></p>
                          <p className="text-xs text-muted-foreground">PDF, PNG, JPG</p>
                        </div>
                        <input type="file" className="hidden" accept=".pdf,image/png,image/jpeg" />
                      </label>
                    </div>
                  </div>

                  {/* TIN/Others */}
                  <div className="space-y-2 p-4 border rounded-xl bg-card">
                    <label className="text-sm font-semibold">TIN Certificate (Optional)</label>
                    <p className="text-xs text-muted-foreground mb-2">Recommended for tax rebate benefits.</p>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 border-muted-foreground/25">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-2 text-muted-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-1 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span></p>
                          <p className="text-xs text-muted-foreground">PDF, PNG, JPG</p>
                        </div>
                        <input type="file" className="hidden" accept=".pdf,image/png,image/jpeg" />
                      </label>
                    </div>
                  </div>
                  
                </div>
              </div>
            )}

            {/* STEP 6: JOINT APPLICANT */}
            {step === 5 && (
              <div className="space-y-6">
                {currentAccountType === "Joint" ? (
                  <>
                    <p className="text-muted-foreground mb-4">Please provide details of the joint applicant.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input 
                          {...methods.register("jointName")} 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date of Birth</label>
                        <input 
                          type="date"
                          {...methods.register("jointDob")} 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">National ID (NID)</label>
                        <input 
                          {...methods.register("jointNid")} 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Mobile Phone</label>
                        <input 
                          {...methods.register("jointPhone")} 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[200px] text-center space-y-4">
                    <CheckCircle2 className="h-12 w-12 text-success opacity-50" />
                    <div className="text-muted-foreground">
                      Not applicable for {currentAccountType} accounts.<br/>
                      Click Next to continue.
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 7: EXISTING BO */}
            {step === 6 && (
              <div className="space-y-6">
                <p className="text-muted-foreground mb-4">Do you already have a BO Account with another broker?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setValue("hasExistingBO", true)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      watch("hasExistingBO") === true 
                        ? 'border-primary bg-primary/5 shadow-sm' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">Yes, I have an existing account</h3>
                      {watch("hasExistingBO") === true && <CheckCircle2 className="h-5 w-5 text-primary" />}
                    </div>
                  </div>
                  <div 
                    onClick={() => setValue("hasExistingBO", false)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      watch("hasExistingBO") === false 
                        ? 'border-primary bg-primary/5 shadow-sm' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">No, this is my first account</h3>
                      {watch("hasExistingBO") === false && <CheckCircle2 className="h-5 w-5 text-primary" />}
                    </div>
                  </div>
                </div>

                {watch("hasExistingBO") && (
                  <div className="mt-6 space-y-4 animate-in slide-in-from-top-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Existing Brokerage House Name</label>
                      <input 
                        {...methods.register("existingBroker")} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Existing BO ID</label>
                      <input 
                        {...methods.register("existingBoId")} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 8: BANK DETAILS */}
            {step === 7 && (
              <div className="space-y-6">
                <p className="text-muted-foreground mb-4">Provide your primary bank account details for fund withdrawals and dividends.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Bank Name</label>
                    <input 
                      {...methods.register("bankName")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.bankName && <p className="text-destructive text-xs">{errors.bankName.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Branch Name</label>
                    <input 
                      {...methods.register("branchName")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.branchName && <p className="text-destructive text-xs">{errors.branchName.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Account Number</label>
                    <input 
                      {...methods.register("accountNumber")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.accountNumber && <p className="text-destructive text-xs">{errors.accountNumber.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Routing Number</label>
                    <input 
                      {...methods.register("routingNumber")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.routingNumber && <p className="text-destructive text-xs">{errors.routingNumber.message as string}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 9: NOMINEE DETAILS */}
            {step === 8 && (
              <div className="space-y-6">
                <p className="text-muted-foreground mb-4">Please provide details of the person who will inherit this account.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nominee Name</label>
                    <input 
                      {...methods.register("nomineeName")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.nomineeName && <p className="text-destructive text-xs">{errors.nomineeName.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Relationship</label>
                    <input 
                      {...methods.register("relationship")} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.relationship && <p className="text-destructive text-xs">{errors.relationship.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Percentage (%)</label>
                    <input 
                      type="number"
                      {...methods.register("percentage", { valueAsNumber: true })} 
                      defaultValue={100}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                    />
                    {errors.percentage && <p className="text-destructive text-xs">{errors.percentage.message as string}</p>}
                  </div>
                  
                  <div className="space-y-2 md:col-span-2 pt-4">
                    <div className="flex items-center space-x-2 border-t pt-4">
                      <input 
                        type="checkbox" 
                        id="isMinor"
                        {...methods.register("isMinor")}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="isMinor" className="text-sm font-medium leading-none">
                        Nominee is a minor (under 18 years old)
                      </label>
                    </div>
                  </div>

                  {watch("isMinor") && (
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium">Guardian Name</label>
                      <input 
                        {...methods.register("guardianName")} 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" 
                      />
                      {errors.guardianName && <p className="text-destructive text-xs">{errors.guardianName.message as string}</p>}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 10: REVIEW */}
            {step === 9 && (
              <div className="space-y-6">
                <p className="text-muted-foreground mb-4">Please review your application carefully before proceeding.</p>
                
                <div className="bg-card border rounded-xl p-6 space-y-6">
                  <div>
                    <h3 className="font-semibold border-b pb-2 mb-3">Account Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Type:</div>
                      <div className="font-medium">{watch("accountType")}</div>
                      <div className="text-muted-foreground">Branch:</div>
                      <div className="font-medium">{watch("branch")}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold border-b pb-2 mb-3">Applicant Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Name:</div>
                      <div className="font-medium">{watch("name")}</div>
                      <div className="text-muted-foreground">NID:</div>
                      <div className="font-medium">{watch("nid")}</div>
                      <div className="text-muted-foreground">Phone:</div>
                      <div className="font-medium">{watch("phone")}</div>
                      <div className="text-muted-foreground">Email:</div>
                      <div className="font-medium">{watch("email")}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold border-b pb-2 mb-3">Bank Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Bank:</div>
                      <div className="font-medium">{watch("bankName")}</div>
                      <div className="text-muted-foreground">Branch:</div>
                      <div className="font-medium">{watch("branchName")}</div>
                      <div className="text-muted-foreground">Account:</div>
                      <div className="font-medium">{watch("accountNumber")}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold border-b pb-2 mb-3">Nominee Details</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Name:</div>
                      <div className="font-medium">{watch("nomineeName")}</div>
                      <div className="text-muted-foreground">Relationship:</div>
                      <div className="font-medium">{watch("relationship")}</div>
                      <div className="text-muted-foreground">Share:</div>
                      <div className="font-medium">{watch("percentage")}%</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 11: DECLARATION */}
            {step === 10 && (
              <div className="space-y-6">
                <p className="text-muted-foreground mb-4">Final declaration and terms of service.</p>
                <div className="bg-card border rounded-xl p-6 space-y-6 text-sm">
                  <div className="h-48 overflow-y-auto pr-4 space-y-4 text-muted-foreground">
                    <p>I/We hereby apply for opening a Beneficiary Owner (BO) account with FCSL. I/We confirm that the details provided in this form are true and correct.</p>
                    <p>I/We have read and understood the terms and conditions of opening a BO account in Bangladesh under the Central Depository Bangladesh Limited (CDBL) bye-laws.</p>
                    <p>I/We acknowledge that investments in the capital market are subject to market risks, and FCSL shall not be held liable for any loss incurred due to market fluctuations.</p>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id="acceptedTerms"
                        {...methods.register("acceptedTerms")}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="acceptedTerms" className="font-medium leading-tight">
                        I agree to the Terms and Conditions and CDBL Bye-laws.
                      </label>
                    </div>
                    {errors.acceptedTerms && <p className="text-destructive text-xs ml-7">{errors.acceptedTerms.message as string}</p>}
                    
                    <div className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id="riskAcknowledged"
                        {...methods.register("riskAcknowledged")}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="riskAcknowledged" className="font-medium leading-tight">
                        I acknowledge the risks associated with capital market investments.
                      </label>
                    </div>
                    {errors.riskAcknowledged && <p className="text-destructive text-xs ml-7">{errors.riskAcknowledged.message as string}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 12: SUBMIT / SUCCESS */}
            {step === 11 && (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="h-20 w-20 bg-success/10 text-success rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-primary">Application Submitted!</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your BO Account opening application has been successfully submitted to our verification team.
                  </p>
                </div>
                
                <div className="bg-card border rounded-xl p-6 w-full max-w-md space-y-4 text-left">
                  <div className="flex justify-between items-center border-b pb-4">
                    <span className="text-muted-foreground">Application Ref:</span>
                    <span className="font-mono font-bold text-lg text-primary">FCSL-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-semibold text-amber-500">Pending Verification</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-semibold">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  You will receive an email confirmation shortly. You can track your application status using the reference number.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {step < STEPS.length - 1 && (
          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={prevStep} disabled={step === 0} className="w-24">
              Previous
            </Button>
            
            {step < STEPS.length - 2 ? (
              <Button 
                type="button" 
                onClick={async () => {
                  // Trigger validation for current step before moving forward
                  let isValid = false;
                  if (step === 0) isValid = await methods.trigger("accountType");
                  else if (step === 1) isValid = await methods.trigger("branch");
                  else if (step === 2) isValid = await methods.trigger([
                    "name", "fatherName", "motherName", "spouseName", "dob", "gender", 
                    "profession", "nationality", "nid", "passport", "tin", "phone", "email"
                  ]);
                  else if (step === 3) isValid = await methods.trigger([
                    "presentAddress", "presentDistrict", "presentPostal", "presentCountry",
                    "permanentAddress", "permanentDistrict", "permanentPostal", "permanentCountry"
                  ]);
                  else if (step === 4) isValid = true; // Documents validation will be added later
                  else if (step === 5) isValid = true; // Joint Applicant validation
                  else if (step === 6) isValid = true; // Existing BO validation
                  else if (step === 7) isValid = await methods.trigger(["bankName", "branchName", "accountNumber", "routingNumber"]);
                  else if (step === 8) isValid = await methods.trigger(["nomineeName", "relationship", "percentage", "isMinor", "guardianName"]);
                  else if (step === 9) isValid = true; // Review step
                  
                  if (isValid) nextStep();
                }} 
                className="w-24 bg-primary text-primary-foreground"
              >
                Next
              </Button>
            ) : (
              <Button 
                type="button" 
                onClick={async () => {
                  const isValid = await methods.trigger(["acceptedTerms", "riskAcknowledged"]);
                  if (isValid) {
                    methods.handleSubmit(onSubmit)();
                  }
                }} 
                className="bg-success hover:bg-success/90 text-white font-semibold"
              >
                Submit Application
              </Button>
            )}
          </div>
        )}
      </form>
    </FormProvider>
  );
}