import "../index.css";
export function Button({handleBtnClick}) {
  let buttons = [
    "C",
    "<",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    ".",
    "0",
    "="
  ];
  return (
    <>
      <div className="buttonContainer">
        {buttons.map((btnVal) => (
          <button key={btnVal} className="button" onClick={()=>handleBtnClick(btnVal)}>{btnVal}</button>
        ))}
      </div>
    </>
  );
}
