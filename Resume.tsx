import * as React from "react";

export const Resume: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lala Azizli - Product Lead</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="stylesheet" href="style.css" />
      </head>

      <body>
        <div id="layout">
          <h1 id="name">Lala Azizli</h1>
          <p id="bio">
            Fintech and banking professional with 6+ years of experience in impact-focused product management. 
Strong domain expertise in payments and platform products. Key strengths: solving difficult business problems, leading  products at scale and creativity. Active in the national-wide startup ecosystem and women in tech, aspiring user-centric product leader with strong technical and design skills. Excited about Web3 and its future potential.
          </p>

          <BulletedList
            id="contacts"
            bullets={[
              "Baku, Azerbaijan",
              <a href="tel:+999 999999999">+994 5078310000</a>,
              {
                label: "lazizlij@gmail.com",
                href: "mailto:lazizlij@gmail.com",
              },
              {
                label: "Portfolio",
                href: "https://www.azizlilala.com/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/azizlilala/",
              },
            ]}
          />

          <Section id="experience" header="Experience">
            <JobSection
              company={{
                name: "PASHA Bank",
                link: "https://www.pashabank.az",
              }}
              location="Azerbaijan"
              position="Product Lead"
              dates={{
                from: "January 2021",
                to: "Present",
              }}
              bullets={[
      
                  "Built from 0 to 14-member innovative/agile product portfolio, launched 4 new startups and discovered 20 startup ideas", 
                  "Established a playbook for company-wide Innovations (including product discovery, design and delivery, investment and resources, identifying value opportunities, delivering solutions, iterating or dropping on them)",
                  "Revamped highly-accurate hiring process & built 2023 company-wide hiring playbook, reduced manual time for hiring by 12x, est. $300K annual hiring cost savings. Created PO assessment matrix, that reduced the spent time by 12x and saved $5K annual in cost-of-hiring-talent", 
                  "Evengelised and launched ChayPay, the first country-wide cashless tipping App supporting a countrywide strategic roadmap in increasing the cashless turnover. As a pioneer with a proven adoption record of increasing 30% tipping in restaurants, ChayPay inspired 3 new startups to compete",
                  "Became main female actor in startup ecosystem, mentored startups at 3 days hackathon"
               
              ]}
            />

            <JobSection
              company={{
                name: "PASHA Bannk",
                link: "https://www.pashabank.az",
              }}
              location="Azerbaijan"
              position="Senior Product Manager"
              dates={{
                from: "November 2020",
                to: "January 2021",
              }}
              bullets={[
                "Built the first B2B startup from zero to GTM with a $1bln turnover in the first year, decreasing by 80% the time needed to run & complete the RFQ (request for quotation) and by 41% the manual time spent",
                "Designed procurement sourcing flow proven to whiten the procurement process, open doors to new businesses and partnerships, and decrease costs of procurement for the buyers",
                "Prepared supplier issuing flow, which decreased Time To Yes of finding suppliers by 80%",
                "Led 16-member 2 cross-functional squads toward creating offerings for legal entities"
              ]}
            />

          </Section>

          <Section id="education" header="Education">
            <EducationSubsection
              institution={{
                name: "Azerbaijan University of Languages",
                href: "https://www.mit.edu/",
              }}
              location="Baku, Azerbaijan"
              degree="Master's degree"
              faculty="International Affairs and Diplomacy"
              dates={{
                from: "2014",
                to: "2017",
              }}
            />
          </Section>

          <Section id="skills" header="Skills">
            <BulletedList
              bullets={[
                "Product Discovery",
                "Product Strategy",
                "Roadmapping",
                "Product-Market fit",
                "Data modeling",
                "SQL",
                "HTML",
                "CSS",
                "Communication",
                "Adaptability",
              ]}
            />
          </Section>

          <Section id="langs" header="Languages">
            <BulletedList bullets={["English", "Russian", "Turkish"]} />
          </Section>

          <Section id="articles" header="Articles">
            <BulletedList
              bullets={[
                {
                  label: "My NFT journey",
                  href: "https://medium.com/@azizlilala/how-to-create-promote-sell-nft-dd474a1364f4",
                },
              ]}
            />
          </Section>
        </div>
      </body>
    </html>
  );
};

const Section: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}> = ({ header, children, id }) => {
  return (
    <section id={id} className="section">
      <header>{header}</header>
      {children}
    </section>
  );
};

const Subsection: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, children }) => {
  return (
    <section className="subsection">
      <header>{header}</header>
      {children}
    </section>
  );
};

const JobSection: React.FC<{
  company: { name: React.ReactNode; link: string };
  location: string;
  position: string;
  dates: { from: string; to: string };
  description?: React.ReactNode;
  bullets?: IBullet[];
}> = ({ company, location, position, dates, description, bullets }) => {
  return (
    <Subsection
      header={
        <>
          <Link
            href={company.link}
            label={company.name}
            className="company-name"
          />
          , {location} — {position}
        </>
      }
    >
      <div className="dates">
        {dates.from} - {dates.to}
      </div>
      {description ? <div className="description">{description}</div> : null}
      {bullets ? <BulletedList bullets={bullets} /> : null}
    </Subsection>
  );
};

const EducationSubsection: React.FC<{
  institution: { name: string; href: string };
  location: string;
  degree: string;
  faculty: string;
  dates: { from: string; to: string };
}> = ({ institution, location, faculty, dates, degree }) => {
  return (
    <Subsection
      header={
        <>
          {faculty}, <Link label={institution.name} href={institution.href} />
        </>
      }
    >
      <div style={{ marginTop: "0.3rem" }}>
        {location} — {degree}
      </div>
      <div className="dates">
        {dates.from} - {dates.to}
      </div>
    </Subsection>
  );
};

interface ILink {
  label: React.ReactNode;
  href: string;
}
function isLink(x: any): x is ILink {
  return x.label !== undefined;
}
export const Link: React.FC<
  ILink & { className?: string; highlight?: boolean }
> = ({ label, href, className, highlight }) => {
  const a = (
    <a target="_blank" href={href} className={className}>
      {label}
    </a>
  );
  return highlight ? <strong>{a}</strong> : a;
};

type IBullet = React.ReactNode | ILink | IBullet[];
const BulletedList: React.FC<{ bullets: IBullet[]; id?: string }> = ({
  bullets,
  id,
}) => {
  return (
    <ul id={id}>
      {bullets.map((x, i) =>
        Array.isArray(x) ? (
          <BulletedList key={i} bullets={x} />
        ) : (
          <li key={i}>{isLink(x) ? <Link {...x} /> : x}</li>
        )
      )}
    </ul>
  );
};
