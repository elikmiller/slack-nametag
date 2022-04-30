import chunk from "lodash/chunk";
import Image from "next/image";

interface PrintablePageProps {
  users: any[];
  defaultIcon?: any;
  rows: number;
  columns: number;
  pageHeight?: number | string;
  pageWidth?: number | string;
  outerMargin?: number | string;
  rowGap?: number | string;
  columnGap?: number | string;
  nametagPadding?: number | string;
  enableGuides?: boolean;
}

const PrintablePage: React.FC<PrintablePageProps> = ({
  users,
  defaultIcon,
  rows,
  columns,
  pageHeight = "11in",
  pageWidth = "8.5in",
  outerMargin = "0in",
  rowGap = "0in",
  columnGap = "0in",
  nametagPadding = "0in",
  enableGuides = false,
}) => {
  const usersPerPage = rows * columns;
  const pages = chunk(users, usersPerPage);

  return pages.map((page, pageIndex) => (
    <div
      className="page m-4 drop-shadow-xl print:m-0 print:drop-shadow-none"
      style={{
        height: pageHeight,
        width: pageWidth,
        padding: outerMargin,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        columnGap: columnGap,
        rowGap: rowGap,
        border: enableGuides ? "1px dotted #ff000040" : "none",
      }}
      key={pageIndex}
    >
      {page.map((user, userIndex) => (
        <div
          className="nametag-container"
          style={{
            border: enableGuides ? "1px dotted #ff000040" : "none",
          }}
          key={userIndex}
        >
          <div
            className="nametag-container_header"
            style={{
              paddingLeft: nametagPadding,
              paddingTop: nametagPadding,
              paddingRight: nametagPadding,
            }}
          ></div>
          <div
            className="nametag-container_content"
            style={{
              paddingLeft: nametagPadding,
              paddingRight: nametagPadding,
            }}
          >
            <img
              className="nametag-image"
              src={user.profile.image_512}
              alt="Profile Picture"
            />
            <div>
              {user.profile.display_name_normalized ? (
                <div className="nametag-displayname">
                  {`@${user.profile.display_name_normalized}`}
                </div>
              ) : user.profile.real_name_normalized ? (
                <div className="nametag-displayname">
                  {`@${user.profile.real_name_normalized}`}
                </div>
              ) : null}
              {user.profile.real_name_normalized && (
                <div className="nametag-name">
                  {user.profile.real_name_normalized}
                </div>
              )}
            </div>
          </div>
          <div
            className="nametag-container_footer"
            style={{
              paddingLeft: nametagPadding,
              paddingRight: nametagPadding,
              paddingBottom: nametagPadding,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={defaultIcon}
                alt="Logo"
                height={24}
                width={24}
                style={{ borderRadius: "3px" }}
              />
              <div
                style={{
                  padding: "1em",
                }}
              >
                Company Name, Inc.
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));
};

export default PrintablePage;
