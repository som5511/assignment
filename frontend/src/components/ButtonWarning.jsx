import {Link} from "react-router-dom";

export function ButtonWarning({label, buttonText, to}){
    return <div className = "font-semibold ml-4 text-lg">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to = {to}>
            {buttonText}
        </Link>
    </div>
}