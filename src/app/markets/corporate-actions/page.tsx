"use client";

import { useState, useEffect } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { CorporateAction } from "@/services/marketData";
import { 
  ColumnDef, 
  flexRender, 
  getCoreRowModel, 
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const columns: ColumnDef<CorporateAction>[] = [
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ row }) => (
      <Link href={`/markets/stocks/${row.getValue("symbol")}`} className="font-semibold text-blue-600 hover:underline">
        {row.getValue("symbol")}
      </Link>
    ),
  },
  {
    accessorKey: "type",
    header: "Event Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      const getBadgeVariant = (t: string) => {
        switch(t) {
          case 'AGM': return "bg-blue-100 text-blue-700";
          case 'EGM': return "bg-purple-100 text-purple-700";
          case 'Dividend': return "bg-emerald-100 text-emerald-700";
          case 'Rights': return "bg-amber-100 text-amber-700";
          default: return "bg-slate-100 text-slate-700";
        }
      };
      return <Badge variant="outline" className={`${getBadgeVariant(type)} border-0`}>{type}</Badge>
    }
  },
  {
    accessorKey: "recordDate",
    header: "Record Date",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-slate-700">
        <Calendar className="w-4 h-4 text-slate-400" />
        {new Date(row.getValue("recordDate")).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
      </div>
    ),
  },
  {
    accessorKey: "details",
    header: "Details",
    cell: ({ row }) => <div className="text-slate-600">{row.getValue("details")}</div>,
  },
];

export default function CorporateActions() {
  const { provider } = useMarketData();
  const [data, setData] = useState<CorporateAction[]>([]);

  useEffect(() => {
    provider.getCorporateActions().then(setData);
  }, [provider]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Corporate Actions</h1>
        <p className="text-slate-500">Stay updated with upcoming AGMs, EGMs, dividends, and other corporate events.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="rounded-md border overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No corporate actions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
