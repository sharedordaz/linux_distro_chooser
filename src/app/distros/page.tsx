'use client'
import Head from 'next/head';
import Image from 'next/image';
import distributionsData from '/public/distrosTest.json';

export default function Distributions() {
  return (
    <div>
      <Head>
        <title>Linux Distributions</title>
        <meta name="description" content="Linux Distributions Information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Linux Distributions</h1>

      <div className="grid-container">
        {distributionsData.map((distribution, index) => (
          <div key={index} className="card">
            <Image src={`/distros/${distribution.logo}`} alt={distribution.name} width={200} height={200} />
            <h2>{distribution.name}</h2>
            <p>{distribution.description}</p>
            <p><strong>Release:</strong> {distribution.release}</p>
            <p><strong>Package Manager:</strong> {distribution.packageManager}</p>
            <p><strong>Based On:</strong> {distribution.basedOn}</p>
            <p><strong>Difficulty:</strong> {distribution.difficulty}</p>
            <p><strong>Desktop Environment:</strong> {distribution.desktopEnvironment}</p>
            <p><strong>Focused On:</strong> {distribution.focusedOn}</p>
            <p><strong>Raw Terminal:</strong> {distribution.rawTerminal ? 'Yes' : 'No'}</p>
            <p><strong>Arm:</strong> {distribution.arm ? 'Yes' : 'No'}</p>
            <p><strong>Easy GPU:</strong> {distribution.easyGPU ? 'Yes' : 'No'}</p>
            <p><strong>Flavors:</strong> {distribution.flavors.join(', ')}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .card {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .card h2 {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
