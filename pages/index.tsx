import { useState } from "react";
import PrintablePage from "../components/PrintablePage";
import getUsers from "../util/getUsers";
import getTeamIcon from "../util/getTeamIcon";
import generateUsers from "../util/generateUsers";
import CenteredLayout from "../components/CenteredLayout";
import Input from "../components/Input";
import Drawer from "../components/Drawer";
import ToggleSwitch from "../components/ToggleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HomePage({ users, teamIcon }) {
  const [drawerOpen, setDrawerOpen] = useState(true);
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
    <div className="relative">
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
      <button
        className="print:hidden fixed rounded top-0 left-0 h-8 w-8 m-4 bg-white text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:bg-gray-200 shadow"
        onClick={() => setDrawerOpen(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="grid gap-y-4">
          <div>
            <ToggleSwitch
              labelText="Show Guides"
              name="showGuides"
              checked={enableGuides}
              onChange={(e) => setEnableGuides(!enableGuides)}
            />
          </div>
          <div>
            <label>Rows</label>
            <Input
              name="rows"
              type="number"
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <label>Columns</label>
            <Input
              name="columns"
              type="number"
              value={columns}
              onChange={(e) => setColumns(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <label>Page Height (in.)</label>
            <Input
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
            <Input
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
            <Input
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
            <Input
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
            <Input
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
            <Input
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
            <Input
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
            <Input
              name="columnGap"
              type="number"
              step={0.25}
              min={0.0}
              value={columnGap}
              onChange={(e) => setColumnGap(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Nametag Padding (in.)</label>
            <Input
              name="nametagPadding"
              type="number"
              step={0.25}
              min={0.0}
              value={nametagPadding}
              onChange={(e) => setNametagPadding(parseFloat(e.target.value))}
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
      </Drawer>
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
