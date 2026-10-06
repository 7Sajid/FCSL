import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentSuccessful() {
  return (
    <div className="min-h-screen p-8 pt-24 max-w-5xl mx-auto space-y-8">
      <div className="border-b pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-primary">Payment Successful</h1>
        <p className="text-lg text-muted-foreground mt-2">Your transaction has been completed successfully.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Information Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Welcome to the <strong>Payment Successful</strong> page. This section of the First Capital Securities Limited portal is designed to provide you with all the necessary resources and information regarding this topic.
          </p>
          <p>
            Our team is constantly updating this section to ensure you have the most accurate and up-to-date data. Please contact our support team if you need immediate assistance or cannot find the specific forms or information you are looking for.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
