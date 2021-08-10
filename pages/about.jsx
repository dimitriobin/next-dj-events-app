import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";

export default function AboutPage() {
    return (
        <Layout title='About DJ Events'>
            <h1>About me</h1>
            <img
                src={
                    "https://picsum.photos/400?random=" +
                    Math.floor(Math.random() * 100)
                }
                alt=''
            />
            <h2>Walter</h2>
            <p>
                Debitis ab vel. Accusantium dolores velit ut voluptas nulla qui
                eos neque. Aut omnis et laudantium quidem. Necessitatibus ipsa
                fugiat aut enim sit nihil enim architecto ad. Nostrum
                necessitatibus repudiandae et totam. In deleniti ab esse
                provident aut perferendis molestias voluptatem. Laborum est
                magni quia quia mollitia. Aut veniam sit ut sed corrupti
                distinctio tempora et nisi. Nostrum consequatur expedita est ex
                ea consequuntur ea inventore. Odio ut placeat sint et quos. Qui
                adipisci officia vel velit ut quaerat veniam. Placeat laborum
                repellat voluptates vitae ullam recusandae sit vel. Doloribus
                rerum corrupti nihil. Voluptas neque qui sit molestiae placeat
                et vel aut autem. Recusandae quo magni maxime animi dolore
                consequatur ut voluptas. Voluptatem aliquid non qui et
                perferendis sint neque asperiores. Autem omnis aut assumenda.
                Perspiciatis unde non quibusdam ut.
            </p>
            <p>
                Debitis ab vel. Accusantium dolores velit ut voluptas nulla qui
                eos neque. Aut omnis et laudantium quidem. Necessitatibus ipsa
                fugiat aut enim sit nihil enim architecto ad. Nostrum
                necessitatibus repudiandae et totam. In deleniti ab esse
                provident aut perferendis molestias voluptatem. Laborum est
                magni quia quia mollitia. Aut veniam sit ut sed corrupti
                distinctio tempora et nisi. Nostrum consequatur expedita est ex
                ea consequuntur ea inventore. Odio ut placeat sint et quos. Qui
                adipisci officia vel velit ut quaerat veniam. Placeat laborum
                repellat voluptates vitae ullam recusandae sit vel. Doloribus
                rerum corrupti nihil. Voluptas neque qui sit molestiae placeat
                et vel aut autem. Recusandae quo magni maxime animi dolore
                consequatur ut voluptas. Voluptatem aliquid non qui et
                perferendis sint neque asperiores. Autem omnis aut assumenda.
                Perspiciatis unde non quibusdam ut.
            </p>
        </Layout>
    );
}
