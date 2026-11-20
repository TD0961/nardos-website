"use client";

import React, { useState } from "react";
import { Calculator, CheckCircle2, ArrowRight } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

interface CalculatorProps {
  propertyTitle: string;
  defaultPriceETB: number; // numeric value for computation
}

export default function MortgageCalculator({
  propertyTitle,
  defaultPriceETB,
}: CalculatorProps) {
  const [price, setPrice] = useState<number>(defaultPriceETB || 11500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(15);
  const [installmentMonths, setInstallmentMonths] = useState<number>(36);

  // Calculations
  const downPaymentAmount = Math.round((price * downPaymentPercent) / 100);
  const remainingBalance = price - downPaymentAmount;
  const numberOfQuarterlyPayments = Math.max(1, Math.round(installmentMonths / 3));
  const quarterlyPayment = Math.round(remainingBalance / numberOfQuarterlyPayments);
  const cashDiscountSavings = Math.round(price * 0.10); // 10% cash discount

  const formatETB = (amount: number) => {
    return new Intl.NumberFormat("en-US").format(amount) + " ETB";
  };

  const getWhatsAppCalculationLink = () => {
    const text = encodeURIComponent(
      `Hello Temer Property,\n\nI calculated a financing plan for *${propertyTitle}*:\n• Total Price: ${formatETB(price)}\n• Down Payment (${downPaymentPercent}%): ${formatETB(downPaymentAmount)}\n• Installment Period: ${installmentMonths} Months\n• Est. Quarterly Payment: ${formatETB(quarterlyPayment)}\n\nPlease send me the official payment milestone schedule.`
    );
    return `https://wa.me/251938125777?text=${text}`;
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 text-[#84A441] text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Financial Planner</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Payment & Installment Calculator
          </h3>
        </div>
        <span className="hidden sm:inline-block bg-[#84A441]/10 text-[#84A441] text-xs font-bold px-3 py-1.5 rounded-full">
          0% Interest Developer Plan
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          {/* Total Price Display / Input */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Property Value (ETB)
            </label>
            <div className="relative">
              <input
                type="number"
                step="50000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value) || 0)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-bold text-gray-900 focus:outline-none focus:border-[#84A441] text-base"
              />
              <span className="absolute right-4 top-3 text-xs font-bold text-gray-400">
                ETB
              </span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1">
              Adjust amount or choose from down payment presets below.
            </p>
          </div>

          {/* Down Payment % Selector */}
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-700 uppercase mb-2">
              <span>Initial Down Payment</span>
              <span className="text-[#84A441]">{downPaymentPercent}%</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[15, 20, 30, 50].map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setDownPaymentPercent(pct)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    downPaymentPercent === pct
                      ? "bg-[#84A441] text-white border-[#84A441] shadow-sm"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#84A441]"
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Installment Duration */}
          <div>
            <div className="flex justify-between text-xs font-bold text-gray-700 uppercase mb-2">
              <span>Installment Period</span>
              <span className="text-[#84A441]">{installmentMonths} Months</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[12, 24, 36].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setInstallmentMonths(m)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    installmentMonths === m
                      ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                      : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-900"
                  }`}
                >
                  {m} Months
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400 pb-2 border-b border-gray-700">
              Payment Breakdown Summary
            </h4>

            <div className="flex justify-between items-baseline">
              <span className="text-xs text-gray-300">Initial Down Payment ({downPaymentPercent}%):</span>
              <span className="text-lg font-bold text-[#84A441]">
                {formatETB(downPaymentAmount)}
              </span>
            </div>

            <div className="flex justify-between items-baseline">
              <span className="text-xs text-gray-300">Remaining Balance:</span>
              <span className="text-sm font-semibold text-white">
                {formatETB(remainingBalance)}
              </span>
            </div>

            <div className="flex justify-between items-baseline">
              <span className="text-xs text-gray-300">
                Quarterly Milestone ({numberOfQuarterlyPayments} payments):
              </span>
              <span className="text-sm font-semibold text-white">
                {formatETB(quarterlyPayment)}
              </span>
            </div>

            <div className="mt-4 p-3 bg-white/10 rounded-xl border border-white/10">
              <div className="flex items-center gap-1.5 text-xs text-[#84A441] font-bold mb-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Up to 10% Cash Settlement Discount</span>
              </div>
              <p className="text-[11px] text-gray-300">
                Save approximately <strong className="text-white">{formatETB(cashDiscountSavings)}</strong> when settling full payment upfront.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <a
              href={getWhatsAppCalculationLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("mortgage_calculator", propertyTitle)}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <span>Get This Payment Schedule on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              Optional instant consultation with personal sales advisor • No registration needed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
