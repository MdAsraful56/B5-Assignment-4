import BorrowSummaryTable from "../components/SummaryList";

const BorrowSummary = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="overflow-x-auto border rounded">
        <BorrowSummaryTable />
      </div>
    </div>
  );
};

export default BorrowSummary;
