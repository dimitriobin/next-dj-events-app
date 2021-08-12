import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function SearchPage({ events }) {
    const router = useRouter();

    return (
        <Layout>
            <h1>Search for "{router.query.term}"</h1>
            <Link href='/events'>Go back</Link>
            {events.length === 0 && <h3>No events to show</h3>}

            {events.map((evt) => (
                <EventItem key={evt.id} evt={evt}>
                    {evt.name}
                </EventItem>
            ))}
        </Layout>
    );
}

export async function getServerSideProps({ query: { term } }) {
    const query = qs.stringify({
        _where: {
            _or: [
                { name_contains: term },
                { performers_contains: term },
                { description_contains: term },
                { venue_contains: term },
            ],
        },
    });
    const res = await fetch(`${API_URL}/events?${query}`);
    const events = await res.json();

    return {
        props: { events },
    };
}
