import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styles from "@/styles/Event.module.css";
import { API_URL } from "@/config/index";

export default function EventPage({ evt }) {
    const deleteEvent = (e) => {
        console.log("delete");
    };
    return (
        <Layout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events.edit/${evt.id}`}>
                        <a>
                            <FaPencilAlt /> Edit event
                        </a>
                    </Link>
                    <a href='#' className={styles.delete} onClick={deleteEvent}>
                        <FaTimes /> Delete event
                    </a>
                </div>
                <span>
                    {new Date(evt.date).toLocaleDateString("fr-FR")} at{" "}
                    {evt.time}
                </span>
                <h1>{evt.name}</h1>
                {evt.image && (
                    <div className={styles.image}>
                        <Image
                            src={evt.image.formats.medium.url}
                            width={960}
                            height={600}
                        />
                    </div>
                )}

                <h3>Performers</h3>
                <p>{evt.performers}</p>
                <h3>Description</h3>
                <p>{evt.description}</p>
                <h3>Venue: {evt.venue}</h3>
                <p>{evt.address}</p>

                <Link href='/events'>
                    <a className={styles.back}>Back</a>
                </Link>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/events`);
    const events = await res.json();

    const paths = events.map((evt) => ({
        params: { slug: evt.slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`${API_URL}/events?slug=${slug}`);
    const events = await res.json();

    return {
        props: {
            evt: events[0],
        },
        revalidate: 1,
    };
}
