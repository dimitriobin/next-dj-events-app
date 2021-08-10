import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function EventPage() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1>My event: {router.query.slug}</h1>
        </div>
    );
}
