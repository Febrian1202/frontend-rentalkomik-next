interface PageSectionProps {
  judul: string;
  children: React.ReactNode;
}

function PageSection(props: PageSectionProps) {
  return (
    <section className="page-section">
      <h2>{props.judul}</h2>
      <div className="page-section-body">{props.children}</div>
    </section>
  );
}

export default PageSection;
