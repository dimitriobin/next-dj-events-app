import styles from "@/styles/Search.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
    const [term, setTerm] = useState("");

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/events/search?term=${term}`);
        setTerm("");
    };

    return (
        <div className={styles.search}>
            <form action='' onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder='Search events ...'
                />
            </form>
        </div>
    );
}
