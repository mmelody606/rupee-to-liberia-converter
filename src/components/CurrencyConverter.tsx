
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { IndianRupee, ArrowDown } from 'lucide-react';

const EXCHANGE_RATE = 2.34;

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleConvert = () => {
    if (amount && !isNaN(Number(amount))) {
      toast({
        title: "Conversion successful!",
        description: `${amount} INR = ${(Number(amount) * EXCHANGE_RATE).toFixed(2)} LRD`,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-4 flex items-center justify-center">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple-900 mb-2">INR to LRD Converter</h1>
            <p className="text-sm text-gray-600">1 INR = 2.34 LRD</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <IndianRupee className="h-5 w-5 text-gray-500" />
              </div>
              <Input
                type="text"
                placeholder="Enter amount in INR"
                value={amount}
                onChange={handleInputChange}
                className="pl-10 text-lg"
              />
            </div>

            <div className="flex justify-center">
              <ArrowDown className="h-6 w-6 text-purple-500" />
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-purple-700 mb-1">Converted Amount (LRD)</p>
              <p className="text-2xl font-bold text-purple-900">
                {amount ? (Number(amount) * EXCHANGE_RATE).toFixed(2) : "0.00"}
              </p>
            </div>

            <Button 
              onClick={handleConvert}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
            >
              Convert
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CurrencyConverter;
