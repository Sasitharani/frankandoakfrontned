import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Logo from './Logo.png'; 

const Invoice = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Redirect to ViewInvoice page
    history.push('/ViewInvoice');
  };

  return (
    <Container>
       <div className="row">
      <div className="col-md-12  text-center">  <img src={Logo} alt="Logo" width="100" height="100" className="d-inline-block align-top"/></div>
      <div className="col-md-12  text-center" style={{ color: '#12a9e1', fontSize: '40px' }}>Sri Gowmari Modern Bricks</div>
      <div className="col-md-12 text-center">SF NO 630/3,Mylapore road,Opp SSM College Of Engineering,Palani Road, Dindigul 624622</div>
      <div className="col-md-12 text-center"> Mobile 9655546951,7904010382  Email:sgmbricks2021@gmail.com</div>
      <div className="col-md-12 text-center">Website:www.sgmmodernbricks.com</div>
      <div className="col-md-12 text-center" style={{ backgroundColor: '#75c043', fontSize: '40px' }}>INVOICE</div>
      <div className="row">
        <div className="col-md-6 border">
          {/* Content for the first column */}
          <p>Billing Address</p>
        </div>
        <div className="col-md-6 border">
          {/* Content for the second column */}
          <p>GSTIN : 33ALTPC9721G1Z0</p>
        </div>
      </div>
    </div>
          {/* Address and Date */}
          <div className="row">
        <div className="col-md-6 border">
          <p>To,</p>
        </div>
        <div className="col-md-3 border">
          <p>Date</p>
        </div>
        <div className="col-md-3 border">
          <p>DDMMYYYY</p>
        </div>
      </div>

      {/* Add Line 1 */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Add Line 1</p>
        </div>
        <div className="col-md-3 border">
          <p></p>
        </div>
        <div className="col-md-3 border">
          <p></p>
        </div>
      </div>

      {/* Add Line 2 & Invoice No */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Line 2</p>
        </div>
        <div className="col-md-3 border">
          <p>Invoice No</p>
        </div>
        <div className="col-md-3 border">
          <p>00</p>
        </div>
      </div>

      {/* Add Line 3 */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Add Line 3</p>
        </div>
        <div className="col-md-3 border">
          <p></p>
        </div>
        <div className="col-md-3 border">
          <p></p>
        </div>
      </div>
            {/* Add Line 4 & Delivery Mode */}
            <div className="row">
        <div className="col-md-6 border">
          <p>Add Line 4</p>
        </div>
        <div className="col-md-3 border">
          <p>Delivery Mode</p>
        </div>
        <div className="col-md-3 border">
          <p>Transport</p>
        </div>
      </div>

      {/* Add Line 5 */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Add Line 5</p>
        </div>
        <div className="col-md-3 border">
          <p></p>
        </div>
        <div className="col-md-3 border">
          <p></p>
        </div>
      </div>

      {/* GST and Payment Mode */}
      <div className="row">
        <div className="col-md-6 border">
          <p>To GST</p>
        </div>
        <div className="col-md-3 border">
          <p>Payment</p>
        </div>
        <div className="col-md-3 border">
          <p>______</p>
        </div>
      </div>

      {/* End Of Address and Details */}
      {/* Table */}
      <table className="table table-bordered">
        <thead style={{ backgroundColor: '#75c043' }}>
          <tr>
            <th>S.No</th>
            <th>Description</th>
            <th>Pack</th>
            <th>HSN</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <tr key={item}>
              <td>{item}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="6">Total</th>
            <td></td>
          </tr>
        </tfoot>
      </table>

      {/* Bank Details & Gross amount */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Our Banker's Details</p>
        </div>
        <div className="col-md-3 border">
          <p>Gross Amount</p>
        </div>
        <div className="col-md-3 border">
          <p>______</p>
        </div>
      </div>

      {/* Account No & Taxable amount */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Account No : 1791280000000159 </p>
        </div>
        <div className="col-md-3 border">
          <p>Taxable Amount</p>
        </div>
        <div className="col-md-3 border">
          <p>______</p>
        </div>
      </div>

      {/* IFSC Code CGST */}
      <div className="row">
        <div className="col-md-6 border">
          <p>IFSC Code : KVBL0001791 </p>
        </div>
        <div className="col-md-2 border">
          <p>C GST</p>
        </div>
        <div className="col-md-2 border">
          <p>6%</p>
        </div>
        <div className="col-md-2 border">
          <p>______</p>
        </div>
      </div>

      {/* Bank Name & S GST */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Bank Name : Sri Gowmari Modern Bricks</p>
        </div>
        <div className="col-md-2 border">
          <p>S GST</p>
        </div>
        <div className="col-md-2 border">
          <p>6%</p>
        </div>
        <div className="col-md-2 border">
          <p>______</p>
        </div>
      </div>

      {/* Branch Name IGST */}
      <div className="row">
        <div className="col-md-6 border">
          <p>Branch : R.M Colony</p>
        </div>
        <div className="col-md-2 border">
          <p>S GST</p>
        </div>
        <div className="col-md-2 border">
          <p>6%</p>
        </div>
        <div className="col-md-2 border">
          <p>______</p>
        </div>
      </div>

      {/* Total GST */}
      <div className="row">
        <div className="col-md-6 border">
          <p></p>
        </div>
        <div className="col-md-2 border">
          <p>Total GST</p>
        </div>
        <div className="col-md-2 border">
          <p></p>
        </div>
        <div className="col-md-2 border">
          <p>______</p>
        </div>
      </div>

      {/* Round OFF */}
      <div className="row">
        <div className="col-md-6 border">
          <p></p>
        </div>
        <div className="col-md-2 border">
          <p>Round Off</p>
        </div>
        <div className="col-md-2 border">
          <p></p>
        </div>
        <div className="col-md-2 border">
          <p>______</p>
        </div>
      </div>

      {/* Invoice Amount */}
      <div className="row">
        <div className="col-md-6 border">
          <p></p>
        </div>
        <div className="col-md-2 border">
          <p>Invoice Amount</p>
        </div>
        <div className="col-md-2 border">
          <p></p>
        </div>
        <div className="col-md-2 border">
          <p>______</p>
        </div>
      </div>

      <div className="col-md-12  border-2">Amount In Words</div>
      <div className="col-md-12  border-2">&nbsp;</div>
      <div className="col-md-12  border-2">&nbsp;</div>

      {/* Seal */}
      <div className="row">
        <div className="col-md-4 border text-center">
          <p>Customer's Seal with Signatory</p>
        </div>
        <div className="col-md-2 border">
          <p></p>
        </div>
        <div className="col-md-6 border text-center">
          <p>For Sri Gowmari Modern Bricks</p>
        </div>
      </div>

      {/* Signature */}
      <div className="row">
        <div className="col-md-4 border text-center">
          <p></p>
        </div>
        <div className="col-md-2 border">
          <p></p>
        </div>
        <div className="col-md-6 border text-center">
          <p>Signature</p>
        </div>
      </div>

      <div className="col-md-12 border">
        <p>&nbsp;</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Invoice;