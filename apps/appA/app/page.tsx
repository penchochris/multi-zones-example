export default function Home() {
  return (
    <>
      <h1>App A — Home</h1>
      <p>
        This page is served by <strong>appA</strong> (port 3000). Click{" "}
        <a href="/appB">App B</a> to load the appB zone through appA&apos;s
        rewrites.
      </p>
    </>
  );
}
