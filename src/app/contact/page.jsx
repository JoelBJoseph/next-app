import Link from "next/link";
import styles from "./contact.module.css";
import Image from "next/image";

const Contact = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/cloud.png" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.formContainer}>
                {/* <HydrationTestNoSSR/> */}
                {/* <div suppressHydrationWarning>{a}</div> */}
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Phone Number (Optional)"/>
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Message"
                    ></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}
export default Contact