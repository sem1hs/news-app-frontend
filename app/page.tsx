export default function Home() {
  const name = process.env.SECRET;
  return <h1>{name}</h1>;
}
