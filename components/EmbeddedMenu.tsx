import Head from 'next/head';

function EmbeddedMenu() {
  return (
    <div style={{ width: '100%', minHeight: '100%', margin: 0, padding: 0 }}>
      <Head>
        <script src="https://sweede.io/embed//bitterroot-cannabis-company-missoula" defer></script>
      </Head>
      {/* your other components */}
      <div id="iframe-placeholder" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
}

export default EmbeddedMenu;
