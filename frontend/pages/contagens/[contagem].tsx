import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { HourlyBarChart } from "../../components/HourlyBarChart";
import Layout from "../../components/Layout";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import InfoCard from "../../components/InfoCard";

const Contagem = ({ count }) => {
  const [viewport, setViewport] = useState({
    latitude: count.location.coordinates[0],
    longitude: count.location.coordinates[1],
    zoom: 16,
    bearing: 0,
    pitch: 0,
  });

  let summaryData = [
    {
      id: "Mulheres",
      label: "Mulheres",
      value: (count.summary.women_percent * 100).toFixed(1),
      color: "hsl(1, 70%, 50%)",
    },
    {
      id: "Homens",
      label: "Homens",
      value: (count.summary.men_percent * 100).toFixed(1),
      color: "hsl(293, 70%, 50%)",
    },
    {
      id: "Crianças",
      label: `Crianças ${(count.summary.children_percent * 100).toFixed(1)}%`,
      value: (count.summary.children_percent * 100).toFixed(1),
      color: "hsl(163, 70%, 50%)",
    },
  ];

  let hourlyMen = [],
    hourlyWomen = [],
    hourlyChildren = [],
    keyMap = new Map([
      ["men", { name: "Homens" }],
      ["women", { name: "Mulheres" }],
      ["child", { name: "Crianças" }],
    ]),
    hourlyBarKeysOriginal = ["men", "women", "child"],
    hourlyBarKeys = ["Homens", "Mulheres", "Crianças"],
    hourlyBarData = [],
    hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  hours.forEach((h) => {
    hourlyMen.push({ x: h, y: count.data.qualitative.men.count_per_hour[h] });
    hourlyWomen.push({
      x: h,
      y: count.data.qualitative.women.count_per_hour[h],
    });
    hourlyChildren.push({
      x: h,
      y: count.data.qualitative.child.count_per_hour[h],
    });
    let hourObject = {
      hour: h.toString(),
    };
    hourlyBarKeysOriginal.forEach((k) => {
      hourObject[keyMap.get(k).name] =
        count.data.qualitative[k].count_per_hour[h];
    });
    hourlyBarData.push(hourObject);
  });

  const sumCountPerHour = (flowCount: object): number => {
    return Object.values(flowCount["count_per_hour"]).reduce(
      (a: number, b: number) => a + b,
      0
    ) as number;
  };

  const quantitativeData = count.data.quantitative,
    qualitativeData = count.data.qualitative,
    womenSum = `${(
      (100 * sumCountPerHour(qualitativeData.women)) /
      count.summary.total
    ).toFixed(1)}%`;

  // TODO: Refactor to more generic cases
  let flowKeys = [
      count.north.name,
      count.east.name,
      count.south.name,
      count.west.name,
    ],
    flowMatrix = [
      [
        0,
        sumCountPerHour(quantitativeData.north_west),
        sumCountPerHour(quantitativeData.north_south),
        sumCountPerHour(quantitativeData.north_east),
      ],
      [
        sumCountPerHour(quantitativeData.east_north),
        0,
        sumCountPerHour(quantitativeData.east_west),
        sumCountPerHour(quantitativeData.east_south),
      ],
      [
        sumCountPerHour(quantitativeData.south_east),
        sumCountPerHour(quantitativeData.south_north),
        0,
        sumCountPerHour(quantitativeData.south_west),
      ],
      [
        sumCountPerHour(quantitativeData.west_south),
        sumCountPerHour(quantitativeData.west_north),
        sumCountPerHour(quantitativeData.west_east),
        0,
      ],
    ];

  return (
    <Layout>
      <Head>
        <title>Plataforma de Dados | Contagens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="text-white text-center justify-center align-middle content-center flex w-full bg-ameciclo flex-col"
        style={{ height: "25vh" }}
      >
        <div className="container mx-auto my-8">
          <div className="container mx-auto my-12">
            <h1 className="text-4xl font-bold">{count.name}</h1>
          </div>
        </div>
      </div>
      <div className="bg-ameciclo text-white p-4 items-center uppercase flex">
        <div className="container mx-auto">
          <Breadcrumb
            label={count.name}
            slug={count._id}
            routes={["/", "/contagens", count._id]}
          />
        </div>
      </div>

      <main className="flex-auto">
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-10 my-10">
          <InfoCard
            data={count.summary.total}
            label={"Ciclistas"}
            // style={"ameciclo"}
          />
          <InfoCard
            data={count.summary.hour_max}
            label={"Pico de ciclistas no intervalo de 1h"}
            style={"ameciclo"}
          />
          <InfoCard
            data={count.date.substr(0, 10).split("-").reverse().join("/")}
            label={"Data da contagem"}
            style={"ameciclo"}
          />
        </section>
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 auto-rows-auto gap-10 my-10">
          <div
            className="bg-green-200 rounded shadow-2xl lg:col-span-3"
            style={{ minHeight: "400px" }}
          >
            <ReactMapGL
              {...viewport}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/mapbox/light-v10"
              mapboxApiAccessToken={
                "pk.eyJ1IjoiaWFjYXB1Y2EiLCJhIjoiODViMTRmMmMwMWE1OGIwYjgxNjMyMGFkM2Q5OWJmNzUifQ.OFgXp9wbN5BJlpuJEcDm4A"
              }
            >
              <Marker
                latitude={count.location.coordinates[0]}
                longitude={count.location.coordinates[1]}
              >
                <svg
                  height={40}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "#d00",
                    stroke: "none",
                    transform: `translate(${-40 / 2}px,${-40}px)`,
                  }}
                >
                  <path
                    d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
                  />
                </svg>
              </Marker>
              <Marker
                latitude={count.location.coordinates[0]}
                longitude={count.location.coordinates[1]}
              >
                <svg
                  height={40}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "#d00",
                    stroke: "none",
                    transform: `translate(${-40 / 2}px,${-40}px)`,
                  }}
                >
                  <path
                    d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
                  />
                </svg>
              </Marker>
              <Marker
                latitude={count.location.coordinates[0] + 0.001}
                longitude={count.location.coordinates[1]}
              >
                <svg
                  height={40}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "#d00",
                    stroke: "none",
                    transform: `translate(${-40 / 2}px,${-40}px)`,
                  }}
                >
                  <path
                    d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
                  />
                </svg>
              </Marker>
              <Marker
                latitude={count.location.coordinates[0] - 0.001}
                longitude={count.location.coordinates[1]}
              >
                <svg
                  height={40}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "#d00",
                    stroke: "none",
                    transform: `translate(${-40 / 2}px,${-40}px)`,
                  }}
                >
                  <path
                    d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
                  />
                </svg>
              </Marker>
              <Marker
                latitude={count.location.coordinates[0]}
                longitude={count.location.coordinates[1] + 0.001}
              >
                <svg
                  height={40}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "#d00",
                    stroke: "none",
                    transform: `translate(${-40 / 2}px,${-40}px)`,
                  }}
                >
                  <path
                    d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
                  />
                </svg>
              </Marker>
            </ReactMapGL>
          </div>
        </section>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-10 my-10">
          <InfoCard data={womenSum} label={"Mulheres"} style={"ameciclo"} />
          <InfoCard
            data={count.summary.hour_max}
            label={"Pico de ciclistas no intervalo de 1h"}
            style={"ameciclo"}
          />
          <InfoCard
            data={count.date.substr(0, 10).split("-").reverse().join("/")}
            label={"Data da contagem"}
            style={"ameciclo"}
          />
          <InfoCard
            data={count.summary.total}
            label={"Ciclistas"}
            style={"ameciclo"}
          />
          <InfoCard
            data={count.summary.hour_max}
            label={"Pico de ciclistas no intervalo de 1h"}
            style={"ameciclo"}
          />
          <InfoCard
            data={count.date.substr(0, 10).split("-").reverse().join("/")}
            label={"Data da contagem"}
            style={"ameciclo"}
          />
        </section>
        <section className="container mx-auto grid grid-cols-1 auto-rows-auto gap-10 my-10">
          <div
            className="shadow-2xl rounded p-10 text-center overflow-x-scroll"
            style={{ height: "700px" }}
          >
            <h2 className="text-gray-600 text-3xl">
              Quantidade de ciclistas por hora
            </h2>
            <HourlyBarChart data={hourlyBarData} keys={hourlyBarKeys} />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.plataforma.ameciclo.org/contagens/v1/cyclist-count"
  );
  const cyclistCount = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = cyclistCount.map((c) => ({
    params: { contagem: c._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.plataforma.ameciclo.org/contagens/v1/cyclist-count/${params.contagem}`
  );
  const count = await res.json();
  return {
    props: {
      count: count,
    },
    revalidate: 1,
  };
}

export default Contagem;
