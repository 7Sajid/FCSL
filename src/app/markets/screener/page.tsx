"use client";

import { useState, useEffect } from "react";
import { useMarketData } from "@/providers/MarketDataProvider";
import { Stock } from "@/services/marketData";
import { 
  ColumnDef, 
  flexRender, 
  getCoreRowModel, 
  getSortedRowModel, 
  getPaginationRowModel,
  getFilteredRowModel,
  SortingState,
  ColumnFiltersState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export const columns: ColumnDef<Stock>[] = [
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
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "sector",
    header: "Sector",
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="-ml-4">
          Price <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium">{parseFloat(row.getValue("price")).toFixed(2)}</div>,
  },
  {
    accessorKey: "change",
    header: "Change",
    cell: ({ row }) => {
      const val = parseFloat(row.getValue("change"));
      return <div className={val >= 0 ? "text-emerald-500" : "text-rose-500"}>{val >= 0 ? '+' : ''}{val.toFixed(2)}</div>
    }
  },
  {
    accessorKey: "changePercent",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="-ml-4">
          Change % <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const val = parseFloat(row.getValue("changePercent"));
      return <div className={`font-medium ${val >= 0 ? "text-emerald-500" : "text-rose-500"}`}>{val >= 0 ? '+' : ''}{val.toFixed(2)}%</div>
    }
  },
  {
    accessorKey: "volume",
    header: "Volume",
    cell: ({ row }) => <div>{parseInt(row.getValue("volume")).toLocaleString()}</div>,
  },
  {
    accessorKey: "turnover",
    header: "Turnover",
    cell: ({ row }) => <div>{(parseInt(row.getValue("turnover")) / 1000000).toFixed(2)}M</div>,
  },
  {
    accessorKey: "marketCap",
    header: "Market Cap",
    cell: ({ row }) => <div>{(parseInt(row.getValue("marketCap")) / 1000000000).toFixed(2)}B</div>,
  },
  {
    accessorKey: "pe",
    header: "P/E",
    cell: ({ row }) => <div>{parseFloat(row.getValue("pe")).toFixed(2)}</div>,
  },
  {
    accessorKey: "eps",
    header: "EPS",
    cell: ({ row }) => <div>{parseFloat(row.getValue("eps")).toFixed(2)}</div>,
  },
  {
    accessorKey: "dividendYield",
    header: "Div. Yield",
    cell: ({ row }) => <div>{parseFloat(row.getValue("dividendYield")).toFixed(2)}%</div>,
  },
  {
    id: "range52WeekHigh",
    accessorFn: (row) => row.range52Week.high,
    header: "52W High",
    cell: ({ row }) => <div>{parseFloat(row.getValue("range52WeekHigh")).toFixed(2)}</div>,
  },
  {
    id: "range52WeekLow",
    accessorFn: (row) => row.range52Week.low,
    header: "52W Low",
    cell: ({ row }) => <div>{parseFloat(row.getValue("range52WeekLow")).toFixed(2)}</div>,
  },
];

export default function StockScreener() {
  const { provider } = useMarketData();
  const [data, setData] = useState<Stock[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    company: false,
    turnover: false,
    marketCap: false,
    eps: false,
    dividendYield: false,
    range52WeekHigh: false,
    range52WeekLow: false,
  });

  useEffect(() => {
    provider.getStocks().then(setData);
  }, [provider]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
  });

  const downloadCSV = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers = columns.map(c => typeof c.header === 'string' ? c.header : (c as any).accessorKey || (c as any).id);
    const csvContent = [
      headers.join(","),
      ...data.map(row => 
        columns.map(c => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const key = (c as any).accessorKey || (c as any).id;
          return `"${row[key as keyof Stock] || ""}"`;
        }).join(",")
      )
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "fcsl_screener_export.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Stock Screener</h1>
        <p className="text-slate-500">Filter, sort, and discover stocks matching your criteria.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search symbols..."
              value={(table.getColumn("symbol")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("symbol")?.setFilterValue(event.target.value)
              }
              className="pl-9 w-full bg-slate-50"
            />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="default" onClick={downloadCSV} className="gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

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
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
