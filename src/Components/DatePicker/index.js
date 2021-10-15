import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
export default function DatePicker({ value, onChange }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        autoOk={true}
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={value}
        onChange={onChange}
        error
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        InputProps={{
          disableUnderline: true,
        }}
        inputProps={{
          backgroundColor: "white",
        }}
        style={{
          padding: "10px 2px",
          border: "1px solid #1597C6",
          borderRadius: 6,
          backgroundColor: "#f2f2f2",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
