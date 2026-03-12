import "./CarFareTable.css";

const CarFareTable = () => {
  return (
    <section className="fareSection">
      <div className="fareContainer">

        <table className="fareTable">

          <thead className="fareTableHead">
            <tr className="fareTableRow">

              <th className="fareTableHeader">CAR TYPE</th>
              <th className="fareTableHeader">MODEL INCLUDES</th>
              <th className="fareTableHeader">PASSENGERS</th>
              <th className="fareTableHeader">IDEAL FOR</th>
              <th className="fareTableHeader">FARE</th>

            </tr>
          </thead>

          <tbody className="fareTableBody">

            <tr className="fareTableRow">

              <td className="fareTableCell">AC Sedans</td>
              <td className="fareTableCell">Etios, Amaze, Dzire etc.</td>
              <td className="fareTableCell">4 Pax</td>
              <td className="fareTableCell">Comfortable trips with small families</td>
              <td className="fareTableCell">Rs.11/KM</td>

            </tr>

            <tr className="fareTableRow">

              <td className="fareTableCell">AC Hatchbacks</td>
              <td className="fareTableCell">Wagon R, Celerio, Micra etc.</td>
              <td className="fareTableCell">4 Pax</td>
              <td className="fareTableCell">Budget trips over short distances</td>
              <td className="fareTableCell">Rs.11/KM</td>

            </tr>

            <tr className="fareTableRow">

              <td className="fareTableCell">AC SUV</td>
              <td className="fareTableCell">Ertiga, Xylo etc.</td>
              <td className="fareTableCell">6–7 Pax</td>
              <td className="fareTableCell">Premium trips with large families</td>
              <td className="fareTableCell">Rs.13/KM</td>

            </tr>

          </tbody>

        </table>

      </div>
    </section>
  );
};

export default CarFareTable;