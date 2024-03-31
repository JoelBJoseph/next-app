import Link from "next/link";

const NotFound = () => {
    return(
        <div>
            Sorry Page not Found!<br/>
            <Link href={"/"}>Return Home</Link>
        </div>
    );
}
export default NotFound