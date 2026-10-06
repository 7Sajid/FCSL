import BOAccountWizard from '@/features/onboarding/components/BOAccountWizard';

export default function OpenAccountPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary">Open BO Account</h1>
        <p className="text-muted-foreground mt-2">Complete the form below to open your Beneficiary Owner account.</p>
      </div>
      <BOAccountWizard />
    </div>
  );
}