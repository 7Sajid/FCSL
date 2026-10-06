"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PriceAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  symbol: string | null;
  currentPrice: number | null;
}

export function PriceAlertModal({ isOpen, onClose, symbol, currentPrice }: PriceAlertModalProps) {
  const [targetPrice, setTargetPrice] = useState<string>("");
  const [condition, setCondition] = useState<string>("above");
  
  const handleSave = () => {
    // In a real app, this would dispatch to an API/backend architecture
    console.log(`Alert set for ${symbol}: Price goes ${condition} ৳${targetPrice}`);
    onClose();
    setTargetPrice("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Price Alert</DialogTitle>
          <DialogDescription>
            Get notified when {symbol || "the stock"} reaches your target price.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Symbol</p>
              <p className="font-bold text-lg">{symbol}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Current Price</p>
              <p className="font-bold text-lg">৳ {currentPrice?.toFixed(2) || "0.00"}</p>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="condition" className="text-right">
              Condition
            </Label>
            <div className="col-span-3">
              <Select value={condition} onValueChange={setCondition}>
                <SelectTrigger id="condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="above">Price rises above</SelectItem>
                  <SelectItem value="below">Price falls below</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Target (৳)
            </Label>
            <Input
              id="price"
              type="number"
              placeholder="e.g. 290.50"
              className="col-span-3"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} disabled={!targetPrice}>Set Alert</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
