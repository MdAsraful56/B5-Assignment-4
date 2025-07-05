import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBorrowQuery } from "@/redux/api/borrow";
import type { IBorrowSummary } from "@/typescript/Types";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columns: ColumnDef<IBorrowSummary>[] = [
  {
    header: "#",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "book.title",
    header: "Title",
    cell: ({ row }) => row.original.book.title,
  },
  {
    accessorKey: "book.isbn",
    header: "ISBN",
    cell: ({ row }) => row.original.book.isbn,
  },
  {
    accessorKey: "totalQuantity",
    header: "Total Quantity",
    cell: ({ row }) => row.original.totalQuantity,
  },
];

const BorrowSummaryTable = () => {
  const { data, isLoading, isError } = useGetAllBorrowQuery(undefined);
  const borrowData: IBorrowSummary[] = data?.data || [];

  const table = useReactTable({
    data: borrowData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading)
    return (
      <p className="text-center mt-10 text-sm">Loading borrowed books...</p>
    );
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Failed to fetch data</p>
    );
  if (borrowData.length === 0)
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">No Borrowed Books</h1>
        <p className="mt-4 text-gray-600">
          You have not borrowed any books yet.
        </p>
      </div>
    );

  return (
    <div className="w-full overflow-x-auto">
      <h1 className="text-3xl font-bold text-center mt-10">Borrow Summary</h1>
      <p className="text-center mt-4 text-gray-600">
        This page displays a summary of borrowed books.
      </p>
      <div className="rounded-md border mt-6">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex justify-end items-center gap-2 py-4">
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
      </div> */}
    </div>
  );
};

export default BorrowSummaryTable;
