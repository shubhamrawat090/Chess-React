// eslint-disable-next-line react/prop-types
const ShowRowColIndex = ({ rowIdx, colIdx }) => {
  return (
    <div
      style={{
        color: "red",
        fontSize: "12px",
        fontWeight: "600",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
      }}
    >
      {rowIdx},{colIdx}
    </div>
  );
};

export default ShowRowColIndex;
