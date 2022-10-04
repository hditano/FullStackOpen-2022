import { MyContent } from "../types";

const Total = ({courseParts}: {courseParts: MyContent[]}): JSX.Element => {
    return (
        <>
            <p>
                Number of exercises{" "}
                {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
            </p>
        </>
    )
}

export default Total;