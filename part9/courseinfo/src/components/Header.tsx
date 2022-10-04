import { MyProps } from "../types";

const Header = ({courseName}: MyProps):JSX.Element => {
    return (
      <h1>{courseName}</h1>
    )
}

export default Header;