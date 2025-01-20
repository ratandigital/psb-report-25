'use client'
import { useSearchParams } from 'next/navigation';

const VoucherPage = () => {
  const searchParams = useSearchParams();

  const disbursementAmount = searchParams.get('disbursementAmount');
  const paidPrincipal = searchParams.get('paidPrincipal');
  const outstandingPrincipal = searchParams.get('outstandingPrincipal');
  const extraInterestAmount = searchParams.get('extraInterestAmount');
  const diffDays = searchParams.get('diffDays');
  const loanOverdueDate = searchParams.get('loanOverdueDate');
  const loanPaymentDate = searchParams.get('loanPaymentDate');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      {/* Increased width by changing max-w-4xl to max-w-5xl */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Extra Interest Voucher</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 font-semibold text-gray-900 border-l border-r">Description</th>
                <th className="py-3 px-6 font-semibold text-gray-900 border-l border-r">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Disbursement Amount:</td>
                <td className="py-3 px-6 border-l border-r">{disbursementAmount}</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Paid Principal Amount (Before 01.01.2025):</td>
                <td className="py-3 px-6 border-l border-r">{paidPrincipal}</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Outstanding Principal Amount (01.01.2025):</td>
                <td className="py-3 px-6 border-l border-r">{outstandingPrincipal}</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Extra Interest Charge Date:</td>
                <td className="py-3 px-6 border-l border-r">01.01.2025</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Overdue Date:</td>
                <td className="py-3 px-6 border-l border-r">{loanOverdueDate}</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Complete Payment Date:</td>
                <td className="py-3 px-6 border-l border-r">{loanPaymentDate}</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Total Days for Interest Calculation:</td>
                <td className="py-3 px-6 border-l border-r">{diffDays}</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Interest Rate:</td>
                <td className="py-3 px-6 border-l border-r">2%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 font-medium border-l border-r">Extra Interest Amount:</td>
                <td className="py-3 px-6 border-l border-r text-green-600 font-bold">{extraInterestAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Signature fields in a single line on large screens, stacked on small screens */}
        <div className="mt-8 flex justify-center space-x-4 print:space-x-12 flex-nowrap">
  <div className="text-center">
    <div className="border-b-2 mt-5 w-40 mx-auto"></div>
    <span className="font-semibold text-lg">FA:</span>
  </div>
  <div className="text-center">
    <div className="border-b-2 mt-5 w-40 mx-auto"></div>
    <span className="font-semibold text-lg">CO/CA:</span>
  </div>
  <div className="text-center">
    <div className="border-b-2 mt-5 w-40 mx-auto"></div>
    <span className="font-semibold text-lg">BM:</span>
  </div>
</div>


        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300"
          >
            Print 
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherPage;
