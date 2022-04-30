import { useState } from "react";
import PrintablePage from "../components/PrintablePage";
import getUsers from "../util/getUsers";
import getTeamIcon from "../util/getTeamIcon";
import generateUsers from "../util/generateUsers";
import CenteredLayout from "../components/CenteredLayout";

function HomePage({ users, teamIcon }) {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(2);
  const [pageHeight, setPageHeight] = useState(11);
  const [pageWidth, setPageWidth] = useState(8.5);
  const [pageMarginTop, setPageMarginTop] = useState(1);
  const [pageMarginRight, setPageMarginRight] = useState(0.25);
  const [pageMarginBottom, setPageMarginBottom] = useState(1);
  const [pageMarginLeft, setPageMarginLeft] = useState(0.25);
  const [rowGap, setRowGap] = useState(0);
  const [columnGap, setColumnGap] = useState(0);
  const [nametagPadding, setNametagPadding] = useState(0.25);
  const [enableGuides, setEnableGuides] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <CenteredLayout>
        <PrintablePage
          users={users}
          defaultIcon={teamIcon}
          rows={rows}
          columns={columns}
          pageHeight={`${pageHeight}in`}
          pageWidth={`${pageWidth}in`}
          outerMargin={`${pageMarginTop}in ${pageMarginRight}in ${pageMarginBottom}in ${pageMarginLeft}in`}
          rowGap={`${rowGap}in`}
          columnGap={`${columnGap}in`}
          nametagPadding={`${nametagPadding}in`}
          enableGuides={enableGuides}
        />
      </CenteredLayout>
      <div
        className="no-print"
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          padding: "1rem",
        }}
      >
        <p>Layout Settings</p>
        <div>
          <label>Rows</label>
          <input
            name="rows"
            type="number"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <label>Columns</label>
          <input
            name="columns"
            type="number"
            value={columns}
            onChange={(e) => setColumns(parseInt(e.target.value, 10))}
          />
          <div>
            <label>Page Height (in.)</label>
            <input
              name="pageHeight"
              type="number"
              step={0.25}
              min={0.0}
              value={pageHeight}
              onChange={(e) => setPageHeight(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Page Width (in.)</label>
            <input
              name="pageWidth"
              type="number"
              step={0.25}
              min={0.0}
              value={pageWidth}
              onChange={(e) => setPageWidth(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Page Margin Top (in.)</label>
            <input
              name="pageMarginTop"
              type="number"
              step={0.25}
              min={0.0}
              value={pageMarginTop}
              onChange={(e) => setPageMarginTop(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Page Margin Right (in.)</label>
            <input
              name="pageMarginRight"
              type="number"
              step={0.25}
              min={0.0}
              value={pageMarginRight}
              onChange={(e) => setPageMarginRight(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Page Margin Bottom (in.)</label>
            <input
              name="pageMarginBottom"
              type="number"
              step={0.25}
              min={0.0}
              value={pageMarginBottom}
              onChange={(e) => setPageMarginBottom(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Page Margin Left (in.)</label>
            <input
              name="pageMarginLeft"
              type="number"
              step={0.25}
              min={0.0}
              value={pageMarginLeft}
              onChange={(e) => setPageMarginLeft(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Row Gap (in.)</label>
            <input
              name="rowGap"
              type="number"
              step={0.25}
              min={0.0}
              value={rowGap}
              onChange={(e) => setRowGap(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Column Gap (in.)</label>
            <input
              name="columnGap"
              type="number"
              step={0.25}
              min={0.0}
              value={columnGap}
              onChange={(e) => setColumnGap(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Nametag Padding</label>
            <input
              name="nametagPadding"
              type="number"
              step={0.25}
              min={0.0}
              value={nametagPadding}
              onChange={(e) => setNametagPadding(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Enable Guides</label>
            <input
              name="enableGuides"
              type="checkbox"
              checked={enableGuides}
              onChange={(e) => setEnableGuides(!enableGuides)}
            />
          </div>

          <p>Printing Instructions</p>
          <ul>
            <li>
              Set paper size to {pageWidth}&quot; &times; {pageHeight}&quot;
            </li>
            <li>Set margins to 0&quot; on all sides</li>
            <li>Enable Background Graphics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  //const users = await getUsers();
  const users = generateUsers(50);
  const teamIcon = await getTeamIcon();

  return {
    props: {
      users,
      teamIcon,
    },
  };
}

export default HomePage;
