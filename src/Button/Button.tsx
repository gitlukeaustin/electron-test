import { FC } from "react";

const Button: FC<{
    onClick: (event: any) => void
}> = ({onClick}) => {
    return (
        <button onClick={onClick}>
            click here to upload
        </button>
    )
}

export default Button;